'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\-\s()]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setErrors({ submit: data.error || 'Failed to send message. Please try again.' });
        }
        setIsSubmitting(false);
        return;
      }
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        });
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setErrors({ submit: 'Network error. Please check your connection and try again.' });
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 text-center">
        <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400" />
        </div>
        <h3 className="text-3xl font-black text-[hsl(var(--navy))] dark:text-white mb-4">
          Thank You!
        </h3>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-4">
          We've received your message and will get back to you within 24 hours.
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          A confirmation email has been sent to {formData.email}
        </p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-12">
      {/* Contact Information */}
      <div>
        <h3 className="text-3xl md:text-4xl font-black text-[hsl(var(--navy))] dark:text-white mb-6">
          Get in Touch
        </h3>
        <p className="text-xl text-gray-700 dark:text-white/90 mb-8">
          Ready to explore bond market opportunities? Our team of experts is here to help you achieve your investment goals.
        </p>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[hsl(var(--golden))] rounded-lg flex items-center justify-center flex-shrink-0">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-[hsl(var(--navy))] dark:text-white mb-1">Phone</h4>
              <a href="tel:+917738056127" className="text-gray-700 dark:text-white/80 hover:text-[hsl(var(--golden))] transition-colors">
                +91 7738056127
              </a>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[hsl(var(--golden))] rounded-lg flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-[hsl(var(--navy))] dark:text-white mb-1">Email</h4>
              <a href="mailto:sales@binarycapital.in" className="text-gray-700 dark:text-white/80 hover:text-[hsl(var(--golden))] transition-colors">
                sales@binarycapital.in
              </a>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[hsl(var(--golden))] rounded-lg flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-[hsl(var(--navy))] dark:text-white mb-1">Address</h4>
              <p className="text-gray-700 dark:text-white/80">
                2045, 2nd Floor, Spaces Adani Height<br />
                Andheri West, Mumbai, India
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl p-8 border-2 border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-black text-[hsl(var(--navy))] dark:text-white mb-6">
          Send us a Message
        </h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-bold text-gray-900 dark:text-gray-200 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(var(--golden))] transition-all bg-white dark:bg-gray-800 text-gray-900 dark:text-white ${
                errors.name ? 'border-red-500' : 'border-gray-400 dark:border-gray-600'
              }`}
              placeholder="John Doe"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-bold text-gray-900 dark:text-gray-200 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(var(--golden))] transition-all bg-white dark:bg-gray-800 text-gray-900 dark:text-white ${
                errors.email ? 'border-red-500' : 'border-gray-400 dark:border-gray-600'
              }`}
              placeholder="john@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-bold text-gray-900 dark:text-gray-200 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(var(--golden))] transition-all bg-white dark:bg-gray-800 text-gray-900 dark:text-white ${
                errors.phone ? 'border-red-500' : 'border-gray-400 dark:border-gray-600'
              }`}
              placeholder="+91 98765 43210"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>
          
          <div>
            <label htmlFor="company" className="block text-sm font-bold text-gray-900 dark:text-gray-200 mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-400 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(var(--golden))] transition-all bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              placeholder="Your Company"
            />
          </div>
          
          <div>
            <label htmlFor="service" className="block text-sm font-bold text-gray-900 dark:text-gray-200 mb-2">
              Service Interest
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-400 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(var(--golden))] transition-all bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            >
              <option value="">Select a service</option>
              <option value="corporate-bond-underwriting">Corporate Bond Underwriting</option>
              <option value="government-securities">Government Securities</option>
              <option value="high-yield-bonds">High-Yield Bonds</option>
              <option value="bond-portfolio-management">Bond Portfolio Management</option>
              <option value="credit-rating-advisory">Credit Rating Advisory</option>
              <option value="secondary-market-trading">Secondary Market Trading</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-bold text-gray-900 dark:text-gray-200 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(var(--golden))] transition-all resize-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white ${
                errors.message ? 'border-red-500' : 'border-gray-400 dark:border-gray-600'
              }`}
              placeholder="Tell us about your requirements..."
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>
          
          {errors.submit && (
            <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-500 rounded-lg p-4">
              <p className="text-red-700 dark:text-red-400 text-sm font-semibold">{errors.submit}</p>
            </div>
          )}
          
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[hsl(var(--golden))] hover:bg-[hsl(var(--golden-dark))] text-white font-bold py-4 text-lg"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Sending...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                Send Message
              </span>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
