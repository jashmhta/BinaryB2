/**
 * Analytics tracking utilities
 * Supports Google Analytics 4 and custom event tracking
 */

// Extend Window interface to include gtag
declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}

/**
 * Track a custom event
 * @param eventName - Name of the event (e.g., 'contact_form_submit')
 * @param eventParams - Additional parameters for the event
 */
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

/**
 * Track page view
 * @param url - URL of the page
 */
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '', {
      page_path: url,
    });
  }
};

/**
 * Track contact form submission
 * @param service - Service selected in the form
 * @param success - Whether the submission was successful
 */
export const trackContactFormSubmission = (
  service: string,
  success: boolean = true
) => {
  trackEvent('contact_form_submit', {
    service_interest: service,
    success: success,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track CTA button clicks
 * @param buttonName - Name of the CTA button
 * @param location - Location on the page
 */
export const trackCTAClick = (buttonName: string, location: string) => {
  trackEvent('cta_click', {
    button_name: buttonName,
    location: location,
  });
};

/**
 * Track service page views
 * @param serviceName - Name of the service
 */
export const trackServiceView = (serviceName: string) => {
  trackEvent('service_view', {
    service_name: serviceName,
  });
};

/**
 * Track FAQ interactions
 * @param question - The FAQ question clicked
 */
export const trackFAQClick = (question: string) => {
  trackEvent('faq_interaction', {
    question: question,
  });
};

/**
 * Track phone call clicks
 */
export const trackPhoneClick = () => {
  trackEvent('phone_click', {
    phone_number: '+91-7738056127',
  });
};

/**
 * Track email clicks
 */
export const trackEmailClick = () => {
  trackEvent('email_click', {
    email: 'sales@binarycapital.in',
  });
};

/**
 * Track brochure downloads
 */
export const trackBrochureDownload = () => {
  trackEvent('brochure_download', {
    file_name: 'Binary-Bonds-Brochure.pdf',
  });
};

/**
 * Track consultation scheduling
 */
export const trackConsultationSchedule = () => {
  trackEvent('consultation_schedule', {
    action: 'calendar_click',
  });
};
