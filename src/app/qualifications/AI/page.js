import React from 'react'
import QualLink from '@/components/QualLink'
import BlogLink from '@/components/BlogLink'

const AI = () => {
  return (
    <div className='w-full'>
      <QualLink props={{title: "Harvards CS50AI", description: 'Harvards CS50AI course', link: 'https://www.edx.org/learn/artificial-intelligence/harvard-university-cs50-s-introduction-to-artificial-intelligence-with-python'}} />
      <QualLink props={{title: "Kaggle Intro to Machine Learning",  description: 'A course on machine learning by Kaggle', link: 'https://www.edx.org/learn/artificial-intelligence/harvard-university-cs50-s-introduction-to-artificial-intelligence-with-python'}} />
      <QualLink props={{title: "Kaggle Intermediate Machine learning",  description: 'A course on intermediate machine learning by Kaggle', link: 'https://www.edx.org/learn/artificial-intelligence/harvard-university-cs50-s-introduction-to-artificial-intelligence-with-python'}} />
      <QualLink props={{title: "Kaggle Feature engineering", description: 'A course on feature engineering by Kaggle', link: 'https://www.edx.org/learn/artificial-intelligence/harvard-university-cs50-s-introduction-to-artificial-intelligence-with-python'}} />
      <QualLink props={{title: "Kaggle Intro to Deep Learning",  description: 'A course on deep learning by Kaggle', link: 'https://www.edx.org/learn/artificial-intelligence/harvard-university-cs50-s-introduction-to-artificial-intelligence-with-python'}} />
      <QualLink props={{title: "Kaggle Intro to Reinforcement learning", description: 'A course on reinforcement learning by Kaggle', link: 'https://www.edx.org/learn/artificial-intelligence/harvard-university-cs50-s-introduction-to-artificial-intelligence-with-python'}} />
    </div>
  )
}

export default AI