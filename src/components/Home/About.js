import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styles from '../../css/about.module.css';
import Title from '../Title';

const getAbout = graphql`
  query aboutImg {
    aboutImage: file(relativePath: { eq: "DSC_1940.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const About = () => {
  const { aboutImage } = useStaticQuery(getAbout);

  return (
    <section className={styles.about}>
      <Title title="about" subtitle="me" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Img
              fluid={aboutImage.childImageSharp.fluid}
              alt="placeholder image"
            />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>I'm a Software Engineer</h4>
          <p>
            I'm a Software Engineer who is passionate about creating beautiful
            and meaningful websites and applications in the ReactJS ecosystem.
          </p>
          <p>
            I am a graduate of the Rutgers Coding Bootcamp, an avid football
            fan, and coffeeholic.
          </p>
          <Link to="/about" className="btn-primary">
            learn more
          </Link>
        </article>
      </div>
    </section>
  );
};

export default About;
