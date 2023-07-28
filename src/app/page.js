import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div>
        <h1 className={styles.title}>Full Stack Developer</h1>
        <p className={styles.text}>Hi, I’m Tristan Pagden. I'm an enthusiastic full stack developer based in the UK. I’m also proficient in AI technologies.</p>
        <Image src='/profile_pic.png' width={200} height={200} alt='Profile pic' className={styles.profile_image}></Image>
      </div>
      <div className={styles.social_images}>
        <Link href='/'>
          <Image src='/github.png' width={44} height={44} alt='github pic' className={styles.social_image}></Image>
        </Link>
        <Link href='/'>
          <Image src='/linkedin.png' width={44} height={44} alt='linkedin pic' className={styles.social_image}></Image>
        </Link>
      </div>
      <div className={styles.skills}>
        <h2 className={styles.skills_title}>Skills | </h2>
        <Image src='/skills/html.png' width={44} height={44} alt='html pic' className={styles.skills_image}></Image>
        <Image src='/skills/css.png' width={44} height={44} alt='css pic' className={styles.skills_image}></Image>
        <Image src='/skills/javascript.png' width={44} height={44} alt='js pic' className={styles.skills_image}></Image>
        <Image src='/skills/react.png' width={44} height={44} alt='react pic' className={styles.skills_image}></Image>
        <Image src='/skills/tailwind.png' width={44} height={44} alt='tailwind pic' className={styles.skills_image}></Image>
        <Image src='/skills/next.png' width={44} height={44} alt='next pic' className={styles.skills_image}></Image>
        <Image src='/skills/nodejs.png' width={44} height={44} alt='nodejs pic' className={styles.skills_image}></Image>
        <Image src='/skills/mongodb.png' width={44} height={44} alt='mongodb pic' className={styles.skills_image}></Image>
        <Image src='/skills/python.png' width={44} height={44} alt='python pic' className={styles.skills_image}></Image>
        <Image src='/skills/tensorflow.png' width={44} height={44} alt='tensorflow pic' className={styles.skills_image}></Image>
        <Image src='/skills/pytorch.png' width={44} height={44} alt='pytorch pic' className={styles.skills_image}></Image>
      </div>
    </>
    )
}

export const metadata = {
  title: "Tristan Pagden | Home"
};
