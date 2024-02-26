import React from 'react';
import { motion } from 'framer-motion';
import { topToBottomAnimations } from '../helpers/transitions';
import useScrollVisibility from '../helpers/UseScrollVisibility';
import { Client1, Client2, Client3, Client4 } from '../assets/images';
import './clients.scss';
import { Container } from '../common/container/Container';
export const Clients = () => {
  const isVisible = useScrollVisibility('.clientsWrapper');

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
        <img src={Client1} alt='' />
        <img src={Client2} alt='' />
        <img src={Client3} alt='' />
        <img src={Client4} alt='' />
        <img src={Client1} alt='' />
        <img src={Client2} alt='' />
        <img src={Client3} alt='' />
        <img src={Client4} alt='' />
      </div>
    </div>
  );
};
