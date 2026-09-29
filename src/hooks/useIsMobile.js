import { useState, useEffect } from 'react';

/**
 * Custom hook to detect mobile vs desktop screens efficiently.
 * Subscribes to matchMedia for instant updates without polling or lag.
 */
export const useIsMobile = (breakpoint = 1024) => {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < breakpoint;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    
    const handleChange = (e) => {
      setIsMobile(e.matches);
    };

    // Set initial match
    setIsMobile(mediaQuery.matches);

    // Modern event listener with fallback
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else {
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, [breakpoint]);

  return isMobile;
};
