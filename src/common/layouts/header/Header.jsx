import React, { useState } from 'react';
import './header.scss';
import { HeaderLogo } from '../../../assets/images';
import { GradientButton } from '../../button/GradientButton';
import { HeaderMenu } from '../../menus/HeaderMenu';
import { ContainerFluid } from '../../container/ContainerFluid';
import { useMediaQuery } from 'react-responsive';
import { ConfigProvider, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
export const Header = () => {
  const [open, setOpen] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  const handleClick = () => {
    setOpen(false);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = contactSection.offsetTop - 100;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className='mainHeaderWrap'>
        <div className='mainSiteHeader'>
          <ContainerFluid>
            <div className='headerContent'>
              <div className='siteHeaderLogo'>
                <HeaderLogo
                  style={{ cursor: 'pointer' }}
                  onClick={() =>
                    window.scrollTo({
                      behavior: 'smooth',
                      top: 0
                    })
                  }
                />
              </div>
              {isTabletOrMobile ? (
                <div className='menuMobile'>
                  <MenuOutlined onClick={() => setOpen(true)} />
                </div>
              ) : (
                <div className='headerMenuOptionsWrap'>
                  <HeaderMenu setOpen={setOpen} />
                  <div className='siteHeaderContent'>
                    <GradientButton
                      onClick={() => handleClick()}
                      text={'Contact us'}
                    />
                  </div>
                </div>
              )}
            </div>
          </ContainerFluid>
        </div>
      </div>
      <ConfigProvider
        theme={{
          token: {
            colorBgElevated: '#1d1d1d',
            colorIcon: '#cd1d5b'
          }
        }}
      >
        <Drawer
          title={
            <>
              <HeaderLogo />
            </>
          }
          style={{ maxHeight: '100vh' }}
          placement={'left'}
          closable={false}
          onClose={() => setOpen(false)}
          open={open}
        >
          <div className='headerDrawerWrapper'>
            <HeaderMenu setOpen={setOpen} />

            <GradientButton onClick={() => handleClick()} text={'Contact us'} />
          </div>
        </Drawer>
      </ConfigProvider>
    </>
  );
};
