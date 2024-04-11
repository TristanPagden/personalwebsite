import React from 'react'
import Project from '@/components/Project'

const web = () => {
  return (
    <div className=''>
      <div className='w-full'>
        <Project props={{title: 'Mote construction site', codeLink: 'https://github.com/TristanPagden/moteconstruction', demoLink:'https://motebuilding.vercel.app/', image: '/projects/web/mote.jpg'}}></Project>
        <Project props={{title: 'This website!', codeLink: 'https://github.com/TristanPagden/personalwebsite', demoLink:'/', image: '/projects/web/this_site.png'}}></Project>
      </div>
    </div>
  )
}

export default web