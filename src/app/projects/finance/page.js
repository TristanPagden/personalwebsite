import React from 'react'
import Project from '@/components/Project'

const finance = () => {
  return (
    <div className=''>
      <div className='w-full'>
        <Project props={{title: 'Pivot point trading strategy', codeLink: 'https://github.com/TristanPagden/alpaca-pivot-points', demoLink:'https://replit.com/@tristanpagden/alpaca-pivot-points', image: '/projects/finance/pivot_points.jpeg'}}></Project>
        <Project props={{title: 'AI trading strategies with Pytorch', codeLink: 'https://github.com/TristanPagden/aplaca-ai-strategies', demoLink:'https://replit.com/@tristanpagden/aplaca-ai-strategies', image: '/projects/finance/ai_alpaca.jpg'}}></Project>
      </div>
    </div>
  )
}

export default finance