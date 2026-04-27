/**
 * Google Ads conversion tracking utility
 * Provides helper functions to track conversions and events
 */

interface GTAGEvent {
  event: string;
  [key: string]: any;
}

/**
 * Track a conversion event
 * @param eventName - Name of the conversion event
 * @param eventData - Additional data to send with the event
 */
export const trackConversion = (
  eventName: string,
  eventData?: Record<string, any>,
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, eventData || {});
  }
};

/**
 * Track page view
 * @param pagePath - The page path/URL
 */
export const trackPageView = (pagePath: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "page_view", {
      page_path: pagePath,
    });
  }
};

/**
 * Track form submission
 * @param formName - Name of the form being submitted
 */
export const trackFormSubmission = (formName: string) => {
  trackConversion("form_submit", {
    form_name: formName,
  });
};

/**
 * Track enquiry/lead generation
 */
export const trackEnquiry = () => {
  trackConversion("generate_lead");
};

/**
 * Track button click
 * @param buttonName - Name or label of the button
 */
export const trackButtonClick = (buttonName: string) => {
  trackConversion("button_click", {
    button_name: buttonName,
  });
};

// Extend window interface to include gtag
declare global {
  interface Window {
    gtag?: (command: string, ...args: any[]) => void;
    dataLayer?: any[];
  }
}
