import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styles from '../../css/project.module.css';

const Project = ({ project }) => {
  const { name, slug, image } = project;

  return (
    <article className={styles.project}>
      <div className={styles.imgContainer}>
        <Img fluid={image.fluid} className={styles.img} alt="single project" />
        <Link className={styles.link} to={`/projects/${slug}`}>
          details
        </Link>
      </div>
      <div className={styles.footer}>
        <h3>{name}</h3>
      </div>
    </article>
  );
};

export default Project;
