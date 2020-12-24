import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Img from 'gatsby-image';
import styles from '../../css/project.module.css';

const Project = ({ project }) => {
  const { name, slug, image } = project;

  return (
    <article className={styles.project}>
      <div className={styles.imgContainer}>
        <Img fluid={image.fluid} className={styles.img} alt="single project" />
        <AniLink fade className={styles.link} to={`/projects/${slug}`}>
          details
        </AniLink>
      </div>
      <div className={styles.footer}>
        <h3>{name}</h3>
      </div>
    </article>
  );
};

export default Project;
