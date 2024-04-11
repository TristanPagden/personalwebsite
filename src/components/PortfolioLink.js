import React from 'react'
import Head from 'next/head'
import styles from './PortfolioLink.module.css'
import Project from './Project'

const Portfolio = () => {
  return (
    <div id='portfolio' className={styles.portfoliopage}>
      <div className={styles.portfolio}>
        <h1 className={styles.title}>Portfolio</h1>
        <Project props={{text: 'This is my personal website, which you are currently on. This displays my projects and tells you about me!', title: 'My Personal Website', languages: 'Next.js VanillaCSS', link: '/', code: 'https://github.com/TristanPagden/personalwebsite', image: '/projects/project1.png', slide: '100vw'}}/>
        <Project props={{text: 'This is a fullstack webapp that I created. It uses AI in order to make predictions about stock prices.', title: 'Stock Price Predictor', languages: 'Next.js Tailwind Express Tensorflow', link: 'https://stockpricepredictor.vercel.app', code: 'https://github.com/TristanPagden/stockpricepredictor', image: '/projects/project2.png', slide: '-100vw'}}/>
        <Project props={{text: 'This is a website for one of my clients a building company to display what their company offers to clients. ', title: 'Mote Building and Construction', languages: 'Next.js Tailwind', link: 'https://motebuilding.vercel.app', code: 'https://github.com/TristanPagden/moteconstruction', image: '/projects/project3.png', slide: '100vw'}}/>
      </div>
    </div>
  )
}

export default Portfolio

