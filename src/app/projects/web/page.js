import React from 'react'
import Project from '@/components/Project'

const web = () => {
  return (
    <div className=''>
      <div role="tablist" className="tabs tabs-lifted tabs-lg">
        <a href='/projects/AI' className='tab' role='tab'>Artificial Intelligence</a>
        <a href='/projects/web' className='tab tab-active' role='tab'>Web Development</a>
        <a href='/projects/games' className='tab' role='tab'>Games</a>
        <a href='/projects/finance' className='tab' role='tab'>Finance</a>
        <a href='/projects/other' className='tab' role='tab'>Other</a>
      </div>
      <br />
      <div className='w-full'>
        <Project props={{title: 'Mote construction site', codeLink: 'https://github.com/TristanPagden/moteconstruction', demoLink:'https://motebuilding.vercel.app/', image: '/projects/web/mote.jpg'}}></Project>
        <Project props={{title: 'This website!', codeLink: 'https://github.com/TristanPagden/personalwebsite', demoLink:'/', image: '/projects/web/this_site.png'}}></Project>
      </div>
    </div>
  )
}

export default web