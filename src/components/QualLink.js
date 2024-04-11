import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const QualLink = ({props}) => {
  return (
    <div className='mt-3 bg-slate-900 hover:bg-slate-800 w-full'>
        <Link href={props.link}>
        <h1 className='text-xl text-white text-center font-bold p-1 mx-2 inline-block flex flex-wrap flex-col content-start'>{props.title}</h1>
        </Link>
        <p className='text-xl text-white text-center italic p-1 mx-2 inline-block flex flex-wrap flex-col content-end'>{props.description}</p>
    </div>
    
  )
}

export default QualLink