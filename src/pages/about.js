import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

export default function about() {
  return (
      <Layout pageTitle="About Me">
        <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      </Layout>
  )
}

// seo
export const Head = () => (
    <>
      <title>About Me</title>
      <meta name="description" content="Your description" />
    </>
)

