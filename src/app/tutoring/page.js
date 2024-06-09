import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@chakra-ui/react'

const page = () => {
  return (
    <>
      <div id='#about' className='text-center mx-auto mt-8 w-1/2 mt-20'>
        <h1 className='mb-10 text-3xl font-bold text-center'>Tristan Pagden - Tutoring</h1>
        <code className='text-lg text-center pt-5'>I offer tutoring for most areas of programming from beginner to advanced, including artificial intelligence with Python, web development with JavaScript and game development with C# and Unity. I also offer tutoring in Maths and all 3 sciences at GCSE level or below. I give engaging and thorough lessons personalised to your preferences and abilities. As well as this I will teach you to be an effective student and motivate yourself to learn and memorise efficiently. </code>
      </div>
      <h1 className='mt-10 mb-3 text-xl font-bold text-center'>Want tutoring contact me at these places</h1>
      <div className='mx-auto text-center'>
        <Link href='https://www.instagram.com/tutoringbytristan/'>
        <Image src='/instagram.png' width={40} height={40} alt='instagram pic' className='inline mr-3 ' title='Instagram'></Image>
        </Link>
        <Link href='https://www.facebook.com/profile.php?id=61560820737450'>
        <Image src='/facebook.png' width={40} height={40} alt='facebook pic' className='inline mr-3 ' title='Facebook'></Image>
        </Link>
      </div>
      <h1 className='mt-3 mb-5 text-xl font-bold text-center'>or email me at tutoringbytristan@gmail.com</h1>
      <div className='w-1/2 mx-auto my-10 rounded-md'>
        <div className="mockup-code">
          <pre data-prefix=">" className="text-warning"><code>Subjects I offer...</code></pre> 
          <pre data-prefix=">"><code>Artificial intelligence</code></pre> 
          <pre data-prefix=">"><code>Web development</code></pre>
          <pre data-prefix=">"><code>Game development</code></pre>
          <pre data-prefix=">"><code>Python</code></pre>
          <pre data-prefix=">"><code>JavaScript</code></pre>
          <pre data-prefix=">"><code>GCSE Maths</code></pre>
          <pre data-prefix=">"><code>GCSE Physics</code></pre>
          <pre data-prefix=">"><code>GCSE Chemistry</code></pre>
          <pre data-prefix=">"><code>GCSE Biology</code></pre>
          <pre data-prefix=">"><code>GCSE Computer science</code></pre>
          <pre data-prefix=">"><code>GCSE Geography</code></pre>
        </div>
      </div>
      <Image src="/profile_pic.jpeg" width={500} height={500} className='mx-auto my-10 bg-slate-800 p-2 rounded-xl'></Image>
      
    </>
  )
}

export default page