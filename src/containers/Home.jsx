import React from 'react';
import HomeLayout from '../common/layouts/HomeLayout';
import { Banner } from '../components/banner/Banner';
import { About } from './About';
import { Services } from './Services';
import { Portfolio } from './Portfolio';
import { Testimonials } from './Testimonials';
import { Contact } from './Contact';

export const Home = () => {
  return (
    <HomeLayout>
      <Banner />
      <div id='about'>
        <About />
      </div>
      <div id='services'>
        <Services />
      </div>
      <div id='portfolio'>
        <Portfolio />
      </div>
      <div id='testimonials'>
        <Testimonials />
      </div>
      <div id='contact'>
        <Contact />
      </div>
    </HomeLayout>
  );
};
