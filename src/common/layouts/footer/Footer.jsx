import React from 'react';
import './footer.scss';
import { Container } from '../../container/Container';
import { Col, Row } from 'antd';
import { HeaderLogo } from '../../../assets/images';
import { Facebook, Insta, Twitter } from '../../../assets/icons';
export const Footer = () => {
  return (
    <div className='footerWrapper'>
      <Container>
        <div className='footerInnerWrap'>
          <Row gutter={20}>
            <Col lg={6} md={12} sm={24} xs={24} className='customFooterInfo'>
              <div className='footerLogo'>
                <HeaderLogo />
              </div>
              <p className='customInfoText'>
                Embark on your gaming journey of discovery and excitement right
                here, where the world of immersive gameplay.{' '}
              </p>
            </Col>
            <Col lg={6} md={12} sm={24} xs={24} className='customFooterInfo'>
              <h5 className='customFooterHeading'>Games we made</h5>
              <p>Game Development</p>
              <p>Unity game</p>
              <p>Mobile game development</p>
              <p>Unity game development</p>
            </Col>
            <Col lg={6} md={12} sm={24} xs={24} className='customFooterInfo'>
              <h5 className='customFooterHeading'>What we Do</h5>
              <p>GAME 1</p>
              <p>GAME 2</p>
              <p>GAME 3</p>
              <p>GAME 4</p>
            </Col>

            <Col lg={6} md={12} sm={24} xs={24} className='customFooterInfo'>
              <h5 className='customFooterHeading'>Get in touch</h5>
              <div className='addressField'>
                <p>aDdRESS</p>
                <p>204 Tiara Corner Nevada, uNITED STATES</p>
              </div>
            </Col>
          </Row>
          <div className='bottomFooterWrap'>
            <div className='socialLinks'>
              <h4>STAY CONNECTED</h4>
              <div className='links'>
                <img src={Facebook} alt='' />
                <img src={Insta} alt='' />
                <img src={Twitter} alt='' />
              </div>
            </div>
            <div className='rightsText'>2024 All Right Reserved</div>
          </div>
        </div>
      </Container>
    </div>
  );
};
