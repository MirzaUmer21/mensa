import React from 'react';
import { Header } from './header/Header';
import { Footer } from './footer/Footer';

function HomeLayout({ children }) {
  return (
    <div className='HomeLayout'>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default HomeLayout;
