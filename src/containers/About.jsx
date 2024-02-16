import React, { useEffect, useState } from 'react';
import './about.scss';
import { Container } from '../common/container/Container';
import aboutCover from '../assets/images/aboutCover.svg';
import { motion } from 'framer-motion';
import useScrollVisibility from '../helpers/UseScrollVisibility';
import {
  leftToRightAnimations,
  rightToLeftAnimations
} from '../helpers/transitions';

export const About = () => {
  const isVisible = useScrollVisibility('.aboutWrapper');

  return (
    <div className='aboutWrapper'>
      <Container>
        <motion.h1
          variants={rightToLeftAnimations}
          initial='hidden'
          animate={isVisible ? 'show' : 'hidden'}
        >
          ABOUT US
        </motion.h1>
      </Container>

      <div className='aboutClients'>
        <Container>
          <div className='aboutCountsWrapper' style={{ position: 'relative' }}>
            <div className='aboutCounts'>
              <div className='content'>
                <h4>100+</h4>
                <h5>Projects</h5>
              </div>
              <div className='content'>
                <h4>40+</h4>
                <h5>Happy Clients</h5>
              </div>
            </div>
          </div>

          <motion.div
            variants={leftToRightAnimations}
            initial='hidden'
            animate={isVisible ? 'show' : 'hidden'}
            className='aboutCoverContainer'
            style={{ position: 'relative' }}
          >
            <img className='aboutCover' src={aboutCover} alt='' />
          </motion.div>
          <motion.div
            variants={rightToLeftAnimations}
            initial='hidden'
            animate={isVisible ? 'show' : 'hidden'}
            className='aboutTextConatiner'
            style={{ position: 'relative' }}
          >
            <div className='aboutText'>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words Contrary to popular belief,
                Lorem Ipsum is not simply random text. It has roots in a piece
                of classical Latin literature from 45 BC, making it over 2000
                years old. Richard McClintock, a Latin professor at Hampden-
              </p>
            </div>
          </motion.div>
        </Container>
      </div>
    </div>
  );
};
