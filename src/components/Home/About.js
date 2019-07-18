import React from "react"
import styles from "../../css/about.module.css"
import Title from "../Title"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const getAbout = graphql`
  query aboutImg {
    aboutImage: file(relativePath: { eq: "500.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  const { aboutImage } = useStaticQuery(getAbout)

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
          <h4>I'm a JavaScript Web Developer</h4>
          <p>
            I’m a UX-Focused, JavaScript Web Developer who is passionate about creating beautiful and meaningful websites and applications.
          </p>
          <p>I am a graduate of the Rutgers Coding Bootcamp, an avid football fan, and enjoy laughing at myself.</p>
          <AniLink fade to='/about' className="btn-primary">
            learn more
          </AniLink>
        </article>
      </div>
    </section>
  )
}

export default About
