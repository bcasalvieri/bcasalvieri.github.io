import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import { graphql } from "gatsby"
import Projects from "../components/Projects/Projects"

const projects = ({ data }) => {
  return (
    <Layout>
      <Hero img={data.portfolioBcg.childImageSharp.fluid} />
      <Projects />
    </Layout>
  )
}

export const query = graphql`
  query projectsImage {
    portfolioBcg: file(relativePath: { eq: "portfolioBcg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default projects
