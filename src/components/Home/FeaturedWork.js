import React from 'react'
import Project from '../Projects/Project'
import { useStaticQuery, graphql } from 'gatsby'
import Title from '../Title'
import styles from '../../css/items.module.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink'


const FeaturedWork = () => {
  return (
    <section className={styles.projects}>
      <Title title='featured' subtitle='projects' />
      <div className={styles.center}>

      </div>
      <AniLink fade to='/portfolio' className="btn-primary">
        all projects
      </AniLink>
    </section>
  )
}

export default FeaturedWork
