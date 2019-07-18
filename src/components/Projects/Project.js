import React from "react"
import Img from "gatsby-image"
import styles from "../../css/project.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import PropTypes from "prop-types"

const Project = ({ project }) => {
  const { name, slug, url, githubUrl, image } = project

  return (
    <article className={styles.project}>
      <div className={styles.imgContainer}>
        <Img fluid={image.fluid} className={styles.img} alt="single project" />
        <AniLink fade className={styles.link} to={`/project/${slug}`}>
          details
        </AniLink>
      </div>
      <div className={styles.footer}>
        <h3>{name}</h3>
        <div className={styles.info}>
          <div className={styles.details}>
            <h6>URL: <a href={url}>{url}</a></h6>
            <h6>GitHub Repo: <a href={githubUrl}>{githubUrl}</a></h6>
          </div>
        </div>
      </div>
    </article>
  )
}

Project.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    githubUrl: PropTypes.string.isRequired,
  }),
}

export default Project
