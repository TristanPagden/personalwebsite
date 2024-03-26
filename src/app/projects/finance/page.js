import React from 'react'
import Project from '@/components/Project'

const finance = () => {
  return (
    <div className=''>
      <div className='w-full'>
        <Project props={{title: 'Pivot point trading strategy with Alpaca and Pytorch', codeLink: 'google.com', demoLink:'google.com', image: '/profile_pic.png'}}></Project>
        <Project props={{title: 'Options trading strategy with Quantconnect and Pytorch', codeLink: 'google.com', demoLink:'google.com', image: '/profile_pic.png'}}></Project>
        <Project props={{title: 'AI trading strategy with Alpaca and Pytorch', codeLink: 'google.com', demoLink:'google.com', image: '/profile_pic.png'}}></Project>
      </div>
    </div>
  )
}

export default finance