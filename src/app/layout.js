import './globals.css'
import Navbar from 'src/components/Navbar'
import Footer from 'src/components/Footer'
import Head from 'next/head'
import React from 'react'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
          { children }
        <Footer />
      </body>
    </html>
  )
}


