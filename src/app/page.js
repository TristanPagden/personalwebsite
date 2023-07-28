import Image from 'next/image'
import React from 'react'
import Head from 'next/head'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <div>
        <h1 className={styles.title}>Full Stack Developer</h1>
        <p className={styles.text}>Hi, I’m Tristan Pagden. Im an enthusiastic full stack developer based in the UK. I’m also proficient in AI technologies.</p>
        <Image src='/profile.png' width={200} height={200} alt='Profile pic' className={styles.image}></Image>
      </div>
    </>
    )
}

export const metadata = {
  title: "Tristan Pagden | Home"
};
