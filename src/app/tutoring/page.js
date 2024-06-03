import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <>
      <div id='#about' className='text-center mx-auto mt-10 w-1/2 mt-20'>
        <h1 className='text-3xl font-bold text-center'>Tristan Pagden - Tutoring</h1>
        <p className='text-lg text-center pt-5'>I offer tutoring for most areas of programming from beginer to advanced, including artificial intelligence with Python, web development with JavaScript and game development with C# and Unity. I also offer tutoring in Maths and all 3 sciences at GCSE level or below. I give engaging and thorough lessons personalised to your preferences and abilities. As well as this I will teach you to be an effective student and motivate yourself to learn and memorise efficiently. </p>
      </div>
      <h1 className='text-xl font-bold text-center mt-10'>Want tutoring? Contact me - tutoringbytristan@gmail.com</h1>
      <Image src='/profile_pic.png' className='mx-auto mt-10 bg-slate-700 p-2 rounded-xl' width={250} height={250}></Image>
      <div className='w-1/2 text-center mx-auto mt-10 rounded-md'>
        <h1 className='font-bold text-2xl'>Subjects I offer</h1>
        <h1 className='text-white font-bold text-lg bg-slate-900 inline-block px-2 py-1 mx-1 my-2'>Artificial intelligence</h1>
        <h1 className='text-white font-bold text-lg bg-slate-900 inline-block px-2 py-1 mx-1 my-2'>Web development</h1>
        <h1 className='text-white font-bold text-lg bg-slate-900 inline-block px-2 py-1 mx-1 my-2'>Game development</h1>
        <h1 className='text-white font-bold text-lg bg-slate-900 inline-block px-2 py-1 mx-1 my-2'>Python</h1>
        <h1 className='text-white font-bold text-lg bg-slate-900 inline-block px-2 py-1 mx-1 my-2'>JavaScript</h1>
        <h1 className='text-white font-bold text-lg bg-slate-900 inline-block px-2 py-1 mx-1 my-2'>GCSE Maths</h1>
        <h1 className='text-white font-bold text-lg bg-slate-900 inline-block px-2 py-1 mx-1 my-2'>GCSE Physics</h1>
        <h1 className='text-white font-bold text-lg bg-slate-900 inline-block px-2 py-1 mx-1 my-2'>GCSE Chemistry</h1>
        <h1 className='text-white font-bold text-lg bg-slate-900 inline-block px-2 py-1 mx-1 my-2'>GCSE Biology</h1>
        <h1 className='text-white font-bold text-lg bg-slate-900 inline-block px-2 py-1 mx-1 my-2'>GCSE Computer science</h1>
        <h1 className='text-white font-bold text-lg bg-slate-900 inline-block px-2 py-1 mx-1 my-2'>GCSE Geography</h1>
      </div>
    </>
  )
}

export default page