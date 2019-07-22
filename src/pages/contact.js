import React from "react"
import Layout from "../components/Layout"
import Contact from "../components/Contact"
import Hero from "../components/Hero"
import { graphql } from "gatsby"

const contact = ({ data }) => {
  return (
    <Layout>
      <Hero img={data.connectBcg.childImageSharp.fluid} />
      <Contact />
    </Layout>
  )
}

export const query = graphql`
  query {
    connectBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default contact
