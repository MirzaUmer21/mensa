import React from 'react';
import './banner.scss';
import { BannerBackground } from '../../assets/images';
export const Banner = () => {
  return (
    <div className='mainSiteBanner'>
      <div className='backgroundImage'>
        <BannerBackground />
      </div>
      <div className='mainBannerContent'>
        <h2>
          Get Ready to Play,
          <br /> Explore, Conquer
        </h2>
        <h5>
          Embark on your gaming journey of discovery and excitement <br />
          right here, where the world of immersive gameplay.{' '}
        </h5>
      </div>
    </div>
  );
};
