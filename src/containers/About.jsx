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
import { Col, Row } from 'antd';
import { useMediaQuery } from 'react-responsive';

export const About = () => {
  const isVisible = useScrollVisibility('.aboutWrapper');
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });

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
        <div className='background'></div>
        <div className='aboutCountsWrapper'>
          <Container>
            <div style={{ position: 'relative' }}>
              {isTabletOrMobile ? (
                <Row>
                  <Col span={24} style={{ width: '100%' }}>
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
                  </Col>
                  <Col span={24}>
                    <motion.img
                      variants={leftToRightAnimations}
                      initial='hidden'
                      animate={isVisible ? 'show' : 'hidden'}
                      className='aboutCoverMobile'
                      src={aboutCover}
                      alt=''
                    />
                  </Col>

                  <Col span={24}>
                    <motion.div
                      variants={rightToLeftAnimations}
                      initial='hidden'
                      animate={isVisible ? 'show' : 'hidden'}
                      className='aboutTextConatiner'
                      style={{ position: 'relative' }}
                    >
                      <div className='aboutText'>
                        <p>
                          At Igris Studio, we&apos;re dedicated to delivering
                          exceptional results for our clients. Our experienced
                          team takes a collaborative approach, understanding
                          your vision and bringing it to life with meticulous
                          attention to detail. We specialize in top-notch game
                          development and application development for Windows,
                          Mac, Android, and iOS platforms, craft in immersive
                          and interactive experiences that captivate the gaming
                          community .Joins to explore the latest trends and
                          opportunities in game development, mobile app
                          development, and beyond. Let&apos;s redefine the
                          future of gaming together.
                        </p>
                      </div>
                    </motion.div>
                  </Col>
                </Row>
              ) : (
                <Row gutter={10}>
                  <Col span={12}>
                    <motion.img
                      variants={leftToRightAnimations}
                      initial='hidden'
                      animate={isVisible ? 'show' : 'hidden'}
                      className='aboutCover'
                      src={aboutCover}
                      alt=''
                    />
                  </Col>
                  <Col span={12}>
                    <div className='aboutCounts'>
                      <div className='content'>
                        <h4>20+</h4>
                        <h5>Projects</h5>
                      </div>
                      <div className='content'>
                        <h4>10+</h4>
                        <h5>Happy Clients</h5>
                      </div>
                    </div>
                  </Col>
                  <Col span={24}>
                    <motion.div
                      variants={rightToLeftAnimations}
                      initial='hidden'
                      animate={isVisible ? 'show' : 'hidden'}
                      className='aboutTextConatiner'
                      style={{ position: 'relative' }}
                    >
                      <div className='aboutText'>
                        <p>
                          At Igris Studio, we&apos;re dedicated to delivering
                          exceptional results for our clients. Our experienced
                          team takes a collaborative approach, understanding
                          your vision and bringing it to life with meticulous
                          attention to detail. We specialize in top-notch game
                          development and application development for Windows,
                          Mac, Android, and iOS platforms, craft in immersive
                          and interactive experiences that captivate the gaming
                          community .Joins to explore the latest trends and
                          opportunities in game development, mobile app
                          development, and beyond. Let&apos;s redefine the
                          future of gaming together.
                        </p>
                      </div>
                    </motion.div>
                  </Col>
                </Row>
              )}
            </div>
          </Container>
        </div>

        {/* <Container>
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
        </Container> */}
      </div>
    </div>
  );
};
