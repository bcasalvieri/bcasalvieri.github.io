import React from 'react';
import styles from '../css/title.module.css';

const Title = ({ title, subtitle }) => (
  <div className={styles.title}>
    <h4>
      <span className={styles.titleText}>{title}</span>
      <span>{subtitle}</span>
    </h4>
  </div>
);

export default Title;
