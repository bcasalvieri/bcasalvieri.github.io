import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import SEO from '../components/SEO';
import ProjectList from '../components/Projects/ProjectList';

const projects = ({ data }) => {
  const { portfolioBcg, projects } = data;
  return (
    <>
      <SEO title="Projects" />
      <Layout>
        <Hero img={portfolioBcg.childImageSharp.fluid} />
        <ProjectList projects={projects} />
      </Layout>
    </>
  );
};

export const query = graphql`
  query projectsImage {
    portfolioBcg: file(relativePath: { eq: "portfolioBcg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    projects: allContentfulProjects {
      edges {
        node {
          name
          slug
          url
          githubUrl
          description
          contentful_id
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;

export default projects;
