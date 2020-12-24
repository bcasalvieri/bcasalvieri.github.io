import React from 'react';
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiBootstrap,
  DiReact,
  DiNodejs,
  DiMysql,
  DiMongodb,
} from 'react-icons/di';
import Title from '../Title';
import styles from '../../css/skills.module.css';

const Skills = () => (
  <section className={styles.skills}>
    <Title title='my' subtitle='skills' />
    <div className={styles.skillsCenter}>
      <div className={styles.skillsInfo}>
        <div className={styles.skill}>
          <DiHtml5 className={styles.icons} />
          <p>HTML</p>
        </div>
        <div className={styles.skill}>
          <DiCss3 className={styles.icons} />
          <p>CSS</p>
        </div>
        <div className={styles.skill}>
          <DiJavascript1 className={styles.icons} />
          <p>JavaScript</p>
        </div>
        <div className={styles.skill}>
          <DiNodejs className={styles.icons} />
          <p>Node</p>
        </div>
        <div className={styles.skill}>
          <DiReact className={styles.icons} />
          <p>React</p>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
