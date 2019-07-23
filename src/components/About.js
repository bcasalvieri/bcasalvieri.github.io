import React from "react"
import Title from "./Title"
import styles from "../css/aboutme.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const About = () => {
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="me" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutInfo}>
          <p>
            Hi! I’m Brad and I’m a Web Developer who is passionate about
            creating beautiful and meaningful websites and applications. I
            recently earned a Full Stack JavaScript Web Development Certificate
            from Rutgers Coding Boot Camp. I'm currently a tutor for Trilogy
            Education and a freelance web developer.{" "}
            <AniLink className={styles.aboutLink} fade to="/contact">
              CONTACT ME
            </AniLink>{" "}
            for project inquiries and availability!
          </p>
          <p>
            If I'm not coding, I'm probably watching football or Netflix,
            reading a good book, or playing golf. I have a severe coffee
            addiction and I believe laughter is the best medicine.
          </p>
        </article>
        <a className={styles.aboutLink} href="https://drive.google.com/open?id=1FH7dhzyjDj-lxgU5UJOLUagqBlAsiRQ4" target="_blank">RESUME</a>
      </div>
    </section>
  )
}

export default About
