import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import styles from '../css/hero.module.css';

const Hero = ({ img, children }) => (
  <BackgroundImage className={styles.hero} fluid={img}>
    {children}
  </BackgroundImage>
);

export default Hero;
