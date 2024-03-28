import React from 'react'
import Project from '@/components/Project'

const other = () => {
  return (
    <div className=''>
      <div className='w-full'>
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