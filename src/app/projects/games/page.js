import React from 'react'
import Project from '@/components/Project'

const games = () => {
  return (
    <div className=''>
      <div className='w-full'>
        <Project props={{title: 'Minesweeper AI', codeLink: 'google.com', demoLink:'google.com', image: '/profile_pic.png'}}></Project>
        <Project props={{title: 'Tic-tac-toe AI', codeLink: 'google.com', demoLink:'google.com', image: '/profile_pic.png'}}></Project>
        <Project props={{title: 'Nim game AI', codeLink: 'google.com', demoLink:'google.com', image: '/profile_pic.png'}}></Project>
        <Project props={{title: 'Crossword generator', codeLink: 'google.com', demoLink:'google.com', image: '/profile_pic.png'}}></Project>
      </div>
    </div>
  )
}

export default games