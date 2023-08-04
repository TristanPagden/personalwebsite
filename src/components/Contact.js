import React from 'react'
import Head from 'next/head'
import styles from './Contact.module.css'
import Image from 'next/image'

const Contact = () => {
  return (
    <div id='contact' className={styles.contactpage}>
      <div className={styles.contact}>
        <h1 className={styles.title}>Contact me!</h1>
        <div className={styles.info}>
          <div className={styles.wrapper}>
            <pre className={styles.text}>Hit me up on email! tristanpagden@gmail.com</pre>
            <a href='/'>
              <Image src='/email.png' width={44} height={44} alt='email pic' className={styles.image} title='Email'></Image>
            </a>
          </div>
          <div className={styles.wrapper}>
            <pre className={styles.text}>Looking for a freelancer? Contact me on Upwork!</pre>
            <a href='/'>
              <Image src='/upworks.png' width={44} height={44} alt='upworks pic' className={styles.image} title='Upwork'></Image>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

