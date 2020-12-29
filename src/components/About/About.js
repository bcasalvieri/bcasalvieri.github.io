import React from 'react';
import Title from '../Title';
import styles from '../../css/aboutme.module.css';

export default function About() {
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="me" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutInfo}>
          <h2>The skinny...</h2>
          <p>I was bit by the coding bug in 2017.</p>
          <p>
            While creating a website on Wix, I became curious about how websites
            were really built under the hood using actual programming languages.
            I enrolled in online courses to learn the basics: HTML, CSS, and
            JavaScript. Since then, I haven’t been able to get enough as I’ve
            expanded my knowledge into front end frameworks and libraries
            (React.js, Gatsby, and Next.js), back end development (Node.js and
            Express), databases, and cloud computing (AWS).
          </p>
          <p>
            Here's my{' '}
            <a
              className={styles.aboutLink}
              href="https://drive.google.com/file/d/1zs9-iJJUiIqdaCH9s0Dc-p8kayVQKAqu/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer">
              resume
            </a>
            .
          </p>
          <h2>A little more...</h2>
          <p>
            <strong>I live in New Jersey.</strong> Most people consider it the
            armpit of America, but I call it home. Contrary to popular belief,
            it's called the Garden State for a reason...
          </p>
          <p>
            <strong>I love football 🏈.</strong> I played football for 13 years,
            including in college at the University of Delaware. Also, I've been
            bred to be a Florida State Seminole since birth. #GoNoles
            #GoBlueHens
          </p>
          <p>
            <strong>I am a coffeeholic ☕.</strong> I strongly recommend{' '}
            <a
              className={styles.aboutLink}
              href="https://guadaluperoastery.com/"
              target="_blank">
              Guadalupe Roastery
            </a>{' '}
            for all your coffee beans needs.
          </p>
          <p>
            <strong>When I'm not coding,</strong> I love to play golf 🏌️‍♂️. I like
            to think I'm a good golfer, and it gives me a place to channel my
            competitive nature. I enjoy reading a good book 📖 (I'm open to
            recommendations!) or binging Netflix (Schitt's Creek anyone). I am
            passionate about my Catholic faith and studying the Bible.
          </p>
        </article>
      </div>
    </section>
  );
}
