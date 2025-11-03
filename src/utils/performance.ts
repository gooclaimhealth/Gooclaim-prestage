/**
 * Performance Optimization Utilities
 * Helps monitor and optimize Core Web Vitals
 */

// Lazy load component with intersection observer
export const lazyLoadComponent = (
  importFunc: () => Promise<any>,
  options: IntersectionObserverInit = {}
) => {
  return {
    Component: null as any,
    load: async () => {
      const module = await importFunc();
      return module.default || module;
    },
    options: {
      rootMargin: '50px',
      threshold: 0.01,
      ...options,
    },
  };
};

// Debounce scroll events to reduce TBT
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null;
  
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Request idle callback wrapper for non-critical work
export const scheduleIdleTask = (callback: () => void) => {
  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(callback, { timeout: 2000 });
  } else {
    setTimeout(callback, 1);
  }
};

// Performance observer for monitoring
export const observePerformance = () => {
  if (typeof window === 'undefined') return;

  try {
    // Observe First Contentful Paint
    const perfObserver = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (entry.entryType === 'paint') {
          console.log(`[Performance] ${entry.name}:`, entry.startTime.toFixed(2), 'ms');
        }
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('[Performance] LCP:', entry.startTime.toFixed(2), 'ms');
        }
      }
    });

    perfObserver.observe({ 
      entryTypes: ['paint', 'largest-contentful-paint'] 
    });
  } catch (e) {
    // Performance Observer not supported
  }
};

// Preload critical resources
export const preloadResource = (href: string, as: string, type?: string) => {
  if (typeof document === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  if (type) link.type = type;
  document.head.appendChild(link);
};

// Mark performance milestones
export const markPerformance = (name: string) => {
  if (typeof window !== 'undefined' && window.performance) {
    performance.mark(name);
  }
};

export const measurePerformance = (name: string, startMark: string, endMark: string) => {
  if (typeof window !== 'undefined' && window.performance) {
    try {
      performance.measure(name, startMark, endMark);
      const measure = performance.getEntriesByName(name)[0];
      console.log(`[Performance] ${name}:`, measure.duration.toFixed(2), 'ms');
    } catch (e) {
      // Marks not found
    }
  }
};
