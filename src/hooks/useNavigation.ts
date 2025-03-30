import { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

interface UseNavigationReturn {
  activeLink: string;
  setActiveLink: (href: string) => void;
  handleSmoothScroll: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

/**
 * Custom hook to manage navigation state and smooth scrolling
 * Provides a consistent navigation experience across the app
 */
export const useNavigation = (): UseNavigationReturn => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('/');
  
  // Initialize active link based on current URL
  useEffect(() => {
    if (location.hash) {
      setActiveLink(`/#${location.hash.slice(1)}`);
    } else if (location.pathname === '/') {
      setActiveLink('/');
    } else {
      setActiveLink(location.pathname);
    }
  }, [location]);
  
  // Listen for navigation events from other components
  useEffect(() => {
    const handleNavEvent = (event: CustomEvent<{href: string}>) => {
      setActiveLink(event.detail.href);
    };
    
    window.addEventListener('navupdate', handleNavEvent as EventListener);
    return () => {
      window.removeEventListener('navupdate', handleNavEvent as EventListener);
    };
  }, []);
  
  // Smooth scroll to element and update navigation state
  const handleSmoothScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // For home link, scroll to top
    if (href === '/' && location.pathname === '/') {
      e.preventDefault();
      setActiveLink(href);
      
      // Smooth scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      
      // Update URL without causing a page reload
      window.history.pushState(null, '', '/');
      
      // Broadcast navigation change
      const navEvent = new CustomEvent('navupdate', { detail: { href } });
      window.dispatchEvent(navEvent);
      return;
    }
    
    // For hash links on the same page
    if (href.startsWith('/#') && location.pathname === '/') {
      e.preventDefault();
      setActiveLink(href);
      
      const id = href.replace('/#', '');
      const element = document.getElementById(id);
      
      if (element) {
        // Get header height to offset scroll position
        const headerHeight = document.querySelector('header')?.offsetHeight || 0;
        const offsetPosition = element.offsetTop - headerHeight - 20;
        
        // Smooth scroll to the element
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        // Update URL without causing a page reload
        window.history.pushState(null, '', href);
        
        // Broadcast navigation change
        const navEvent = new CustomEvent('navupdate', { detail: { href } });
        window.dispatchEvent(navEvent);
      }
    }
  }, [location.pathname]);
  
  return { 
    activeLink, 
    setActiveLink: (href: string) => {
      setActiveLink(href);
      // Broadcast change to other components
      const navEvent = new CustomEvent('navupdate', { detail: { href } });
      window.dispatchEvent(navEvent);
    },
    handleSmoothScroll 
  };
}; 