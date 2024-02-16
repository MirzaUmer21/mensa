import React, { useEffect, useState } from 'react';
import './services.scss';
import { Container } from '../common/container/Container';
import { Col, Row } from 'antd';
import { services } from '../constants/ServicesData';
import { motion } from 'framer-motion';
import useScrollVisibility from '../helpers/UseScrollVisibility';
import {
  bottomToTopAnimations,
  topToBottomAnimations
} from '../helpers/transitions';

export const Services = () => {
  const isVisible = useScrollVisibility('.servicesWrapper');

  return (
    <div className='servicesWrapper'>
      <Container>
        <motion.h1
          variants={topToBottomAnimations}
          initial='hidden'
          animate={isVisible ? 'show' : 'hidden'}
        >
          OUR SERVICES
        </motion.h1>
        <div className='allServices'>
          <Row gutter={20}>
            {services &&
              services?.map((service, ind) => {
                return (
                  <Col key={ind} lg={6} md={8} sm={12} xs={24}>
                    <motion.div
                      variants={
                        ind < 4 ? topToBottomAnimations : bottomToTopAnimations
                      }
                      initial='hidden'
                      animate={isVisible ? 'show' : 'hidden'}
                      className={`${'singleServiceCard'} ${
                        ind < 4 ? 'borderTop' : 'borderBottom'
                      }`}
                    >
                      <div className='content'>
                        <div className='headIcon'>
                          <div className='icon'>
                            <img src={service?.image} alt='icon' />
                          </div>
                        </div>
                        <h4>{service?.heading}</h4>
                        <p>{service?.description}</p>
                      </div>
                    </motion.div>
                  </Col>
                );
              })}
          </Row>
        </div>
        <div className='seeMore'>
          <button className='seeMoreButton'>Show All</button>
        </div>
      </Container>
    </div>
  );
};