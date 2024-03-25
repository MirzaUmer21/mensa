import React from 'react';
import './banner.scss';
import { BannerBackground } from '../../assets/images';
import useScrollVisibility from '../../helpers/UseScrollVisibility';
import { bottomToTopAnimations } from '../../helpers/transitions';
import { motion } from 'framer-motion';
import { Container } from '../../common/container/Container';
import video from '../../assets/videos/bannerVideo.mp4';
export const Banner = () => {
  const isVisible = useScrollVisibility('.mainSiteBanner');
  const handleClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = contactSection.offsetTop - 100;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };
  return (
    <div className='mainSiteBanner'>
      <div className='backgroundImage'>
        <video autoPlay muted loop id='myVideo'>
          <source src={video} type='video/mp4' />
        </video>
        {/* <BannerBackground /> */}
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
