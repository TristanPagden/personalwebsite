import React from 'react'
import styles from './Project.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Project = ({props}) => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.imageWrapper}>
          <Image src={props.image} width={44} height={44} className={styles.image}></Image>
        </div>
        <div className={styles.infoWrapper}>
          <h1 className={styles.title}>{props.title}</h1>
          <p className={styles.text}>{props.text}</p>
          <p className={styles.languages}>{props.languages}</p>
          <div>
            <Link href={props.link} className={styles.link}>Code</Link>
            <Link href={props.code} className={styles.link}>Demo</Link>
          </div>
        </div>
    </div>
  )
}

export default Project