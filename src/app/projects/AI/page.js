import React from 'react'
import Project from '@/components/Project'

const AI = () => {
  return (
    <div className=''>
      <div className='w-full'>
        <Project props={{title: 'Bird image identifier with tensorflow', codeLink: 'https://www.kaggle.com/code/tristanpagden/birds-identifier', demoLink:'https://www.kaggle.com/code/tristanpagden/birds-identifier', image: '/projects/AI/bird_identifier.jpg'}}></Project>
        <Project props={{title: 'Shopping classifier nearest neighbours', codeLink: 'https://replit.com/@tristanpagden/Shopping-classifier-nearest-neighbours', demoLink:'https://replit.com/@tristanpagden/Shopping-classifier-nearest-neighbours', image: '/projects/AI/nearest_neighbours.jpg'}}></Project>
        <Project props={{title: 'Road sign identifer with tensorflow', codeLink: 'https://replit.com/@tristanpagden/Road-sign-identifier-with-tensorflow', demoLink:'https://replit.com/@tristanpagden/Road-sign-identifier-with-tensorflow', image: '/projects/AI/road_signs.jpg'}}></Project>
        <Project props={{title: 'Natural language prediction analysis', codeLink: 'https://replit.com/@tristanpagden/Natural-language-prediction-analysis', demoLink:'https://replit.com/@tristanpagden/Natural-language-prediction-analysis', image: '/projects/AI/language_pred.jpg'}}></Project>
      </div>
    </div>
  )
}

export default AI