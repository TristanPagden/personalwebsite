import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Project = ({props}) => {
  return (
    <div className='my-2 w-1/4 inline-block px-2'>
        <h1 className='text-xl text-white bg-slate-700 text-center font-bold p-1'>{props.title}</h1>  
        <Link href={props.demoLink}>
        <Image src={props.image} width={400} height={400} className='hover:opacity-50'></Image>
        </Link>
        <div className='bg-slate-700 p-2 text-left'>
          <a className='bg-slate-600 hover:bg-slate-500 text-white text-lg py-1 px-2 rounded-md font-bold my-1 mx-2 inline-block' href={props.codeLink}>Code</a>
          <a className='bg-slate-600 hover:bg-slate-500 text-white text-lg py-1 px-2 rounded-md font-bold my-1 mx-2 inline-block' href={props.demoLink}>Demo</a>
        </div>
    </div>
    
  )
}

export default Project