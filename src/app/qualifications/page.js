import React from 'react'
import { redirect } from 'next/navigation'

const index = () => {
  return (
    redirect('/qualifications/AI')
  )
}

export default index