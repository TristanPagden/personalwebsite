'use client';

import React from 'react'
import Head from 'next/head'
import styles from './Contact.module.css'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Contact = () => {

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
    <div id='contact' className={styles.contactpage}>
      <div className={styles.contact} ref={ref} >
        <h1 className={styles.title}>Contact me!</h1>
        <motion.div className={styles.info} animate={controls}>
          <div className={styles.wrapper}>
            <pre className={styles.text}>Hit me up on email! tristanpagden@gmail.com</pre>
            <Image src='/email.png' width={44} height={44} alt='email pic' className={styles.image} title='Email'></Image>
          </div>
          <div className={styles.wrapper}>
            <pre className={styles.text}>Looking for a freelancer? Contact me on Upwork!</pre>
            <a href='https://www.upwork.com/freelancers/~0167c5c371fcfc7a1d'>
              <Image src='/upworks.png' width={44} height={44} alt='upworks pic' className={styles.image} title='Upwork'></Image>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact

