import React from 'react'
import Layout from '../components/layout'
import Link from 'gatsby-link'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to my new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
