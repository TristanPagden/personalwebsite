import React from 'react'
import Project from '@/components/Project'

const AI = () => {
  return (
    <div className=''>
      <div role="tablist" className="tabs tabs-lifted tabs-lg">
        <a href='/projects/AI' className='tab tab-active' role='tab'>Artificial Intelligence</a>
        <a href='/projects/web' className='tab' role='tab'>Web Development</a>
        <a href='/projects/games' className='tab' role='tab'>Games</a>
        <a href='/projects/finance' className='tab' role='tab'>Finance</a>
        <a href='/projects/other' className='tab' role='tab'>Other</a>
      </div>
      <br />
      <div className='w-full grid-cols-3'>
        <Project props={{title: 'Shopping classifier nearest neighbours', codeLink: 'https://replit.com/@tristanpagden/Shopping-classifier-nearest-neighbours', demoLink:'https://replit.com/@tristanpagden/Shopping-classifier-nearest-neighbours', image: '/projects/AI/nearest_neighbours.jpg'}}></Project>
        <Project props={{title: 'Road sign identifer with tensorflow', codeLink: 'https://replit.com/@tristanpagden/Road-sign-identifier-with-tensorflow', demoLink:'https://replit.com/@tristanpagden/Road-sign-identifier-with-tensorflow', image: '/projects/AI/road_signs.jpg'}}></Project>
        <Project props={{title: 'Natural language prediction analysis', codeLink: 'https://replit.com/@tristanpagden/Natural-language-prediction-analysis', demoLink:'https://replit.com/@tristanpagden/Natural-language-prediction-analysis', image: '/projects/AI/language_pred.jpg'}}></Project>
        <Project props={{title: 'Bird image identifier with tensorflow', codeLink: 'https://www.kaggle.com/code/tristanpagden/birds-identifier', demoLink:'https://www.kaggle.com/code/tristanpagden/birds-identifier', image: '/projects/AI/bird_identifier.jpg'}}></Project>
      </div>
    </div>
  )
}

export default AI