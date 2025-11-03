import { useEffect } from 'react';

/**
 * DocumentHead component for injecting critical resource hints
 * This improves FCP and LCP by preconnecting to external resources
 */
export function DocumentHead() {
  useEffect(() => {
    // Add preconnect links for Google Fonts
    const preconnectGoogleFonts = document.createElement('link');
    preconnectGoogleFonts.rel = 'preconnect';
    preconnectGoogleFonts.href = 'https://fonts.googleapis.com';
    
    const preconnectGstatic = document.createElement('link');
    preconnectGstatic.rel = 'preconnect';
    preconnectGstatic.href = 'https://fonts.gstatic.com';
    preconnectGstatic.crossOrigin = 'anonymous';
    
    // Insert at the beginning of head for maximum priority
    const head = document.head;
    head.insertBefore(preconnectGoogleFonts, head.firstChild);
    head.insertBefore(preconnectGstatic, head.firstChild);
    
    // Add DNS prefetch as fallback for older browsers
    const dnsPrefetchGoogleFonts = document.createElement('link');
    dnsPrefetchGoogleFonts.rel = 'dns-prefetch';
    dnsPrefetchGoogleFonts.href = 'https://fonts.googleapis.com';
    
    const dnsPrefetchGstatic = document.createElement('link');
    dnsPrefetchGstatic.rel = 'dns-prefetch';
    dnsPrefetchGstatic.href = 'https://fonts.gstatic.com';
    
    head.appendChild(dnsPrefetchGoogleFonts);
    head.appendChild(dnsPrefetchGstatic);
    
    // Cleanup function
    return () => {
      preconnectGoogleFonts.remove();
      preconnectGstatic.remove();
      dnsPrefetchGoogleFonts.remove();
      dnsPrefetchGstatic.remove();
    };
  }, []);
  
  return null;
}
