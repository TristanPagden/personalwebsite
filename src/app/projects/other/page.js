import React from 'react'
import Project from '@/components/Project'

const other = () => {
  return (
    <div className=''>
      <div role="tablist" className="tabs tabs-lifted tabs-lg">
        <a href='/projects/AI' className='tab' role='tab'>Artificial Intelligence</a>
        <a href='/projects/web' className='tab' role='tab'>Web Development</a>
        <a href='/projects/games' className='tab' role='tab'>Games</a>
        <a href='/projects/finance' className='tab' role='tab'>Finance</a>
        <a href='/projects/other' className='tab tab-active' role='tab'>Other</a>
      </div>
      <br />
      <div className='w-full'>
        <Project props={{title: 'Chemical engineering simulation', codeLink: 'https://github.com/TristanPagden/ChemicalEngSim', demoLink:''}}></Project>
        <Project props={{title: 'Page rank algorithm', codeLink: 'https://replit.com/@tristanpagden/Page-rank-algorithm', demoLink:'https://replit.com/@tristanpagden/Page-rank-algorithm', image: '/projects/other/page_rank.jpg'}}></Project>
        <Project props={{title: '7 degrees of Kevin Bacon', codeLink: 'https://replit.com/@tristanpagden/7-degrees-of-Kevin-Bacon', demoLink:'https://replit.com/@tristanpagden/7-degrees-of-Kevin-Bacon', image: '/projects/other/degrees.jpeg'}}></Project>
        <Project props={{title: 'Knights and Knaves logic puzzle', codeLink: 'https://replit.com/@tristanpagden/Knights-and-Knaves-logic-puzzle', demoLink:'https://replit.com/@tristanpagden/Knights-and-Knaves-logic-puzzle', image: '/projects/other/knights.jpeg'}}></Project>
        <Project props={{title: 'Sentence parser', codeLink: 'https://replit.com/@tristanpagden/Sentence-parser', demoLink:'https://replit.com/@tristanpagden/Sentence-parser', image: '/projects/other/sentence.png'}}></Project>
        <Project props={{title: 'Gene predictor', codeLink: 'https://replit.com/@tristanpagden/Gene-predictor', demoLink:'https://replit.com/@tristanpagden/Gene-predictor', image: '/projects/other/gene.jpeg'}}></Project>
      </div>
    </div>
  )
}

export default other
