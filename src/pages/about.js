import React from 'react'
import Layout from '../components/Layout'
import Hero from "../components/Hero"
import About from "../components/About/About"
import { graphql } from "gatsby"

const about = ({data}) => {
  return (
    <Layout>
      <Hero img={data.aboutBcg.childImageSharp.fluid} />
      <About />
    </Layout>
  )
}

export const query = graphql`
  query {
    aboutBcg: file(relativePath: { eq: "DSC_1991.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default about
