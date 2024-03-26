import React from 'react'
import { redirect } from 'next/navigation'

const index = () => {
  return (
    redirect('/blog/AI')
  )
}

export default index