import React from 'react';
import HomeLayout from '../common/layouts/HomeLayout';
import { Banner } from '../components/banner/Banner';
import { About } from './About';
import { Services } from './Services';
import { Portfolio } from './Portfolio';

export const Home = () => {
  return (
    <HomeLayout>
      <Banner />
      <About />
      <Services />
      <Portfolio />
    </HomeLayout>
  );
};
