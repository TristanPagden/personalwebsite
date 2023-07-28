import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Head from 'next/head';


const Navbar = () => {
  return (
    <>
      <nav>
        <h1 className='logo' onclick="return false">Tristan Pagden</h1>
        <Link legacyBehavior={true} href="/"><a  >Home</a></Link>
        <Link legacyBehavior={true} href="#about"><a >About</a></Link>
        <Link legacyBehavior={true} href="#portfolio"><a >Portfolio</a></Link>
        <Link legacyBehavior={true} href="#contact"><a >Contact</a></Link>
      </nav>
    </>
  );
}
 
export default Navbar;