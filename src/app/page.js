'use client'
import Link from 'next/link'
import Image from 'next/image'


export default function Home() {
  return (
    <> 
      <div id='#about' className='text-center mx-auto mt-10 w-1/2 mt-20'>
        <h1 className='text-3xl font-bold text-center'>Tristan Pagden - Homepage</h1>
        <p className='text-lg text-center pt-5'>Hi I am Tristan Pagden I am a software engineer with particular interest in artificial intelligence and machine learning but also with skills in other areas of computer science and programming such as web development. I also have an interest in the natural sciences and maths. Here I will show you some of my projects and qualifications, and also my tutoring service. I hope you find this page enjoyable and interesting, thank you for visiting.</p>
        <div className='pt-7'>
          <Link href='https://github.com/TristanPagden'>
          <Image src='/github.png' width={40} height={40} alt='github pic' className='inline mr-3 ' title='GitHub'></Image>
          </Link>
          <Link href='https://www.linkedin.com/in/tristan-pagden-51ba75286/'>
          <Image src='/linkedin.png' width={40} height={40} alt='linkedin pic' className=' inline mr-3' title='Linkedin'></Image>
          </Link>
        </div>
      </div>
      <div className='flex mx-auto mt-20 w-1/2 mx-auto'>
        <div className='flex mx-auto max-w-[1200px]'>
          <div className='flex flex-col w-1/4 rounded-md shadow-xl mx-auto'>
            <div className='bg-slate-700 p-2 w-full text-center rounded-xl'>
              <p className='text-base text-white text-center mb-2'>Check out some of my projects</p>
              <a className='bg-slate-600 hover:bg-slate-500 text-white rounded-md p-1 font-bold' href='/projects'>Projects</a>
            </div>
          </div>
          <div className='flex flex-col w-1/4 rounded-md shadow-xl mx-auto'>
            <div className='bg-slate-700 p-2 w-full text-center rounded-xl'>
              <p className='text-base text-white text-center mb-2'>Check out my tutoring here</p>
              <a className='bg-slate-600 hover:bg-slate-500 text-white rounded-md p-1 font-bold' href='/tutoring'>Tutoring</a>
            </div>
          </div>
          <div className='flex flex-col w-1/4 rounded-md shadow-xl mx-auto'>
            <div className='bg-slate-700 p-2 w-full text-center rounded-xl'>
              <p className='text-base text-white text-center mb-2'>Check out my resume here</p>
              <a className='bg-slate-600 hover:bg-slate-500 text-white rounded-md p-1 font-bold' href='/CV.pdf' target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
          </div>
        </div>
      </div>
      <div className='w-1/2 text-center mx-auto mt-20'>
        <h1 className='font-bold text-2xl'>Skills</h1>
        <h1 className='text-white font-bold text-lg bg-slate-900 inline-block px-2 py-1 mx-1 my-2'>Python</h1>
        <h1 className='text-white font-bold text-lg bg-slate-900 inline-block px-2 py-1 mx-1 my-2'>JavaScript</h1>
        <h1 className='text-white font-bold text-lg bg-slate-900 inline-block px-2 py-1 mx-1 my-2'>HTML</h1>
        <h1 className='text-white font-bold text-lg bg-slate-900 inline-block px-2 py-1 mx-1 my-2'>CSS</h1>
        <h1 className='text-white font-bold text-lg bg-slate-900 inline-block px-2 py-1 mx-1 my-2'>Rust</h1>
        <h1 className='text-white font-bold text-lg bg-slate-900 inline-block px-2 py-1 mx-1 my-2'>Unity</h1>
        <h1 className='text-white font-bold text-lg bg-slate-900 inline-block px-2 py-1 mx-1 my-2'>Tensorflow</h1>
        <h1 className='text-white font-bold text-lg bg-slate-900 inline-block px-2 py-1 mx-1 my-2'>Pytorch</h1>
        <h1 className='text-white font-bold text-lg bg-slate-900 inline-block px-2 py-1 mx-1 my-2'>Tailwind CSS</h1>
        <h1 className='text-white font-bold text-lg bg-slate-900 inline-block px-2 py-1 mx-1 my-2'>React JS</h1>
        <h1 className='text-white font-bold text-lg bg-slate-900 inline-block px-2 py-1 mx-1 my-2'>Next JS</h1>
        <h1 className='text-white font-bold text-lg bg-slate-900 inline-block px-2 py-1 mx-1 my-2'>Node JS</h1>
        <h1 className='text-white font-bold text-lg bg-slate-900 inline-block px-2 py-1 mx-1 my-2'>Express JS</h1>
      </div>
      <h1 className='text-xl font-bold text-center mt-20'>Contact me - tutoringbytristan@gmail.com</h1>
    </>
  )
}
