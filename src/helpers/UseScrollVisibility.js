import { useState, useEffect } from 'react';

const useScrollVisibility = (elementSelector, margin = 500) => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const elementPosition =
        document.querySelector(elementSelector)?.offsetTop;
      const scrollDirection =
        scrollPosition > lastScrollPosition ? 'down' : 'up';

      if (
        (scrollPosition > elementPosition - margin &&
          scrollPosition < elementPosition + margin) ||
        (scrollDirection === 'up' && scrollPosition < elementPosition)
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      setLastScrollPosition(scrollPosition);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [elementSelector, lastScrollPosition, margin]);

  return isVisible;
};

export default useScrollVisibility;
