import { useState, useEffect } from 'react';

const useScrollVisibility = (elementSelector, margin = 500) => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const elementPositionTop =
        document.querySelector(elementSelector)?.offsetTop;
      const elementPositionBottom =
        document.querySelector(elementSelector)?.offsetTop +
        document.querySelector(elementSelector)?.offsetHeight;

      if (elementSelector === '.portfolioWrapper') {
        // console.log(bottomOffset);
      }
      const scrollDirection =
        scrollPosition > lastScrollPosition ? 'down' : 'up';
      if (
        (scrollPosition > elementPositionTop - margin &&
          scrollPosition < elementPositionTop + margin) ||
        (scrollPosition < elementPositionBottom &&
          scrollPosition > elementPositionBottom) ||
        (scrollDirection === 'up' && scrollPosition < elementPositionTop)
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
