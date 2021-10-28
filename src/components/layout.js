import React from "react"
import { Helmet } from "react-helmet";
import { VscGithubInverted } from 'react-icons/vsc';

export default function Layout({ children }) {
  return (
    <div className="container mx-auto">
      <Helmet>
        <link rel="canonical" href="somewhere" />
      </Helmet>
      <header className="flex justify-end">
        
        <a className="align-middle" href="https://github.com/TylerOrtiz"> <VscGithubInverted className="inline-block" /> <span className="align-text-top">TylerOrtiz</span></a>
      </header>
      {children}
    </div>
  )
}