import { useState, useEffect } from 'react';

const useScrollVisibility = (elementSelector, margin = -100) => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const element = document.querySelector(elementSelector);

      if (element) {
        const elementRect = element.getBoundingClientRect();
        const elementTop = elementRect.top;
        const elementBottom = elementRect.bottom;

        // Check if the element is completely outside the viewport
        const isCompletelyVisible =
          elementBottom >= 0 && elementTop <= window.innerHeight;

        // Check if the element is partially visible with margin
        const isPartiallyVisible =
          elementTop - margin < window.innerHeight &&
          elementBottom + margin > 0;

        if (isCompletelyVisible || isPartiallyVisible) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      } else {
        setIsVisible(false); // Element not found, set visibility to false
      }

      setLastScrollPosition(scrollPosition);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [elementSelector, margin]);

  return isVisible;
};

export default useScrollVisibility;
