import React from 'react'
import Head from 'next/head'
import styles from './About.module.css'

const About = () => {
  return (
    <div id='about' className={styles.aboutpage}>
      <div className={styles.about}>
        <div className={styles.info}>
          <h1 className={styles.title}>About me</h1>
          <p className={styles.text}>My name is Tristan Pagden. I live in the UK and I love to program. I have always wanted to work with computers ever since I was young and now I have made that dream a reality. I am a self-taught programmer and I specialise in two main areas: Web development and Artificial intelligence. I am a proficient front-end web developer and have a solid understanding of the backend of web development. I love designing websites and sharing my creations with the world. I also love Artificial intelligence and the cutting edge technology it can provide. I am proficient in programming AI in Python and I have experience with OpenAIs API. Overall, I am an enthusiastic programmer who loves their work and can provide many helpful skills to my clients.</p>
        </div>
      </div>
    </div>
    
  )
}

export default About

