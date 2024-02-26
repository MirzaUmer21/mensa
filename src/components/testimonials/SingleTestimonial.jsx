import { Col, Row } from 'antd';
import React from 'react';
import './singleTestimonial.scss';
import { motion } from 'framer-motion';

import {
  leftToRightAnimations,
  rightToLeftAnimations
} from '../../helpers/transitions';
import useScrollVisibility from '../../helpers/UseScrollVisibility';
export const SingleTestimonial = ({ data }) => {
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
              <div className='backGround'>
                <div className='introBox'>
                  <div className='detail'>
                    <h4>{data?.name}</h4>
                    <h5>{data?.date}</h5>
                  </div>
                  <div className='company'></div>
                </div>
              </div>
              <div className='bottomCircle circle'></div>
            </div>
            <div className='image'>
              <img src={data?.image} alt='User' />
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
            {data?.text}
          </motion.p>
        </Col>
      </Row>
    </div>
  );
};
