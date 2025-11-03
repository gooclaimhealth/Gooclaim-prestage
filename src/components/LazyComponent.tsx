"use client";

import { useEffect, useRef, useState, ComponentType, lazy, Suspense } from 'react';

interface LazyComponentProps {
  loader: () => Promise<{ default: ComponentType<any> }>;
  fallback?: React.ReactNode;
  rootMargin?: string;
  threshold?: number;
  [key: string]: any;
}

/**
 * LazyComponent - Loads components only when they enter viewport
 * Reduces Total Blocking Time by deferring non-critical component loading
 */
export function LazyComponent({ 
  loader, 
  fallback = null, 
  rootMargin = '100px',
  threshold = 0.01,
  ...props 
}: LazyComponentProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [Component, setComponent] = useState<ComponentType<any> | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin,
        threshold,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  useEffect(() => {
    if (isVisible && !Component) {
      loader().then((module) => {
        setComponent(() => module.default);
      });
    }
  }, [isVisible, loader, Component]);

  return (
    <div ref={ref} style={{ minHeight: '100px' }}>
      {Component ? <Component {...props} /> : fallback}
    </div>
  );
}

/**
 * Higher-order function to create lazy-loaded components
 */
export function createLazyComponent<P extends object>(
  loader: () => Promise<{ default: ComponentType<P> }>
) {
  return (props: P) => (
    <LazyComponent loader={loader} {...props} />
  );
}
