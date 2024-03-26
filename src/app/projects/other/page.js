import React from 'react'
import Project from '@/components/Project'

const other = () => {
  return (
    <div className=''>
      <div className='w-full'>
        <Project props={{title: 'Page rank algorithm', codeLink: 'google.com', demoLink:'google.com', image: '/profile_pic.png'}}></Project>
        <Project props={{title: '7 degrees of Kevin Bacon', codeLink: 'google.com', demoLink:'google.com', image: '/profile_pic.png'}}></Project>
        <Project props={{title: 'Knights and Knaves logic puzzle', codeLink: 'google.com', demoLink:'google.com', image: '/profile_pic.png'}}></Project>
        <Project props={{title: 'Sentence parser', codeLink: 'google.com', demoLink:'google.com', image: '/profile_pic.png'}}></Project>
        <Project props={{title: 'Gene predictor', codeLink: 'google.com', demoLink:'google.com', image: '/profile_pic.png'}}></Project>
        
      </div>
    </div>
  )
}

export default other