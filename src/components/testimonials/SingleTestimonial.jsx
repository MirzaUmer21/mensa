import { Col, Row } from 'antd';
import React from 'react';
import './singleTestimonial.scss';
import { TestimonialUserImg } from '../../assets/images';
export const SingleTestimonial = ({ content }) => {
  return (
    <div className='singleTestimonialWrap'>
      <Row gutter={10}>
        <Col lg={12} md={24} style={{ width: '100%' }}>
          <div className='introWrap'>
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
          </div>
        </Col>
        <Col lg={12} md={24} className='textWrap'>
          <p className='testimonialsText'>
            If anyone is looking to create a book cover, this is the place you
            need to visit.My editor recommended 99design and I am glad she did.
            My only regret is that I didn&apos;t here about them for my first 3
            books.
          </p>
        </Col>
      </Row>
    </div>
  );
};
