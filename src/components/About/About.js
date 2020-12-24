import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Title from '../Title';
import styles from '../../css/aboutme.module.css';

export default function About() {
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="me" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutInfo}>
          <p>I was bit by the coding bug.</p>
          <p>
            Growing up, I wanted to be an orthopedic surgeon working with
            sports-related injuries. Having grown up playing football, I’ve seen
            my share of broken bones and torn ligaments (thankfully I escaped
            with only a dislocated pinky finger), and I became fascinated by the
            human body and the medical procedures that were performed to get
            athletes back to playing shape. After my first time shadowing an
            orthopedic surgeon, I was hooked. At Delaware, I majored in Exercise
            Science on a pre-medicine track; however, after four years of
            school, my desire to continue with a decade more of formal schooling
            and residency waned.
          </p>
          <p>
            After college, I pursued careers as a mentor, teacher, coach, and
            business manager. It was in the latter role that it happened.
            Something clicked when I built my first Wix website. I became
            instantly curious about how websites were really built under the
            hood using actual programming languages. I enrolled in countless
            free online class I could to learn the basics: HTML, CSS, Bootstrap,
            and JavaScript. Since then, I haven’t been able to get enough as
            I’ve expanded my knowledge into front end frameworks (React.js),
            back end development (Node.js and Java with Spring Boot), databases,
            and cloud computing (AWS). Software engineering has awakened several
            passions within me, notably creativity, problem solving, and
            intellectual curiosity.
          </p>
          <p>
            My specialities include quickly learning new skills and programming
            languages, problem solving, building user-friendly, responsive
            websites and applications, functional and object-oriented
            programming, relational and non-relational database design and
            development, deconstructing monoliths into microservices, building
            RESTful web services, and cloud computing with Amazon Web Services.
            So far, I have experience with HTML, CSS, Bootstrap, JavaScript,
            jQuery, React.js, Node.js, Express.js, Java, Spring Boot, MySQL,
            MongoDB, Git/GitHub, and many AWS resources. I have dabbled in state
            management tools for React such as MobX and the useContext hook,
            authentication tools such as OAuth and Passport, React Router, and
            Gatsby (check out my portfolio site that was built with Gatsby -
            bradmichael.dev). Currently, I am learning GraphQL as an alternative
            to REST and TypeScript with React. I know there is so much more to
            learn and I am enthusiastic about expanding my knowledge and
            incorporating new languages, libraries, frameworks, and principles.
          </p>
          <p>
            <AniLink className={styles.aboutLink} fade to="/contact">
              CONTACT ME
            </AniLink>{' '}
            for project inquiries and availability!
          </p>
          <p>
            If I'm not coding, I'm probably watching football or Netflix,
            reading a good book, or playing golf. I have a severe coffee
            addiction and I believe laughter is the best medicine.
          </p>
        </article>
        <a
          className={styles.aboutLink}
          href="https://drive.google.com/file/d/1zs9-iJJUiIqdaCH9s0Dc-p8kayVQKAqu/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer">
          RESUME
        </a>
      </div>
    </section>
  );
}
