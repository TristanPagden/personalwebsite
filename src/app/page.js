'use client'
import Link from 'next/link'
import Image from 'next/image'


export default function Home() {
  return (
    <> 
      <div id='#about' className='text-center mx-auto mt-8 w-1/2'>
        <h1 className='mb-10 text-3xl font-bold text-center'>Tristan Pagden - Homepage</h1>
        <code className='text-lg text-center pt-5'>Hi I am Tristan Pagden I am a software engineer with particular interest in artificial intelligence and machine learning but also with skills in other areas of computer science and programming such as web development. I also have an interest in the natural sciences and maths. Here I will show you some of my projects and qualifications, and also my tutoring service. I hope you find this page enjoyable and interesting, thank you for visiting.</code>
        <div className='mt-10'>
          <Link href='https://github.com/TristanPagden'>
          <Image src='/github.png' width={40} height={40} alt='github pic' className='inline mr-3 ' title='GitHub'></Image>
          </Link>
          <Link href='https://www.instagram.com/tutoringbytristan/'>
          <Image src='/instagram.png' width={40} height={40} alt='instagram pic' className='inline mr-3 ' title='Instagram'></Image>
          </Link>
          <Link href='https://www.facebook.com/profile.php?id=61560820737450'>
          <Image src='/facebook.png' width={40} height={40} alt='facebook pic' className='inline mr-3 ' title='Facebook'></Image>
          </Link>
        </div>
      </div>
      <div className='flex mx-auto mt-10 w-1/2 mx-auto'>
        <div className='flex mx-auto max-w-[1200px]'>
          <div className='flex flex-col px-2 mx-auto'>
            <a href='/tutoring'>
              <button className="btn btn-neutral btn-lg">Tutoring</button>
            </a>      
          </div>
          <div className='flex flex-col px-2 mx-auto'>
            <a href='/qualifications'>
              <button className="btn btn-neutral btn-lg">Qualifications</button>
            </a>    
          </div>
          <div className='flex flex-col px-2 mx-auto'>
            <a href='/resume'>
              <button className="btn btn-neutral btn-lg">Resume</button>
            </a>
          </div>
        </div>
      </div>
      <div className='w-1/2 mx-auto mb-10 mt-10'>
        <div className="mockup-code">
          <pre data-prefix=">" className="text-warning"><code>Skills I have...</code></pre> 
          <pre data-prefix=">"><code>Python</code></pre> 
          <pre data-prefix=">"><code>JavaScript</code></pre>
          <pre data-prefix=">"><code>HTML</code></pre>
          <pre data-prefix=">"><code>CSS</code></pre>
          <pre data-prefix=">"><code>Rust</code></pre>
          <pre data-prefix=">"><code>Unity</code></pre>
          <pre data-prefix=">"><code>Tensorflow</code></pre>
          <pre data-prefix=">"><code>Pytorch</code></pre>
          <pre data-prefix=">"><code>Tailwind CSS</code></pre>
          <pre data-prefix=">"><code>React JS</code></pre>
          <pre data-prefix=">"><code>Next JS</code></pre>
          <pre data-prefix=">"><code>Express JS</code></pre>
        </div>
      </div>
    </>
  )
}
