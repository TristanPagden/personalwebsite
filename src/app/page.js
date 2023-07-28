import React from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import PortfolioLink from '../components/PortfolioLink'
import HomePage from '../components/HomePage'

export default function Home() {
  return (
    <>
      <HomePage></HomePage>
      <About></About>
      <PortfolioLink></PortfolioLink>
      <Contact></Contact>
    </>
    )
}

export const metadata = {
  title: "Tristan Pagden"
};
