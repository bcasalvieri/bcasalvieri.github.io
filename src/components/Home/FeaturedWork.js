import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Project from '../Projects/Project';
import Title from '../Title';
import styles from '../../css/items.module.css';

const getFeaturedProjects = graphql`
  query {
    featuredProjects: allContentfulProjects(
      filter: { featured: { eq: true } }
    ) {
      edges {
        node {
          name
          slug
          url
          githubUrl
          featured
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

const FeaturedWork = () => {
  const { featuredProjects } = useStaticQuery(getFeaturedProjects);
  const projects = featuredProjects.edges;

  return (
    <section className={styles.projects}>
      <Title title="featured" subtitle="projects" />
      <div className={styles.center}>
        {projects.map(({ node }) => (
          <Project key={node.contentful_id} project={node} />
        ))}
      </div>
      <Link to="/projects" className="btn-primary">
        all projects
      </Link>
    </section>
  );
};

export default FeaturedWork;
