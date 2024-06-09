import React from 'react'
import Project from '@/components/Project'

const games = () => {
  return (
    <div className=''>
      <div role="tablist" className="tabs tabs-lifted tabs-lg">
        <a href='/projects/AI' className='tab' role='tab'>Artificial Intelligence</a>
        <a href='/projects/web' className='tab' role='tab'>Web Development</a>
        <a href='/projects/games' className='tab tab-active' role='tab'>Games</a>
        <a href='/projects/finance' className='tab' role='tab'>Finance</a>
        <a href='/projects/other' className='tab' role='tab'>Other</a>
      </div>
      <br />
      <div className='w-full'>
        <Project props={{title: 'Minesweeper AI', codeLink: 'https://replit.com/@tristanpagden/Minesweeper-AI', demoLink:'https://replit.com/@tristanpagden/Minesweeper-AI', image: '/projects/games/minesweeper.jpeg'}}></Project>
        <Project props={{title: 'Tic-tac-toe AI', codeLink: 'https://replit.com/@tristanpagden/Tic-Tac-Toe-AI', demoLink:'https://replit.com/@tristanpagden/Tic-Tac-Toe-AI', image: '/projects/games/tic tac toe.jpg'}}></Project>
        <Project props={{title: 'Nim game AI', codeLink: 'https://replit.com/@tristanpagden/Nim-game-AI', demoLink:'https://replit.com/@tristanpagden/Nim-game-AI', image: '/projects/games/nim_game.png'}}></Project>
        <Project props={{title: 'Crossword generator', codeLink: 'https://replit.com/@tristanpagden/Crossword-generator', demoLink:'https://replit.com/@tristanpagden/Crossword-generator', image: '/projects/games/crossword.png'}}></Project>
      </div>
    </div>
  )
}

export default games