import React from 'react';
import Layout from '../components/Layout';
import HomeBanner from '../components/Home/HomeBanner';
import About from '../components/Home/About';
import FeaturedWork from '../components/Home/FeaturedWork';
import SEO from '../components/SEO';

export default () => (
  <>
    <SEO title="Home" />
    <Layout>
      <HomeBanner />
      <About />
      <FeaturedWork />
    </Layout>
  </>
);
