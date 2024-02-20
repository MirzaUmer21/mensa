import React, { useRef, useState, useEffect } from 'react';
import './infiniteXScroll.scss'; // Import your CSS file for styling

const InfiniteXScroll = ({ children }) => {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);

  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      if (
        container.scrollLeft + container.offsetWidth >=
        container.scrollWidth
      ) {
        container.scrollLeft = 0;
      }
    }
  };

  return (
    <div
      className='infinite-x-scroll'
      ref={containerRef}
      onScroll={handleScroll}
    >
      <div
        className='infinite-x-scroll-content'
        style={{ width: containerWidth * 2 }}
      >
        {children}
      </div>
    </div>
  );
};

export default InfiniteXScroll;
