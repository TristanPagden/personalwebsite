import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './HomePage.module.css'

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles.home}>
          <div>
              <h1 className={styles.title}>Full Stack Developer</h1>
              <p className={styles.text}>Hi, I’m Tristan Pagden. I'm an enthusiastic full stack developer based in the UK. I’m also proficient in AI technologies.</p>
              <Image src='/profile_pic.png' width={200} height={200} alt='Profile pic' className={styles.profile_image}></Image>
          </div>
          <div className={styles.social_images}>
              <Link href='/'>
              <Image src='/github.png' width={44} height={44} alt='github pic' className={styles.social_image} title='GitHub'></Image>
              </Link>
              <Link href='/'>
              <Image src='/linkedin.png' width={44} height={44} alt='linkedin pic' className={styles.social_image} title='Linkedin'></Image>
              </Link>
              <Link href='/'>
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
              <Image src='/skills/mongodb.png' width={44} height={44} alt='mongodb pic' className={styles.skills_image} title='MongoDB'></Image>
              <Image src='/skills/python.png' width={44} height={44} alt='python pic' className={styles.skills_image} title='Python'></Image>
              <Image src='/skills/tensorflow.png' width={44} height={44} alt='tensorflow pic' className={styles.skills_image} title='TensorFlow'></Image>
              <Image src='/skills/pytorch.png' width={44} height={44} alt='pytorch pic' className={styles.skills_image} title='PyTorch'></Image>
          </div>
      </div>
    </div>  
  )
}

export default HomePage

