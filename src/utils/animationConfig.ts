/**
 * Animation configuration utility
 * Detects device capabilities and adjusts animations accordingly
 */

// Check if the device prefers reduced motion
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Detect if device is low-end based on hardware concurrency
export const isLowEndDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  // Check CPU cores - devices with 2 or fewer cores are considered low-end
  const cores = navigator.hardwareConcurrency || 4;
  if (cores <= 2) return true;
  
  // Check device memory if available
  if ('deviceMemory' in navigator) {
    const memory = (navigator as any).deviceMemory;
    if (memory && memory <= 2) return true;
  }
  
  return false;
};

// Get optimized animation settings
export const getAnimationConfig = () => {
  const shouldReduceMotion = prefersReducedMotion() || isLowEndDevice();
  
  return {
    shouldAnimate: !shouldReducedMotion,
    staggerDelay: shouldReduceMotion ? 0 : 0.1,
    duration: shouldReduceMotion ? 0 : 0.3,
    initialDelay: shouldReduceMotion ? 0 : 0,
  };
};

// Reduced animation variants for better performance
export const reduceMotion = <T extends Record<string, any>>(
  variants: T,
  reducedVariants: Partial<T>
): T => {
  if (prefersReducedMotion()) {
    return { ...variants, ...reducedVariants };
  }
  return variants;
};
