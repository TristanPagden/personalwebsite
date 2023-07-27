import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Head from 'next/head'

const Navbar = () => {
  return (
    <>
      <nav>
        <h1 class='logo'>Tristan Pagden</h1>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </>
  );
}
 
export default Navbar;