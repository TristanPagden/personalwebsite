"use client"

import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from './About.module.css'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const About = () => {

  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if(inView) {
      controls.start({x: 0,
        transition: {
          type: 'spring', duration: 1, bounce: 0.3
        }});
    }
    if(!inView) {
      controls.start({x: '-100vw'});
    }
  }, [inView]);

  return (
    <div id='about' className={styles.aboutpage} ref={ref}>
      <motion.div className={styles.about} animate={controls}>
        <h1 className={styles.title}>About me</h1>
        <div className={styles.info} >
          <p className={styles.text} >My name is Tristan Pagden. I live in the UK and I love to program. I have always wanted to work with computers ever since I was young and now I have made that dream a reality. I am a self-taught programmer and I specialise in two main areas: Web development and Artificial intelligence. I am a proficient front-end web developer and have a solid understanding of the backend of web development. I love designing websites and sharing my creations with the world. I also love Artificial intelligence and the cutting edge technology it can provide. I am proficient in programming AI in Python and I have experience with OpenAIs API. Overall, I am an enthusiastic programmer who loves their work and can provide many helpful skills to my clients.</p>
        </div>
        <div className={styles.imageWrapper}>
          <img className={styles.image1} src='/map.png' alt='map'></img>
          <motion.div className={styles.image2Wrapper}  whileHover={{rotate: 360, ease: "linear", duration: 5 }}>
            <img className={styles.image2} src='/keyboard.png' alt='keyboard'></img>
          </motion.div>
        </div>
      </motion.div>
    </div>
    
  )
}

export default About

