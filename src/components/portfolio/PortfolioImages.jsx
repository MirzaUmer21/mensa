import React from 'react';
import './PortfolioImages.scss';
import {
  Portfolio1,
  Portfolio2,
  Portfolio3,
  Portfolio4,
  Portfolio5
} from '../../assets/images';
import { motion } from 'framer-motion';
import {
  bottomToTopAnimations,
  leftToRightAnimations,
  rightToLeftAnimations,
  topToBottomAnimations
} from '../../helpers/transitions';

export const PortfolioImages = ({ isVisible }) => {
  return (
    <div className='imagesWrapper'>
      <div className='leftColumn'>
        <motion.img
          variants={leftToRightAnimations}
          initial='hidden'
          animate={isVisible ? 'show' : 'hidden'}
          src={Portfolio1}
          alt=''
        />
        <motion.img
          variants={bottomToTopAnimations}
          initial='hidden'
          animate={isVisible ? 'show' : 'hidden'}
          src={Portfolio4}
          alt=''
        />
      </div>
      <div className='rightColumn'>
        <motion.img
          variants={rightToLeftAnimations}
          initial='hidden'
          animate={isVisible ? 'show' : 'hidden'}
          src={Portfolio2}
          alt=''
        />
        <motion.img
          variants={rightToLeftAnimations}
          initial='hidden'
          animate={isVisible ? 'show' : 'hidden'}
          src={Portfolio3}
          alt=''
        />
        <motion.img
          variants={bottomToTopAnimations}
          initial='hidden'
          animate={isVisible ? 'show' : 'hidden'}
          src={Portfolio5}
          alt=''
        />
      </div>
    </div>
  );
};
