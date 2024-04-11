import React from 'react'
import Link from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <>
    <div className={styles.footer}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Copyright © 2023. All rights are reserved</h1>
          <div className={styles.social_images}>
            <a href='https://github.com/TristanPagden'>
              <Image src='/github.png' width={32} height={32} alt='github pic' className={styles.social_image} title='GitHub'></Image>
            </a>
            <a href='https://www.linkedin.com/in/tristan-pagden-51ba75286/'>
              <Image src='/linkedin.png' width={32} height={32} alt='linkedin pic' className={styles.social_image} title='Linkedin'></Image>
            </a>
            <a href='https://www.upwork.com/freelancers/~0167c5c371fcfc7a1d'>
              <Image src='/upworks.png' width={32} height={32} alt='upworks pic' className={styles.social_image} title='Upwork'></Image>
            </a>
          </div>
        </div>
    </div>
    </>
  )
}

export default Footer