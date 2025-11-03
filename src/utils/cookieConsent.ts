/**
 * Cookie Consent Utility
 * Manages user consent for cookies, analytics, and advertising
 */

export type ConsentStatus = 'accepted' | 'rejected' | 'pending';

const CONSENT_KEY = 'gooclaim_cookie_consent';
const CONSENT_TIMESTAMP_KEY = 'gooclaim_cookie_consent_timestamp';

/**
 * Get current consent status
 */
export const getConsentStatus = (): ConsentStatus => {
  if (typeof window === 'undefined') return 'pending';
  
  const consent = localStorage.getItem(CONSENT_KEY);
  if (!consent) return 'pending';
  
  return consent as ConsentStatus;
};

/**
 * Set consent status
 */
export const setConsentStatus = (status: ConsentStatus): void => {
  if (typeof window === 'undefined') return;
  
  localStorage.setItem(CONSENT_KEY, status);
  localStorage.setItem(CONSENT_TIMESTAMP_KEY, new Date().toISOString());
  
  // Dispatch custom event for components to react to consent changes
  window.dispatchEvent(new CustomEvent('cookieConsentChanged', { 
    detail: { status } 
  }));
};

/**
 * Check if user has given consent
 */
export const hasConsent = (): boolean => {
  return getConsentStatus() === 'accepted';
};

/**
 * Check if user has made a consent decision
 */
export const hasConsentDecision = (): boolean => {
  return getConsentStatus() !== 'pending';
};

/**
 * Clear consent (for testing or user request)
 */
export const clearConsent = (): void => {
  if (typeof window === 'undefined') return;
  
  localStorage.removeItem(CONSENT_KEY);
  localStorage.removeItem(CONSENT_TIMESTAMP_KEY);
  
  window.dispatchEvent(new CustomEvent('cookieConsentChanged', { 
    detail: { status: 'pending' } 
  }));
};

/**
 * Get consent timestamp
 */
export const getConsentTimestamp = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(CONSENT_TIMESTAMP_KEY);
};

/**
 * Load analytics scripts (Google Analytics, etc.)
 * Only call this after user consent
 */
export const loadAnalyticsScripts = (): void => {
  if (!hasConsent()) {
    console.warn('Analytics scripts not loaded: User has not consented');
    return;
  }
  
  // Add your analytics scripts here
  // Example: Google Analytics
  /*
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
  document.head.appendChild(script);
  
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
  */
  
  console.log('Analytics scripts loaded');
};

/**
 * Load advertising scripts (Google Ads, Facebook Pixel, etc.)
 * Only call this after user consent
 */
export const loadAdvertisingScripts = (): void => {
  if (!hasConsent()) {
    console.warn('Advertising scripts not loaded: User has not consented');
    return;
  }
  
  // Add your advertising scripts here
  // Example: Facebook Pixel
  /*
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
  */
  
  console.log('Advertising scripts loaded');
};

/**
 * Load all tracking scripts after consent
 */
export const loadTrackingScripts = (): void => {
  if (!hasConsent()) return;
  
  loadAnalyticsScripts();
  loadAdvertisingScripts();
};

/**
 * Initialize consent system
 * Call this on app mount
 */
export const initializeConsent = (): void => {
  if (hasConsent()) {
    // User has already consented, load scripts
    loadTrackingScripts();
  }
};
