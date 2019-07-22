import React from 'react'
import Layout from '../components/Layout'
import Hero from "../components/Hero"
import {graphql} from "gatsby"

const about = ({data}) => {
  return (
    <Layout>
      <Hero img={data.aboutBcg.childImageSharp.fluid} />
      about section
    </Layout>
  )
}

export const query = graphql`
  query {
    aboutBcg: file(relativePath: { eq: "placeholder-image-wide.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default about
