/**
 * Performance Configuration
 * Central configuration for all performance-related settings
 */

export const PERFORMANCE_CONFIG = {
  // Lazy loading thresholds
  lazyLoading: {
    rootMargin: '100px', // Start loading 100px before element enters viewport
    threshold: 0.01, // Trigger when 1% of element is visible
  },

  // Debounce delays (ms)
  debounce: {
    scroll: 150,
    resize: 250,
    input: 300,
  },

  // Animation performance
  animation: {
    reducedMotion: false, // Set to true to disable animations for performance
    useWillChange: true, // Use will-change CSS property
    useGPU: true, // Use GPU-accelerated transforms
  },

  // Resource hints
  preconnect: [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://images.unsplash.com',
    'https://calendly.com',
  ],

  // Performance monitoring
  monitoring: {
    enabled: process.env.NODE_ENV === 'production',
    sampleRate: 0.1, // Monitor 10% of users
    reportErrors: true,
  },

  // Image optimization
  images: {
    quality: 80,
    format: 'webp',
    lazyLoad: true,
    placeholder: 'blur',
  },

  // Code splitting
  codeSplitting: {
    minChunkSize: 20000, // 20KB minimum chunk size
    maxParallelRequests: 6, // Maximum parallel chunk loads
  },
};

/**
 * Check if user prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Check if connection is slow (Save-Data header or slow connection)
 */
export const isSlowConnection = (): boolean => {
  if (typeof navigator === 'undefined') return false;
  
  const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
  
  if (!connection) return false;
  
  // Check for Save-Data header
  if ((navigator as any).connection?.saveData) return true;
  
  // Check effective type
  const slowTypes = ['slow-2g', '2g', '3g'];
  return slowTypes.includes(connection.effectiveType);
};

/**
 * Get optimal image format based on browser support
 */
export const getOptimalImageFormat = (): 'webp' | 'jpeg' => {
  if (typeof window === 'undefined') return 'jpeg';
  
  // Check WebP support
  const canvas = document.createElement('canvas');
  if (canvas.getContext && canvas.getContext('2d')) {
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0 ? 'webp' : 'jpeg';
  }
  
  return 'jpeg';
};

/**
 * Should lazy load based on connection speed
 */
export const shouldLazyLoad = (): boolean => {
  // Always lazy load on slow connections
  if (isSlowConnection()) return true;
  
  // Lazy load by default unless disabled in config
  return PERFORMANCE_CONFIG.images.lazyLoad;
};

/**
 * Get recommended chunk loading strategy
 */
export const getLoadingStrategy = () => {
  const isSlow = isSlowConnection();
  
  return {
    prefetch: !isSlow, // Don't prefetch on slow connections
    preload: true, // Always preload critical resources
    defer: isSlow, // Defer non-critical scripts on slow connections
  };
};
