'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './HomePage.module.css'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const HomePage = () => {

  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if(inView) {
      controls.start({opacity: 1, scale: 1,
        transition: {
          duration: 0.5 
        }});
    }
    if(!inView) {
      controls.start({ opacity: 0, scale: 0.5 });
    }
  }, [inView]);

  return (
    <>
    <div className={styles.homepage} ref={ref}>
      <motion.div className={styles.home} animate={controls}>
          <div className={styles.info}>
              <h1 className={styles.title}>Full Stack Developer</h1>
              <p className={styles.text}>Hi, I&apos;m Tristan Pagden. I'm an enthusiastic full stack developer based in the UK. I&apos;m also proficient in AI technologies.</p>
              <Image src='/profile_pic.png' width={200} height={200} alt='Profile pic' className={styles.profile_image}></Image>
          </div>
          <div className={styles.social_images}>
              <Link href='https://github.com/TristanPagden'>
              <Image src='/github.png' width={44} height={44} alt='github pic' className={styles.social_image} title='GitHub'></Image>
              </Link>
              <Link href='https://www.linkedin.com/in/tristan-pagden-51ba75286/'>
              <Image src='/linkedin.png' width={44} height={44} alt='linkedin pic' className={styles.social_image} title='Linkedin'></Image>
              </Link>
              <Link href='https://www.upwork.com/freelancers/~0167c5c371fcfc7a1d'>
              <Image src='/upworks.png' width={44} height={44} alt='upworks pic' className={styles.social_image} title='Upwork'></Image>
              </Link>
          </div>
          <div className={styles.skills}>
              <h2 className={styles.skills_title}>Skills | </h2>
              <Image src='/skills/html.png' width={44} height={44} alt='html pic' className={styles.skills_image} title='HTML5'></Image>
              <Image src='/skills/css.png' width={44} height={44} alt='css pic' className={styles.skills_image} title='CSS3'></Image>
              <Image src='/skills/javascript.png' width={44} height={44} alt='js pic' className={styles.skills_image} title='JavaScript'></Image>
              <Image src='/skills/react.png' width={44} height={44} alt='react pic' className={styles.skills_image} title='React'></Image>
              <Image src='/skills/tailwind.png' width={44} height={44} alt='tailwind pic' className={styles.skills_image} title='TailwindCSS'></Image>
              <Image src='/skills/next.png' width={44} height={44} alt='next pic' className={styles.skills_image} title='NextJS'></Image>
              <Image src='/skills/nodejs.png' width={44} height={44} alt='nodejs pic' className={styles.skills_image} title='NodeJS'></Image>
              <Image src='/skills/express.png' width={44} height={44} alt='express pic' className={styles.skills_image} title='ExpressJS'></Image>
              <Image src='/skills/mongodb.png' width={44} height={44} alt='mongodb pic' className={styles.skills_image} title='MongoDB'></Image>
              <Image src='/skills/mysql.png' width={44} height={44} alt='mysql pic' className={styles.skills_image} title='MySQL'></Image>
              <Image src='/skills/python.png' width={44} height={44} alt='python pic' className={styles.skills_image} title='Python'></Image>
              <Image src='/skills/tensorflow.png' width={44} height={44} alt='tensorflow pic' className={styles.skills_image} title='TensorFlow'></Image>
              <Image src='/skills/pytorch.png' width={44} height={44} alt='pytorch pic' className={styles.skills_image} title='PyTorch'></Image>
          </div>
      </motion.div>
    </div>
  </>  
  )
};

export default HomePage

