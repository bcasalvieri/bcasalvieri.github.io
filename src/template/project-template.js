import React from 'react';
import { graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link';
import Img from 'gatsby-image';
import { FaGithub } from 'react-icons/fa';
import { MdComputer } from 'react-icons/md';
import styles from '../css/template.module.css';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const projectTemplate = ({ data }) => {
  const {
    name,
    url,
    githubUrl,
    description,
    contentful_id,
    image,
  } = data.project;

  return (
    <>
      <SEO title={`${name}`} />
      <Layout>
        <section className={styles.template}>
          <div className={styles.center}>
            <div className={styles.images}>
              <Img
                key={contentful_id}
                fluid={image.fluid}
                alt="single-project"
                className={styles.image}
              />
            </div>
            <h2>{name}</h2>
            <div className={styles.info}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                <MdComputer className={styles.icon} />
                {url}
              </a>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <FaGithub className={styles.icon} />
                {githubUrl}
              </a>
            </div>
            <p className={styles.desc}>
              <strong>Description:</strong> {description}
            </p>
            <AniLink fade to="/projects" className="btn-primary">
              back to projects
            </AniLink>
          </div>
        </section>
      </Layout>
    </>
  );
};

export const query = graphql`
  query($slug: String!) {
    project: contentfulProjects(slug: { eq: $slug }) {
      name
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
`;

export default projectTemplate;
