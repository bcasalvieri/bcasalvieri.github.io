import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About/About';
import SEO from '../components/SEO';

const about = ({ data }) => (
  <>
    <SEO title="About" />
    <Layout>
      <Hero img={data.aboutBcg.childImageSharp.fluid} />
      <About />
    </Layout>
  </>
);

export const query = graphql`
  query {
    aboutBcg: file(relativePath: { eq: "DSC_1991.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default about;
