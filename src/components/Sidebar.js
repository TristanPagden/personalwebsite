import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <div className='w-64 min-h-full fixed top-0 left-0 bg-slate-600 text-center pt-10 shadow-2xl z-10'>
      <a href='/' className='font-logo text-white w-full h-full text-center text-3xl'>tristanPagden</a>
      <br/>
      <a href='/' className='text-white italic text-xl mt-12 text-center inline-block'>Home</a>
      <br/>
      <a href='/projects' className='text-white italic text-xl mt-4 text-center inline-block'>Projects</a>
      <br/>
      <a href='/CV.pdf' target="_blank" rel="noopener noreferrer" className='text-white italic text-xl mt-4 text-center inline-block'>Resume</a>
      <br/>
      <a href='/tutoring' className='text-white italic text-xl mt-4 text-center inline-block'>Tutoring</a>
      <br/>
      <div className='absolute bottom-10 left-6'>
            <Link href='https://github.com/TristanPagden'>
            <Image src='/github.png' width={36} height={36} alt='github pic' className='inline mr-3 ' title='GitHub'></Image>
            </Link>
            <Link href='https://www.linkedin.com/in/tristan-pagden-51ba75286/'>
            <Image src='/linkedin.png' width={36} height={36} alt='linkedin pic' className=' inline mr-3' title='Linkedin'></Image>
            </Link>
      </div>
      <h1 className='text-white font-bold text-sm bottom-3 left-5 text-center absolute'>Copyright ©. All rights reserved</h1>
    </div>
  )
}

export default Sidebar