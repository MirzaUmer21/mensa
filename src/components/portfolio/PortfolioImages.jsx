import React, { useEffect, useState } from 'react';
import './PortfolioImages.scss';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

export const PortfolioImages = ({ isVisible, images }) => {
  const renderImagesInColumn = column => {
    return images
      ?.filter(image => image?.column === column)
      .map((image, index) => (
        <motion.img
          key={index}
          variants={image?.variants}
          initial='hidden'
          animate={isVisible ? 'show' : 'hidden'}
          src={image.src}
          alt={image.alt}
        />
      ));
  };
  return (
    <div className='imagesWrapper'>
      <div className='leftColumn'>{renderImagesInColumn('left')}</div>
      <div className='rightColumn'>{renderImagesInColumn('right')}</div>
    </div>
  );
};
