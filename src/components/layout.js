import { graphql, useStaticQuery } from "gatsby";
import React from "react"
import { Helmet } from "react-helmet";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { AnchorLink } from "gatsby-plugin-anchor-links";

const liStyles = "py-4 px-4 block";

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title,
          social {
            github,
            linkedin
          },
          resume
        }
      }
    }
  `)

  return (
    <div className="container mx-auto">
      <Helmet defaultTitle="Tyler Ortiz">
        <html lang="en" />
      </Helmet>
      <header className="">

        <ul className="flex justify-end">
          <li>
            <AnchorLink className={liStyles} to="/#about-me">About Me</AnchorLink>
          </li>
          <li>
            <AnchorLink className={liStyles} to="/#experience">Experience</AnchorLink>
          </li>
          <li>
            <AnchorLink className={liStyles} to="/#contact-me">Contact</AnchorLink></li>
          <li>
            <a className={liStyles} href={data.site.siteMetadata.social.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub className="inline-block" /></a>
          </li>
          <li>
            <a className={liStyles} href={data.site.siteMetadata.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin className="inline-block" /></a>
          </li>
          <li>
            <a className="btn btn-primary py-4 px-4 block" href={data.site.siteMetadata.resume} target="_blank" rel="noreferrer">Resume</a>
          </li>
        </ul>
      </header>
      {children}
    </div>
  )
}
