import React from 'react';
import styles from '../../css/portfolio.module.css';
import Project from './Project';
import Title from '../Title';

const ProjectList = ({ projects }) => {
  console.log(projects);
  return (
    <section className={styles.projects}>
      <Title title="my" subtitle="projects" />
      <div className={styles.center}>
        {projects.edges.map(({ node }) => (
          <Project key={node.contentful_id} project={node} />
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
