import React from 'react'
import { redirect } from 'next/navigation'

const index = () => {
  return (
    redirect('/projects/AI')
  )
}

export default index