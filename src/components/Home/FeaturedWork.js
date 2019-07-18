import React from 'react'
import Project from '../Projects/Project'
import { useStaticQuery, graphql } from 'gatsby'
import Title from '../Title'
import styles from '../../css/items.module.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const getFeaturedProjects = graphql`
  query {
    featuredProjects: allContentfulProjects(filter: {featured: {eq: true}}) {
      edges {
        node {
          name
          slug
          url
          githubUrl
          featured
          description
          contentful_id
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`


const FeaturedWork = () => {
  const { featuredProjects } = useStaticQuery(getFeaturedProjects)
  const projects = featuredProjects.edges

  return (
    <section className={styles.projects}>
      <Title title='featured' subtitle='projects' />
      <div className={styles.center}>
        {projects.map(({ node }) => {
          return <Project key={node.contentful_id} project={node} />
        })}
      </div>
      <AniLink fade to='/portfolio' className="btn-primary">
        all projects
      </AniLink>
    </section>
  )
}

export default FeaturedWork
