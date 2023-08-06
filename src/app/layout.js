'use client'

import './globals.css'
import Navbar from 'src/components/Navbar'
import Footer from 'src/components/Footer'
import Head from 'next/head'
import React from 'react'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/favicon.ico' />
        <title>tristanPagden</title>
      </head>
      <body>
        <Navbar />
          { children }
        <Footer />
      </body>
    </html>
  )
}

