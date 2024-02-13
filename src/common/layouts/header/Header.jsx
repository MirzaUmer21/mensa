import React from 'react';
import './header.scss';
import { HeaderLogo } from '../../../assets/images';
import { GradientButton } from '../../button/GradientButton';
import { HeaderMenu } from '../../menus/HeaderMenu';
import { ContainerFluid } from '../../container/ContainerFluid';
export const Header = () => {
  return (
    <div className='mainSiteHeader'>
      <ContainerFluid>
        <div className='headerContent'>
          <div className='siteHeaderLogo'>
            <HeaderLogo />
          </div>
          <div className='siteHeaderLogo'>
            <HeaderMenu />
          </div>
          <div className='siteHeaderContent'>
            <GradientButton text={'Contact us'} />
          </div>
        </div>
      </ContainerFluid>
    </div>
  );
};
