import React from "react"
import Layout from "../components/Layout"
// import Hero from "../components/Hero"
import { graphql } from "gatsby"
import Projects from "../components/Projects/Projects"

const portfolio = ({ data }) => {
  return (
    <Layout>
      {/* <Hero img={data.connectBcg.childImageSharp.fluid} /> */}
      <Projects />
    </Layout>
  )
}

export const query = graphql`
  query projectsImage {
    connectBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default portfolio
