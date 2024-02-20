import React from 'react';
import './banner.scss';
import { BannerBackground } from '../../assets/images';
import useScrollVisibility from '../../helpers/UseScrollVisibility';
import { bottomToTopAnimations } from '../../helpers/transitions';
import { motion } from 'framer-motion';

export const Banner = () => {
  const isVisible = useScrollVisibility('.mainSiteBanner');

  return (
    <div className='mainSiteBanner'>
      <div className='backgroundImage'>
        <BannerBackground />
      </div>
      <motion.div
        variants={bottomToTopAnimations}
        initial='hidden'
        animate={isVisible ? 'show' : 'hidden'}
        className='mainBannerContent'
      >
        <h2>
          Get Ready to Play,
          <br /> Explore, Conquer
        </h2>
        <h5>
          Embark on your gaming journey of discovery and excitement <br />
          right here, where the world of immersive gameplay.{' '}
        </h5>
      </motion.div>
    </div>
  );
};
