import React, { useState } from 'react';
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
  const [displayedServices, setDisplayedServices] = useState(8); // Initially display 8 services

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
          <Row gutter={20} style={{ justifyContent: 'center' }}>
            {services &&
              services?.slice(0, displayedServices)?.map((service, ind) => {
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
                          <h4>{service?.heading}</h4>
                        </div>
                        <p>{service?.description}</p>
                      </div>
                    </motion.div>
                  </Col>
                );
              })}
          </Row>
        </div>
        {services.length > displayedServices && (
          <motion.div
            variants={bottomToTopAnimations}
            initial='hidden'
            animate={isVisible ? 'show' : 'hidden'}
            className='seeMore'
          >
            <button
              className='seeMoreButton'
              onClick={() => {
                setDisplayedServices(displayedServices + 8);
              }}
            >
              Show All
            </button>
          </motion.div>
        )}
      </Container>
    </div>
  );
};
