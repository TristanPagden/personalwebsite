import React from 'react'
import QualLink from '@/components/QualLink'
import BlogLink from '@/components/BlogLink'

const AI = () => {
  return (
    <div className='w-full'>
      <div role="tablist" className="tabs tabs-lifted tabs-lg">
        <a href='/qualifications/AI' className='tab' role='tab'>Artificial Intelligence</a>
        <a href='/qualifications/GCSEs' className='tab' role='tab'>GCSEs</a>
        <a href='/qualifications/other' className='tab tab-active' role='tab'>Other</a>
      </div>
      <QualLink props={{title: "NPLQ", description: 'NPLQ lifegaurding qualification', link: ''}} />
      <QualLink props={{title: "Guitar", description: 'Grade 5', link: ''}} />
    </div>
  )
}

export default AI