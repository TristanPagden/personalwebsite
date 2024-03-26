import React from 'react'
import Project from '@/components/Project'

const web = () => {
  return (
    <div className=''>
      <div className='w-full'>
        <Project props={{title: 'Mote construction site', codeLink: 'google.com', demoLink:'https://motebuilding.vercel.app/', image: '/profile_pic.png'}}></Project>
        <Project props={{title: 'This website!', codeLink: 'google.com', demoLink:'/', image: '/profile_pic.png'}}></Project>
      </div>
    </div>
  )
}

export default web