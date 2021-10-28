import * as React from "react"
import Layout from "../components/layout"
import About from "../components/about"
import Contact from "../components/contact"
import Experience from "../components/experience"
import { Helmet } from "react-helmet";


const IndexPage = () => {
  return (
    <Layout>
      <Helmet >

      </Helmet>
      <main>
        <About />
        <Contact />
        <Experience />
      </main>
    </Layout>
  )
}

export default IndexPage
