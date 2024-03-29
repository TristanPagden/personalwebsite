
import './globals.css'
import Sidebar from '@/components/Sidebar'

export const metadata = {
  title: 'Tristan Pagden',
  description: 'Tristan Pagdens personal website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='w-full'>
        <Sidebar />
        <div className='top-0 h-full inline-block w-full pl-72 pr-8'>
          {children}
        </div>
      </body>
    </html>
  )
}
