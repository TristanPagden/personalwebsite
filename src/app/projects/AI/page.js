import React from 'react'
import Project from '@/components/Project'

const AI = () => {
  return (
    <div className=''>
      <div className='w-full'>
        <Project props={{title: 'Bird image identifier with tensorflow', codeLink: 'https://www.kaggle.com/code/tristanpagden/birds-identifier', demoLink:'https://www.kaggle.com/code/tristanpagden/birds-identifier', image: '/profile_pic.png'}}></Project>
        <Project props={{title: 'Shopping classifier nearest neighbours', codeLink: 'google.com', demoLink:'google.com', image: '/profile_pic.png'}}></Project>
        <Project props={{title: 'Road sign identifer with tensorflow', codeLink: 'google.com', demoLink:'google.com', image: '/profile_pic.png'}}></Project>
        <Project props={{title: 'Natural language prediction analysis', codeLink: 'google.com', demoLink:'google.com', image: '/profile_pic.png'}}></Project>
      </div>
    </div>
  )
}

export default AI