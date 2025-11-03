/**
 * Critical CSS utility for performance optimization
 * Inlines critical above-the-fold styles to prevent render-blocking
 */

export const injectCriticalCSS = () => {
  if (typeof document === 'undefined') return;
  
  // Check if critical CSS is already injected
  if (document.getElementById('critical-css')) return;
  
  // Create critical CSS for immediate rendering
  const criticalStyles = `
    /* Critical styles for immediate paint */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: #ffffff;
      color: #030213;
      overflow-x: hidden;
    }
    
    /* Prevent layout shift */
    .min-h-screen {
      min-height: 100vh;
    }
    
    /* Ensure navigation is visible immediately */
    nav {
      position: sticky;
      top: 0;
      z-index: 50;
      background: white;
    }
    
    /* Critical button styles */
    button {
      cursor: pointer;
      border: none;
      outline: none;
    }
  `;
  
  const style = document.createElement('style');
  style.id = 'critical-css';
  style.textContent = criticalStyles;
  
  // Insert at the very beginning of head
  document.head.insertBefore(style, document.head.firstChild);
};

// Call this as early as possible
if (typeof window !== 'undefined') {
  injectCriticalCSS();
}
