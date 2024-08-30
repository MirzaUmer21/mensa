import React, { useState } from 'react';
import './portfolio.scss';
import { Container } from '../common/container/Container';
import useScrollVisibility from '../helpers/UseScrollVisibility';
import { motion } from 'framer-motion';
import { topToBottomAnimations } from '../helpers/transitions';
import { portfolioTabs } from '../constants/PortfolioData';
import { PortfolioImages } from '../components/portfolio/PortfolioImages';
import {
  portfolioCharacterImages,
  portfolioEnvironmentImages,
  portfolioFeaturedImages,
  portfolioUIUXImages,
  threeDimentionalArtImages
} from '../components/portfolio/constants';

export const Portfolio = () => {
  const [activePortfolioTab, setActivePortfolioTab] = useState('featured');
  const isVisible = useScrollVisibility('.portfolioWrapper');
  const allPortfolioItems = {
    featured: portfolioFeaturedImages,
    threeDimentionalArt: threeDimentionalArtImages,
    characters: portfolioCharacterImages,
    environments: portfolioEnvironmentImages,
    uiux: portfolioUIUXImages
  };
  return (
    <div>
      <div className={`portfolioWrapper`}>
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
            Discover unparalleled gaming experiences with Igris Studio.
            Specializing in Unity game development for Android, iOS, and Windows
            platforms, our team transforms ideas into captivating realities.
            From immersive UI/UX design to seamless mobile app development,
            AR/VR/XR experiences, blockchain integration, and Web 3 services,
            we&apos;re your gateway to innovation.
          </motion.h4>

          <div className='mainPortfolioWrap'>
            <div className='portfolioTabs'>
              {portfolioTabs &&
                portfolioTabs?.map((tab, ind) => {
                  return (
                    <button
                      className={`portfolioTab ${
                        activePortfolioTab === tab?.key
                          ? 'activePortfolioTab'
                          : ''
                      }`}
                      onClick={() => {
                        setActivePortfolioTab(tab?.key);
                      }}
                      key={ind}
                    >
                      {tab?.heading}
                    </button>
                  );
                })}
            </div>
          </div>
          <div className='portfolioImagesWrap' style={{ overflow: 'hidden' }}>
            {allPortfolioItems[activePortfolioTab] ? (
              <PortfolioImages
                images={allPortfolioItems[activePortfolioTab]}
                isVisible={isVisible}
                activeTab={activePortfolioTab}
              />
            ) : null}
          </div>
        </Container>
      </div>
    </div>
  );
};
