export default function RootLayout({ children }) {
    return (
      <>
        <h1 className='mt-5 mb-6 font-bold text-3xl'>Projects</h1>
        <div className=''>{children}</div>
      </>
    )
  }