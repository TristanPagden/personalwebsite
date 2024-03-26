import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <> 
      <div id='#about' className='text-center mx-auto mt-10 w-1/2'>
        <h1 className='text-3xl font-bold text-center'>Tristan Pagden - Homepage</h1>
        <p className='text-lg text-center pt-5'>Hi I am Tristan Pagden I am an aspiring software engineer with particular interest in Artificial intelligence and data science but also with skills in other areas of computer science. I also have an interest in the natural sciences, medicine, economics and philosophy and pretty much anything that takes my fancy at the time. Here I will show some of my projects and qualifications as well as keep a blog on anything I find interesting. I hope you find this page enjoyable, thank you for visiting.</p>
        <div className='pt-7'>
          <Link href='https://github.com/TristanPagden'>
          <Image src='/github.png' width={40} height={40} alt='github pic' className='inline mr-3 ' title='GitHub'></Image>
          </Link>
          <Link href='https://www.linkedin.com/in/tristan-pagden-51ba75286/'>
          <Image src='/linkedin.png' width={40} height={40} alt='linkedin pic' className=' inline mr-3' title='Linkedin'></Image>
          </Link>
        </div>
      </div>
      <div className='flex mx-auto mt-14 w-1/2'>
        <div className='flex mx-auto max-w-[1200px]'>
          <div className='flex flex-col grow w-1/4 rounded-md shadow-xl mr-7 ml-1'>
            <Image src='/profile_pic.png'  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt='profile pic'></Image>
            <div className='bg-slate-700 p-2 w-full text-center'>
              <p className='text-base text-white text-center mb-2'>Check out some of my projects here</p>
              <a className='bg-slate-600 hover:bg-slate-500 text-white rounded-md p-1 font-bold' href='/projects'>Projects</a>
            </div>
          </div>
          <div className='flex flex-col grow w-1/4 rounded-md shadow-xl mr-7'>
            <Image src='/profile_pic.png'  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt='profile pic'></Image>
            <div className='bg-slate-700 p-2 w-full text-center'>
              <p className='text-base text-white text-center mb-2'>Check out some of my tutoring here</p>
              <a className='bg-slate-600 hover:bg-slate-500 text-white rounded-md p-1 font-bold' href='/tutoring'>Tutoring</a>
            </div>
          </div>
          <div className='flex flex-col grow w-1/4 rounded-md shadow-xl'>
            <Image src='/profile_pic.png'  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt='profile pic'></Image>
            <div className='bg-slate-700 p-2 w-full text-center'>
              <p className='text-base text-white text-center mb-2'>Check out some of my qualifications here</p>
              <a className='bg-slate-600 hover:bg-slate-500 text-white rounded-md p-1 font-bold' href='/qualifications'>Qualifications</a>
            </div>
          </div>
        </div>
      </div>
      <div className='w-1/2 text-center mx-auto mt-10'>
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
    </>
  )
}
