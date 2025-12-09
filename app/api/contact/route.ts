import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import prisma from '@/lib/prisma';

// Rate limiting map (in-memory, for production use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// Rate limit: 5 requests per 15 minutes per IP
const RATE_LIMIT = 5;
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes in milliseconds

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const userLimit = rateLimitMap.get(ip);

  if (!userLimit || now > userLimit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (userLimit.count >= RATE_LIMIT) {
    return false;
  }

  userLimit.count++;
  return true;
}

// Email validation
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Phone validation
function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[0-9+\-\s()]{10,}$/;
  return phoneRegex.test(phone);
}

// Sanitize input to prevent XSS
function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '')
    .trim()
    .substring(0, 1000); // Limit length
}

export async function POST(request: NextRequest) {
  try {
    // Get IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    
    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();
    const { name, email, phone, company, service, message } = body;

    // Validation
    const errors: Record<string, string> = {};

    if (!name || name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }

    if (!email || !isValidEmail(email)) {
      errors.email = 'Please provide a valid email address';
    }

    if (!phone || !isValidPhone(phone)) {
      errors.phone = 'Please provide a valid phone number';
    }

    if (!message || message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { error: 'Validation failed', errors },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      phone: sanitizeInput(phone),
      company: company ? sanitizeInput(company) : 'Not provided',
      service: service ? sanitizeInput(service) : 'Not specified',
      message: sanitizeInput(message),
    };

    // Get user agent for tracking
    const userAgent = request.headers.get('user-agent') || 'unknown';

    // Save to database first (before sending emails)
    let submissionId: string | null = null;
    let emailSentSuccessfully = false;

    try {
      const submission = await prisma.contactSubmission.create({
        data: {
          name: sanitizedData.name,
          email: sanitizedData.email,
          phone: sanitizedData.phone,
          company: sanitizedData.company === 'Not provided' ? null : sanitizedData.company,
          service: sanitizedData.service === 'Not specified' ? null : sanitizedData.service,
          message: sanitizedData.message,
          ipAddress: ip,
          userAgent: userAgent,
          status: 'new',
          emailSent: false,
        },
      });
      submissionId = submission.id;
    } catch (dbError) {
      console.error('Database error:', dbError);
      // Continue even if database fails - we still want to send emails
    }

    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Service name mapping
    const serviceNames: Record<string, string> = {
      'corporate-bond-underwriting': 'Corporate Bond Underwriting',
      'government-securities': 'Government Securities',
      'high-yield-bonds': 'High-Yield Bonds',
      'bond-portfolio-management': 'Bond Portfolio Management',
      'credit-rating-advisory': 'Credit Rating Advisory',
      'secondary-market-trading': 'Secondary Market Trading',
    };

    const serviceName = serviceNames[sanitizedData.service] || sanitizedData.service;

    // Email to Binary Bonds team
    const adminMailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || 'sales@binarycapital.in',
      subject: `New Contact Form Submission - ${sanitizedData.name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #1e3a8a; margin-bottom: 5px; }
            .value { background: white; padding: 10px; border-left: 4px solid #d4af37; margin-top: 5px; }
            .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">New Contact Form Submission</h1>
              <p style="margin: 10px 0 0 0;">Binary Bonds Website</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${sanitizedData.name}</div>
              </div>
              
              <div class="field">
                <div class="label">Email:</div>
                <div class="value"><a href="mailto:${sanitizedData.email}">${sanitizedData.email}</a></div>
              </div>
              
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value"><a href="tel:${sanitizedData.phone}">${sanitizedData.phone}</a></div>
              </div>
              
              <div class="field">
                <div class="label">Company:</div>
                <div class="value">${sanitizedData.company}</div>
              </div>
              
              <div class="field">
                <div class="label">Service Interest:</div>
                <div class="value">${serviceName}</div>
              </div>
              
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${sanitizedData.message.replace(/\n/g, '<br>')}</div>
              </div>
              
              <div class="footer">
                <p>Submitted on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
                <p>IP Address: ${ip}</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Auto-reply email to user
    const userMailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: sanitizedData.email,
      subject: 'Thank you for contacting Binary Bonds',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .logo { font-size: 32px; font-weight: bold; margin-bottom: 10px; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
            .button { display: inline-block; background: #d4af37; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; font-weight: bold; }
            .contact-info { background: white; padding: 20px; border-left: 4px solid #d4af37; margin: 20px 0; }
            .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">Binary Bonds</div>
              <p style="margin: 0;">Strategic Bond Market Solutions</p>
            </div>
            <div class="content">
              <h2 style="color: #1e3a8a; margin-top: 0;">Thank You for Reaching Out!</h2>
              
              <p>Dear ${sanitizedData.name},</p>
              
              <p>Thank you for contacting Binary Bonds. We have received your inquiry and our team will review it shortly.</p>
              
              <p><strong>What happens next?</strong></p>
              <ul>
                <li>Our relationship manager will review your requirements</li>
                <li>You will receive a response within 24 business hours</li>
                <li>We'll discuss how we can help achieve your bond investment goals</li>
              </ul>
              
              <div class="contact-info">
                <h3 style="margin-top: 0; color: #1e3a8a;">Your Submission Details:</h3>
                <p><strong>Service Interest:</strong> ${serviceName}</p>
                <p><strong>Company:</strong> ${sanitizedData.company}</p>
                <p><strong>Message:</strong> ${sanitizedData.message.substring(0, 200)}${sanitizedData.message.length > 200 ? '...' : ''}</p>
              </div>
              
              <p>In the meantime, feel free to reach out to us directly:</p>
              <ul>
                <li><strong>Phone:</strong> <a href="tel:+917738056127">+91 7738056127</a></li>
                <li><strong>Email:</strong> <a href="mailto:sales@binarycapital.in">sales@binarycapital.in</a></li>
                <li><strong>Office Hours:</strong> Monday-Friday, 9 AM - 6 PM IST</li>
              </ul>
              
              <center>
                <a href="https://binarybonds.com" class="button">Visit Our Website</a>
              </center>
              
              <div class="footer">
                <p><strong>Binary Bonds</strong></p>
                <p>2045, 2nd Floor, Spaces Adani Height, Andheri West, Mumbai, India</p>
                <p>A specialized division of Binary Capital</p>
                <p style="margin-top: 20px; font-size: 12px;">This is an automated response. Please do not reply to this email.</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send emails
    try {
      await transporter.sendMail(adminMailOptions);
      await transporter.sendMail(userMailOptions);
      emailSentSuccessfully = true;
      
      // Update database to mark email as sent
      if (submissionId) {
        try {
          await prisma.contactSubmission.update({
            where: { id: submissionId },
            data: { emailSent: true },
          });
        } catch (updateError) {
          console.error('Failed to update email status:', updateError);
        }
      }
    } catch (emailError) {
      console.error('Email sending error:', emailError);
      // Submission is still saved in database even if email fails
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for contacting us. We will get back to you within 24 hours.',
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request. Please try again later.' },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS(request: NextRequest) {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    }
  );
}
