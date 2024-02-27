import { Anchor } from 'antd';
import React from 'react';
import './headerMenu.scss';
export const HeaderMenu = ({ setOpen }) => {
  const { Link } = Anchor;

  return (
    <div className='topHeaderMenu'>
      <Anchor
        affix={false}
        direction='horizontal'
        onClick={() => setOpen(false)}
        offsetTop={100}
        items={[
          {
            key: 'about',
            href: '#about',
            title: 'About Us'
          },
          {
            key: 'services',
            href: '#services',
            title: 'Services'
          },
          {
            key: 'portfolio',
            href: '#portfolio',
            title: 'Our Portfolio'
          },
          {
            key: 'testimonials',
            href: '#testimonials',
            title: 'Testimonials'
          }
        ]}
      ></Anchor>
    </div>
  );
};
