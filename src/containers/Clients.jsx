import React from 'react';
import { motion } from 'framer-motion';
import { topToBottomAnimations } from '../helpers/transitions';
import useScrollVisibility from '../helpers/UseScrollVisibility';
import { Client1, Client2, Client3, Client4 } from '../assets/images';
import './clients.scss';
import { Container } from '../common/container/Container';
import Slider from 'react-slick';
export const Clients = () => {
  const isVisible = useScrollVisibility('.clientsWrapper');
  const settings = {
    className: 'slider variable-width',
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    arrows: false,
    variableWidth: true,
    pauseOnHover: true
  };
  return (
    <div className='clientsWrapper'>
      <Container>
        <motion.h1
          variants={topToBottomAnimations}
          initial='hidden'
          animate={isVisible ? 'show' : 'hidden'}
        >
          OUR CLIENTS
        </motion.h1>
      </Container>

      <div className='clients'>
        <Slider {...settings}>
          <div style={{ width: 400 }}>
            <div className='imgContain'>
              <img src={Client1} alt='' />
            </div>
          </div>
          <div style={{ width: 600 }}>
            <div className='imgContain'>
              <img src={Client2} alt='' />
            </div>
          </div>{' '}
          <div style={{ width: 300 }}>
            <div className='imgContain'>
              <img src={Client3} alt='' />
            </div>
          </div>{' '}
          <div style={{ width: 300 }}>
            <div className='imgContain'>
              <img src={Client4} alt='' />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};
