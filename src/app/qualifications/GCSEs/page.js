import React from 'react'
import QualLink from '@/components/QualLink'
import BlogLink from '@/components/BlogLink'

const AI = () => {
  return (
    <div className='w-full'>
      <div role="tablist" className="tabs tabs-lifted tabs-lg">
        <a href='/qualifications/AI' className='tab' role='tab'>Artificial Intelligence</a>
        <a href='/qualifications/GCSEs' className='tab tab-active' role='tab'>GCSEs</a>
        <a href='/qualifications/other' className='tab' role='tab'>Other</a>
      </div>
      <QualLink props={{title: "GCSE Maths", description: 'Grade 9', link: ''}} />
      <QualLink props={{title: "GCSE Further Maths", description: 'Grade 9', link: ''}} />
      <QualLink props={{title: "GCSE Physics", description: 'Grade 9', link: ''}} />
      <QualLink props={{title: "GCSE Chemistry", description: 'Grade 9', link: ''}} />
      <QualLink props={{title: "GCSE Biology", description: 'Grade 9', link: ''}} />
      <QualLink props={{title: "GCSE Geography", description: 'Grade 9', link: ''}} />
      <QualLink props={{title: "GCSE Computer science", description: 'Grade 8', link: ''}} />
      <QualLink props={{title: "GCSE Design and technology", description: 'Grade 8', link: ''}} />
      <QualLink props={{title: "GCSE English language", description: 'Grade 8', link: ''}} />
      <QualLink props={{title: "GCSE Religious studies", description: 'Grade 8', link: ''}} />
      <QualLink props={{title: "GCSE English literature", description: 'Grade 7', link: ''}} />
      <QualLink props={{title: "GCSE Spanish", description: 'Grade 7', link: ''}} />
    </div>
  )
}

export default AI