import { Col, Row } from 'antd';
import React from 'react';
import './singleTestimonial.scss';
import { motion } from 'framer-motion';

import { TestimonialUserImg } from '../../assets/images';
import {
  leftToRightAnimations,
  rightToLeftAnimations
} from '../../helpers/transitions';
import useScrollVisibility from '../../helpers/UseScrollVisibility';
export const SingleTestimonial = ({ content }) => {
  const isVisible = useScrollVisibility('.singleTestimonialWrap');

  return (
    <div className='singleTestimonialWrap'>
      <Row gutter={10}>
        <Col lg={12} md={24} style={{ width: '100%' }}>
          <motion.div
            variants={leftToRightAnimations}
            initial='hidden'
            animate={isVisible ? 'show' : 'hidden'}
            className='introWrap'
          >
            <div className='introContainer'>
              <div className='topCircle circle'></div>
              <div className='introBox'>
                <div className='detail'>
                  <h4>Jaydon Bator</h4>
                  <h5>Sr. Designer</h5>
                </div>
                <div className='company'></div>
              </div>
              <div className='bottomCircle circle'></div>
            </div>
            <div className='image'>
              <img src={TestimonialUserImg} alt='' />
            </div>
          </motion.div>
        </Col>
        <Col lg={12} md={24} className='textWrap'>
          <motion.p
            variants={rightToLeftAnimations}
            initial='hidden'
            animate={isVisible ? 'show' : 'hidden'}
            className='testimonialsText'
          >
            If anyone is looking to create a book cover, this is the place you
            need to visit.My editor recommended 99design and I am glad she did.
            My only regret is that I didn&apos;t here about them for my first 3
            books.
          </motion.p>
        </Col>
      </Row>
    </div>
  );
};
