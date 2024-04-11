import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Head from 'next/head';
import styles from './Navbar.module.css'


const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar} >
        <a href='/' className={styles.logoLink}>
          <h1 className={styles.logo}>tristanPagden</h1>
        </a>
        <div className={styles.links}>
          <Link className={styles.link} href="/">Home</Link>
          <Link className={styles.link} href="#about">About</Link>
          <Link className={styles.link}  href="#portfolio">Portfolio</Link>
          <Link className={styles.link} href="#contact">Contact</Link>
        </div>
      </nav>
    </>
  );
}
 
export default Navbar;