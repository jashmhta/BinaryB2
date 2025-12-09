"use client";

import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      {/* Experience Excellence CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[hsl(var(--navy))] to-blue-900 dark:from-black dark:to-gray-900 transition-colors duration-300">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            {/* GIF Logo */}
            <div className="flex justify-center mb-8">
              <img 
                src="/logo-animation.gif" 
                alt="Binary Bonds Logo" 
                className="h-24 w-24 md:h-32 md:w-32"
              />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 drop-shadow-lg">
              Experience Excellence in Bond Markets
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-medium drop-shadow-md">
              Seamless execution, strategic insights, trusted partnerships
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0VBq_vXQHxKZLxMxKZLxMxKZLx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold bg-[hsl(var(--golden))] hover:bg-[hsl(var(--golden))]/90 text-black dark:text-black rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Schedule Consultation
              </a>
              <a 
                href="/Binary-Bonds-Brochure.pdf"
                download
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold bg-white hover:bg-gray-100 text-black dark:text-black dark:bg-white dark:hover:bg-gray-100 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Download Brochure
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="container">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--navy))] dark:text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We're here to answer your questions and explore how we can help transform your bond investment journey. Reach out to our experts for personalized solutions.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto">
            {/* Phone */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[hsl(var(--golden))]/10 mb-4">
                <Phone className="w-6 h-6 text-[hsl(var(--golden))]" />
              </div>
              <h3 className="text-lg font-semibold text-[hsl(var(--navy))] dark:text-white mb-2">
                Phone
              </h3>
              <a href="tel:+917738056127" className="text-gray-600 dark:text-gray-300 hover:text-[hsl(var(--golden))] transition-colors mb-1 block">
                +91 7738056127
              </a>
              <p className="text-sm text-gray-500 dark:text-gray-400">Mon-Fri 9AM-6PM IST</p>
            </div>

            {/* Email */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[hsl(var(--golden))]/10 mb-4">
                <Mail className="w-6 h-6 text-[hsl(var(--golden))]" />
              </div>
              <h3 className="text-lg font-semibold text-[hsl(var(--navy))] dark:text-white mb-2">
                Email
              </h3>
              <a href="mailto:sales@binarycapital.in" className="text-gray-600 dark:text-gray-300 hover:text-[hsl(var(--golden))] transition-colors mb-1 block">
                sales@binarycapital.in
              </a>
              <p className="text-sm text-gray-500 dark:text-gray-400">We respond within 24 hours</p>
            </div>

            {/* Address */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[hsl(var(--golden))]/10 mb-4">
                <MapPin className="w-6 h-6 text-[hsl(var(--golden))]" />
              </div>
              <h3 className="text-lg font-semibold text-[hsl(var(--navy))] dark:text-white mb-2">
                Office
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                2045, 2nd Floor, Spaces Adani Height<br />
                Andheri West, Mumbai, India
              </p>
            </div>

            {/* FAQ Link */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[hsl(var(--golden))]/10 mb-4">
                <Clock className="w-6 h-6 text-[hsl(var(--golden))]" />
              </div>
              <h3 className="text-lg font-semibold text-[hsl(var(--navy))] dark:text-white mb-2">
                Have Questions?
              </h3>
              <Link href="/faq" className="text-[hsl(var(--golden))] hover:underline font-medium">
                View FAQs →
              </Link>
            </div>
          </div>

          {/* Map Section */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[hsl(var(--navy))] dark:text-white mb-6 text-center">
                Find Us
              </h3>
              <div className="rounded-lg overflow-hidden shadow-md h-[400px]">
                <iframe
                  src="https://www.google.com/maps?q=19.129361,72.827933&hl=en&z=17&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Binary Bonds Office Location - Spaces Adani Height, Andheri West, Mumbai"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Separate */}
      <section className="py-20 bg-white dark:bg-black transition-colors duration-300">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--navy))] dark:text-white mb-4">
                Send us a Message
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Ready to explore bond market opportunities? Our team of experts is here to help you achieve your investment goals.
              </p>
            </div>

            {/* Contact Form Card */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 md:p-12 shadow-xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
