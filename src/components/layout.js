import React from "react"
import { VscGithubInverted } from 'react-icons/vsc';

export default function Layout({ children }) {
  return (
    <div className="container mx-auto">
      <header className="flex justify-end">
        
        <a className="align-middle" href="https://github.com/TylerOrtiz"> <VscGithubInverted className="inline-block" /> <span className="align-text-top">TylerOrtiz</span></a>
      </header>
      {children}
    </div>
  )
}