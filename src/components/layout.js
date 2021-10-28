import { graphql, useStaticQuery } from "gatsby";
import React, { useRef, useState, useLayoutEffect } from "react"
import { Helmet } from "react-helmet";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Layout = ({ children }) => {
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
  `);

  const ref = useRef();
  let [check] = useState(true);
  const sticky = useStickyHeader(50);
  const headerClasses = `header ${(sticky && check) ? 'header-sticky' : ''}`

  function useStickyHeader(offset = 0) {
    const [stick, setStick] = useState(false);

    const handleScroll = () => {
      setStick(window.scrollY > offset);
    };

    useLayoutEffect(() => {
      window.addEventListener('scroll', handleScroll);

      return (() => {
        window.removeEventListener('scroll', handleScroll);
      });
    });

    return stick;
  }

  return (
    <div>
      <Helmet defaultTitle="Tyler Ortiz">
        <html lang="en" />
      </Helmet>

      <header ref={ref} className={headerClasses}>
        <div className="container mx-auto">
          <ul className="flex justify-end items-center">
            <li className="mr-auto">
              <span className="text-lg select-none">Tyler Ortiz - Software Engineer</span>
            </li>
            <li>
              <AnchorLink className="header-nav" to="/#about-me">About Me</AnchorLink>
            </li>
            <li>
              <AnchorLink className="header-nav" to="/#experience">Experience</AnchorLink>
            </li>
            <li>
              <AnchorLink className="header-nav" to="/#contact-me">Contact</AnchorLink></li>
            <li>
              <a className="header-nav" href={data.site.siteMetadata.social.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub className="inline-block" /></a>
            </li>
            <li>
              <a className="header-nav" href={data.site.siteMetadata.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin className="inline-block" /></a>
            </li>
            <li className="mx-2">
              <a className="btn btn-primary" href={data.site.siteMetadata.resume} target="_blank" rel="noreferrer">Resume</a>
            </li>
          </ul>
        </div>
      </header>

      <div className="container mx-auto">
        <h1>Tyler Ortiz - Software Engineeer</h1>
        {children}
      </div>

    </div>
  )
}

export default Layout