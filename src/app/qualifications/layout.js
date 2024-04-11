
export default function RootLayout({ children }) {
  return (
    <>
    <h1 className='mt-3 mb-6 font-bold text-3xl'>Qualifications</h1>
    <div className=''>
      <a href='/projects/AI' className='text-xl bg-slate-600 hover:bg-slate-500 text-white font-bold p-1 mx-1'>Artificial Intelligence</a>
      <a href='/projects/web' className='text-xl bg-slate-600 hover:bg-slate-500 text-white font-bold p-1 mx-1'>Web Development</a>
      <a href='/projects/other' className='text-xl bg-slate-600 hover:bg-slate-500 text-white font-bold p-1 mx-1'>Other</a>
    </div>
    <br />
    <div className=''>{children}</div>
  </>
  )
}