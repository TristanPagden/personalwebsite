import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Project = ({props}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl inline-block mr-4 mb-4">
      <figure><img className='hover:opacity-50 w-full' src={props.image} /></figure>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <div className="card-actions justify-end">
        <a href={props.demoLink}>
          <button className="btn btn-neutral">Demo</button>
        </a>
        <a href={props.codeLink}>
          <button className="btn btn-neutral">Code</button>
        </a>
        </div>
      </div>
    </div>
    
  )
}

export default Project