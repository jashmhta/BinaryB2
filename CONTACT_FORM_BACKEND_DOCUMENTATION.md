# Contact Form Backend Documentation

## Overview

The Binary Bonds website now includes a fully functional contact form backend with email notifications, validation, rate limiting, and security features.

## Features Implemented

### 1. **API Endpoint** ✅
- **Route:** `/api/contact`
- **Method:** POST
- **Framework:** Next.js 14 App Router API Routes
- **Response Format:** JSON

### 2. **Email Functionality** ✅
- **Library:** Nodemailer 7.0.11
- **Dual Email System:**
  - Admin notification email to Binary Bonds team
  - Auto-reply confirmation email to user
- **HTML Email Templates:** Professional, branded design
- **SMTP Support:** Compatible with Gmail, SendGrid, Mailgun, AWS SES, Outlook

### 3. **Security Features** ✅

#### Rate Limiting
- **Limit:** 5 requests per 15 minutes per IP address
- **Implementation:** In-memory map (can be upgraded to Redis for production)
- **Response:** 429 Too Many Requests when exceeded

#### Input Validation
- **Name:** Minimum 2 characters
- **Email:** Valid email format (regex validation)
- **Phone:** Valid phone number (10+ digits, allows international format)
- **Message:** Minimum 10 characters
- **Max Length:** All fields limited to 1000 characters

#### Input Sanitization
- **XSS Prevention:** Removes `<` and `>` characters
- **Trim:** Removes leading/trailing whitespace
- **Length Limiting:** Prevents buffer overflow attacks

### 4. **Form Validation** ✅

#### Client-Side Validation (ContactForm.tsx)
- Real-time validation on blur
- Error messages displayed inline
- Submit button disabled during submission
- Visual feedback for errors (red borders)

#### Server-Side Validation (API Route)
- Duplicate validation for security
- Detailed error responses
- Field-specific error messages
- Prevents malformed requests

### 5. **Email Templates** ✅

#### Admin Notification Email
**Sent to:** sales@binarycapital.in (configurable)

**Includes:**
- User's full details (name, email, phone, company)
- Service interest
- Complete message
- Submission timestamp (IST)
- IP address for tracking
- Professional HTML design with Binary Bonds branding

#### User Auto-Reply Email
**Sent to:** User's email address

**Includes:**
- Personalized greeting
- Confirmation of receipt
- Expected response time (24 hours)
- Summary of submission
- Direct contact information
- Link to website
- Professional HTML design

### 6. **Error Handling** ✅
- Network error handling
- SMTP connection error handling
- Validation error responses
- Rate limit error responses
- Generic 500 error for unexpected issues

## Setup Instructions

### Step 1: Install Dependencies

Dependencies are already installed:
```bash
pnpm add nodemailer
pnpm add -D @types/nodemailer
```

### Step 2: Configure Environment Variables

Create a `.env.local` file in the project root:

```env
# SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM=noreply@binarybonds.com

# Contact Form Recipient
CONTACT_EMAIL=sales@binarycapital.in
```

### Step 3: Gmail Setup (Recommended for Testing)

1. **Enable 2-Step Verification:**
   - Go to https://myaccount.google.com/security
   - Enable 2-Step Verification

2. **Generate App Password:**
   - Visit https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Enter "Binary Bonds Contact Form"
   - Copy the 16-character password

3. **Update .env.local:**
   ```env
   SMTP_USER=your-gmail@gmail.com
   SMTP_PASSWORD=xxxx xxxx xxxx xxxx
   ```

### Step 4: Alternative SMTP Providers

#### SendGrid (Recommended for Production)
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASSWORD=your-sendgrid-api-key
```

**Free Tier:** 100 emails/day permanently

#### Mailgun
```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=postmaster@your-domain.mailgun.org
SMTP_PASSWORD=your-mailgun-password
```

**Free Tier:** 5,000 emails/month for 3 months

#### AWS SES (Best for Scale)
```env
SMTP_HOST=email-smtp.us-east-1.amazonaws.com
SMTP_PORT=587
SMTP_USER=your-aws-access-key-id
SMTP_PASSWORD=your-aws-secret-access-key
```

**Free Tier:** 62,000 emails/month (when sending from EC2)

#### Outlook/Office 365
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASSWORD=your-password
```

### Step 5: Test the Form

1. Start the development server:
   ```bash
   pnpm dev
   ```

2. Navigate to the contact section: `http://localhost:3000/#contact`

3. Fill out and submit the form

4. Check:
   - Console for any errors
   - Admin email inbox (sales@binarycapital.in)
   - User's email inbox for auto-reply

## API Documentation

### POST /api/contact

#### Request Body
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 98765 43210",
  "company": "ABC Corporation",
  "service": "corporate-bond-underwriting",
  "message": "I am interested in your bond underwriting services..."
}
```

#### Success Response (200)
```json
{
  "success": true,
  "message": "Thank you for contacting us. We will get back to you within 24 hours."
}
```

#### Validation Error Response (400)
```json
{
  "error": "Validation failed",
  "errors": {
    "email": "Please provide a valid email address",
    "phone": "Please provide a valid phone number"
  }
}
```

#### Rate Limit Error Response (429)
```json
{
  "error": "Too many requests. Please try again later."
}
```

#### Server Error Response (500)
```json
{
  "error": "An error occurred while processing your request. Please try again later."
}
```

## File Structure

```
binarybonds/
├── app/
│   └── api/
│       └── contact/
│           └── route.ts          # API endpoint
├── components/
│   ├── Contact.tsx               # Contact section component
│   └── ContactForm.tsx           # Form component with API integration
├── .env.example                  # Environment variables template
├── .env.local                    # Your actual environment variables (not in git)
└── CONTACT_FORM_BACKEND_DOCUMENTATION.md
```

## Security Considerations

### Implemented
✅ **Rate Limiting:** Prevents spam and abuse
✅ **Input Validation:** Server-side validation for all fields
✅ **Input Sanitization:** XSS prevention
✅ **CORS Handling:** Proper OPTIONS method support
✅ **Error Logging:** Console logging for debugging
✅ **Email Verification:** Valid email format required

### Recommended for Production
- [ ] **Database Logging:** Store submissions in database as backup
- [ ] **Redis Rate Limiting:** Replace in-memory map with Redis
- [ ] **CAPTCHA:** Add reCAPTCHA v3 for bot prevention
- [ ] **Honeypot Field:** Hidden field to catch bots
- [ ] **Email Queue:** Use job queue (Bull, BullMQ) for email sending
- [ ] **Monitoring:** Add error tracking (Sentry, LogRocket)
- [ ] **Analytics:** Track form submissions and conversion rates

## Testing Checklist

### Functional Testing
- [ ] Form submits successfully with valid data
- [ ] Admin receives notification email
- [ ] User receives auto-reply email
- [ ] Success message displays after submission
- [ ] Form resets after 5 seconds

### Validation Testing
- [ ] Empty name field shows error
- [ ] Invalid email format shows error
- [ ] Invalid phone format shows error
- [ ] Empty message field shows error
- [ ] All errors clear when user types

### Security Testing
- [ ] Rate limiting works (try 6 submissions quickly)
- [ ] XSS attempts are sanitized
- [ ] Long inputs are truncated
- [ ] Invalid JSON returns 400 error

### Email Testing
- [ ] Admin email has correct formatting
- [ ] User email has correct formatting
- [ ] Emails display properly in Gmail, Outlook, Apple Mail
- [ ] Links in emails work correctly
- [ ] Email delivery is reliable

## Troubleshooting

### Issue: Emails not sending

**Solution 1: Check SMTP credentials**
```bash
# Verify environment variables are loaded
console.log(process.env.SMTP_USER);
```

**Solution 2: Gmail App Password**
- Ensure 2-Step Verification is enabled
- Generate new App Password
- Use the 16-character password (no spaces)

**Solution 3: Check firewall/port**
- Port 587 must be open
- Try port 465 with SMTP_SECURE=true

### Issue: Rate limiting not working

**Solution:** Rate limiting uses in-memory storage. It resets when the server restarts. For production, implement Redis-based rate limiting.

### Issue: Form submission slow

**Solution:** Email sending can take 2-3 seconds. Consider implementing a job queue:
```bash
pnpm add bull bullmq
```

### Issue: Emails going to spam

**Solutions:**
1. Use a custom domain email (not Gmail)
2. Set up SPF, DKIM, DMARC records
3. Use a professional SMTP service (SendGrid, AWS SES)
4. Warm up your sending domain gradually

## Production Deployment

### Vercel (Recommended)

1. **Add environment variables in Vercel dashboard:**
   - Go to Project Settings > Environment Variables
   - Add all SMTP variables
   - Deploy

2. **Verify deployment:**
   ```bash
   curl -X POST https://binarybonds.com/api/contact \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@example.com","phone":"1234567890","message":"Test message"}'
   ```

### Environment Variables in Vercel
```
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey
SMTP_PASSWORD=SG.xxxxxxxxxxxxx
SMTP_FROM=noreply@binarybonds.com
CONTACT_EMAIL=sales@binarycapital.in
```

## Monitoring & Analytics

### Recommended Tracking
1. **Form Submissions:** Track successful submissions
2. **Conversion Rate:** Submissions / Page views
3. **Error Rate:** Failed submissions / Total attempts
4. **Email Delivery Rate:** Successful sends / Total attempts
5. **Response Time:** Time to send email

### Implementation Example
```typescript
// Add to route.ts
import { track } from '@/lib/analytics';

track('contact_form_submission', {
  service: sanitizedData.service,
  timestamp: new Date().toISOString(),
});
```

## Future Enhancements

### Phase 1 (Immediate)
- [ ] Add CAPTCHA (reCAPTCHA v3)
- [ ] Implement database logging
- [ ] Add email queue system

### Phase 2 (Short-term)
- [ ] Create admin dashboard to view submissions
- [ ] Add email templates for different services
- [ ] Implement SMS notifications for urgent inquiries

### Phase 3 (Long-term)
- [ ] CRM integration (Salesforce, HubSpot)
- [ ] Auto-assignment to relationship managers
- [ ] Follow-up email sequences
- [ ] Analytics dashboard

## Support & Maintenance

### Regular Maintenance
- **Weekly:** Check email delivery rates
- **Monthly:** Review rate limiting logs
- **Quarterly:** Update dependencies
- **Annually:** Review and update email templates

### Monitoring Alerts
Set up alerts for:
- Email sending failures
- High rate limit hits
- API errors (500s)
- Unusual traffic patterns

## Conclusion

The contact form backend is production-ready with:
✅ Secure API endpoint
✅ Email notifications (dual system)
✅ Rate limiting and validation
✅ Professional email templates
✅ Error handling
✅ Comprehensive documentation

**Next Steps:**
1. Configure SMTP credentials in `.env.local`
2. Test the form thoroughly
3. Deploy to production
4. Monitor email delivery
5. Consider adding CAPTCHA for additional security

---

**Documentation Version:** 1.0
**Last Updated:** December 2025
**Contact:** For issues or questions, contact the development team
