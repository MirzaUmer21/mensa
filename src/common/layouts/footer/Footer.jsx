import React from 'react';
import './footer.scss';
import { Container } from '../../container/Container';
import { Col, Row } from 'antd';
import { HeaderLogo } from '../../../assets/images';
import {
  BottomFooterLogo,
  Facebook,
  Insta,
  Linkedin,
  Twitter
} from '../../../assets/icons';
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
              <div className='bottomLogo'>
                <img
                  style={{ marginTop: '20px' }}
                  src={BottomFooterLogo}
                  alt='$$$'
                />
              </div>
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
              <p>Monster Jump King</p>
              <p>Pillow Fight</p>
              <p>color water sort</p>
              <p>Basketball Hoop</p>
            </Col>

            <Col lg={6} md={12} sm={24} xs={24} className='customFooterInfo'>
              <h5 className='customFooterHeading'>Get in touch</h5>
              <div className='addressField'>
                <p>aDdRESS:</p>
                <p>1309, LeSolarium Tower, Dubai Silicon Oasis, Dubai, UAE</p>
              </div>
              <div className='addressField'>
                <p>Phone:</p>
                <p>+971545656607</p>
              </div>{' '}
              <div className='addressField'>
                <p>Email:</p>
                <p>info@mensaesport.com</p>
              </div>
              <div className='socialLinks'>
                <h4>STAY CONNECTED</h4>
                <div className='links'>
                  <a
                    href='https://www.facebook.com/profile.php?id=100092881405746'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img src={Facebook} alt='' />
                  </a>

                  <a
                    href='https://www.linkedin.com/company/mensa-esport/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img src={Linkedin} alt='' />
                  </a>
                  <a
                    href='https://www.facebook.com/profile.php?id=100092881405746'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img src={Twitter} alt='' />
                  </a>
                  <a
                    href='https://www.instagram.com/mensaesport/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img src={Insta} alt='' />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
          <div className='bottomFooterWrap'>
            <div className='rightsText'>&#169; 2024 All Right Reserved</div>
          </div>
        </div>
      </Container>
    </div>
  );
};
