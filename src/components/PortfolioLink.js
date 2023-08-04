import React from 'react'
import Head from 'next/head'
import styles from './PortfolioLink.module.css'
import Project from './Project'

const Portfolio = () => {
  return (
    <div id='portfolio' className={styles.portfoliopage}>
      <div className={styles.portfolio}>
        <h1 className={styles.title}>Portfolio</h1>
        <Project props={{text: 'text', title: 'title', languages: 'languages', link: 'link', code: 'code', image: '/upworks.png'}}/>
      </div>
    </div>
  )
}

export default Portfolio

