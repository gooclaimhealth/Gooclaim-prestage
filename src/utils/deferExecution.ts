/**
 * Utility for deferring non-critical JavaScript execution to reduce Total Blocking Time (TBT)
 * These utilities help move work off the main thread during initial page load
 */

/**
 * Defer execution to idle time or after a timeout
 * This reduces TBT by allowing the browser to handle critical rendering first
 */
export const deferToIdle = (callback: () => void, timeout: number = 0): void => {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(callback, { timeout: timeout || 2000 });
  } else {
    setTimeout(callback, timeout);
  }
};

/**
 * Defer multiple tasks in sequence during idle time
 * This helps break up long tasks into smaller chunks
 */
export const deferTasksSequentially = (tasks: Array<() => void>): void => {
  const executeTasks = (remainingTasks: Array<() => void>): void => {
    if (remainingTasks.length === 0) return;
    
    const [currentTask, ...rest] = remainingTasks;
    
    deferToIdle(() => {
      currentTask();
      if (rest.length > 0) {
        executeTasks(rest);
      }
    });
  };
  
  executeTasks(tasks);
};

/**
 * Defer execution until after page load
 * This ensures the work happens after the initial render is complete
 */
export const deferUntilPageLoad = (callback: () => void): void => {
  if (document.readyState === 'complete') {
    deferToIdle(callback);
  } else {
    window.addEventListener('load', () => deferToIdle(callback), { once: true });
  }
};

/**
 * Batch multiple state updates to reduce re-renders
 * Use this for non-critical state updates
 */
export const batchUpdates = <T>(
  updates: Array<() => void>,
  delay: number = 16
): void => {
  let timeoutId: NodeJS.Timeout;
  
  const executeBatch = () => {
    updates.forEach(update => update());
  };
  
  clearTimeout(timeoutId);
  timeoutId = setTimeout(executeBatch, delay);
};

/**
 * Debounce function to reduce unnecessary executions
 * Useful for event handlers that fire frequently
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), wait);
  };
};

/**
 * Throttle function to limit execution frequency
 * Useful for scroll or resize handlers
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};
