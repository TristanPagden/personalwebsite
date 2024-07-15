import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <div className='w-64 min-h-full fixed top-0 left-0 bg-slate-600 text-center pt-10 shadow-2xl z-10'>
      <code>
        <a href='/' className='text-white w-full h-full text-center text-3xl'>tristanPagden</a>
      </code>
      <br/>
      <a href='/' className='text-white italic text-xl mt-12 text-center inline-block'>About</a>
      <br/>
      <a href='/projects' className='text-white italic text-xl mt-4 text-center inline-block'>Projects</a>
      <br/>
      <a href='/qualifications' className='text-white italic text-xl mt-4 text-center inline-block'>Qualifications</a>
      <br/>
      <div className='absolute bottom-10 left-6'>
        <Link href='https://github.com/TristanPagden'>
        <Image src='/github.png' width={36} height={36} alt='github pic' className='inline mr-3 ' title='GitHub'></Image>
        </Link>
      </div>
      <h1 className='text-white font-bold text-sm bottom-3 left-5 text-center absolute'>Copyright ©. All rights reserved</h1>
    </div>
  )
}

export default Sidebar