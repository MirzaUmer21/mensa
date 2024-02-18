import React, { useState } from 'react';
import './portfolio.scss';
import { Container } from '../common/container/Container';
import useScrollVisibility from '../helpers/UseScrollVisibility';
import { motion } from 'framer-motion';
import { topToBottomAnimations } from '../helpers/transitions';
import { portfolioTabs } from '../constants/PortfolioData';
import { PortfolioImages } from '../components/portfolio/PortfolioImages';
import { Col, Row } from 'antd';
import {
  Portfolio1,
  Portfolio2,
  Portfolio3,
  Portfolio4,
  Portfolio5
} from '../assets/images';

export const Portfolio = () => {
  const isVisible = useScrollVisibility('.portfolioWrapper');

  const [activePortfolioTab, setActivePortfolioTab] = useState('featured');
  return (
    <div>
      <div className='portfolioWrapper'>
        <Container>
          <motion.h1
            variants={topToBottomAnimations}
            initial='hidden'
            animate={isVisible ? 'show' : 'hidden'}
          >
            GAME PORTFOLIO
          </motion.h1>
          <motion.h4
            variants={topToBottomAnimations}
            initial='hidden'
            animate={isVisible ? 'show' : 'hidden'}
            className='portfolioSubHeading'
          >
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur.
          </motion.h4>

          <div className='mainPortfolioWrap'>
            <div className='portfolioTabs'>
              {portfolioTabs &&
                portfolioTabs?.map((tab, ind) => {
                  return (
                    <button
                      className={`portfolioTab ${
                        activePortfolioTab === tab?.heading?.toLowerCase()
                          ? 'activePortfolioTab'
                          : ''
                      }`}
                      onClick={() =>
                        setActivePortfolioTab(tab?.heading?.toLowerCase())
                      }
                      key={ind}
                    >
                      {tab?.heading}
                    </button>
                  );
                })}
            </div>
          </div>
          <div className='portfolioImagesWrap' style={{ overflowX: 'hidden' }}>
            <PortfolioImages isVisible={isVisible} />
          </div>
        </Container>
      </div>
    </div>
  );
};
