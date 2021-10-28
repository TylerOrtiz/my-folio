import { graphql, useStaticQuery } from "gatsby";
import React from "react"
import { Helmet } from "react-helmet";
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title,
          github {
            url
          },
          linkedin {
            url
          }
        }
      }
    }
  `)

  return (
    <div className="container mx-auto">
      <Helmet>
        <link rel="canonical" href="somewhere" />
      </Helmet>
      <header className="flex justify-end">
        
        <a className="align-middle" href={data.site.siteMetadata.github.url}> <FaGithub className="inline-block" /> <span className="align-text-top">TylerOrtiz</span></a>
        <a className="align-middle" href={data.site.siteMetadata.linkedin.url}> <FaLinkedin className="inline-block" /> <span className="align-text-top">Tyler Ortiz</span></a>
      </header>
      {children}
    </div>
  )
}
