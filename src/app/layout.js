import './globals.css'
import Navbar from 'src/components/Navbar'
import Head from 'next/head'
import React from 'react'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <div className="content">
        <Navbar />
        { children }
      </div>
      </body>
    </html>
  )
}


