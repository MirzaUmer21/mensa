import React from 'react';
import './banner.scss';
import { BannerBackground } from '../../assets/images';
import useScrollVisibility from '../../helpers/UseScrollVisibility';
import { bottomToTopAnimations } from '../../helpers/transitions';
import { motion } from 'framer-motion';
import { Container } from '../../common/container/Container';

export const Banner = () => {
  const isVisible = useScrollVisibility('.mainSiteBanner');
  const handleClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
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
          Your Gateway to <br />
          Gaming Glory
        </h2>
        <div className='bannerTextWrapper'>
          <h5>
            Our innovative approach to projects delivers numerous benefits to
            your business daily.
            <br /> Thrive with us as we pave the way to gaming glory for your
            brand.
          </h5>
          <button className='demoButton' onClick={() => handleClick()}>
            Book a Demo
          </button>
        </div>
      </motion.div>
    </div>
  );
};
