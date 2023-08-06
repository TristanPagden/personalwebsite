import React from 'react'
import Head from 'next/head'
import styles from './PortfolioLink.module.css'
import Project from './Project'

const Portfolio = () => {
  return (
    <div id='portfolio' className={styles.portfoliopage}>
      <div className={styles.portfolio}>
        <h1 className={styles.title}>Portfolio</h1>
        <Project props={{text: 'This is my personal website, which you are currently on. This displays my projects and tells you about me!', title: 'My Personal Website', languages: 'Next.js Vanilla CSS', link: '/', code: 'https://github.com/TristanPagden/personalwebsite', image: '/projects/project1.png', slide: '100vw'}}/>
      </div>
    </div>
  )
}

export default Portfolio

