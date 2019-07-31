import React from "react"
import ProjectList from "./ProjectList"
import { useStaticQuery, graphql } from "gatsby"

const getProjects = graphql`
  query {
    projects: allContentfulProjects {
      edges {
        node {
          name
          slug
          url
          githubUrl
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

const Projects = () => {
  const { projects } = useStaticQuery(getProjects)
  return (
    <div>
      <ProjectList projects={projects} />
    </div>
  )
}

export default Projects
