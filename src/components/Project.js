'use client'

import React from 'react'
import styles from './Project.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Project = ({props}) => {
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
      controls.start({x: props.slide});
    }
  }, [inView]);
  return (
    <div ref={ref} className={styles.bigWrapper}>
      <motion.div className={styles.wrapper} animate={controls}>
          <div className={styles.imageWrapper}>
            <Link href={props.link}>
              <img src={props.image} className={styles.image} alt='project'></img>
            </Link>
          </div>
          <div className={styles.infoWrapper}>
            <h1 className={styles.title}>{props.title}</h1>
            <p className={styles.text}>{props.text}</p>
            <p className={styles.languages} title='Languages used'>{props.languages}</p>
            <div className={styles.linkWrapper}>
              <Link href={props.code} className={styles.link}>Code</Link>
              <Link href={props.link} className={styles.link}>Demo</Link>
            </div>
          </div>
      </motion.div>
    </div>
  )
}

export default Project