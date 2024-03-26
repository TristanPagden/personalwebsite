export default function RootLayout({ children }) {
    return (
      <>
        <h1 className='pl-2 mt-3 mb-6 font-bold text-3xl'>Projects</h1>
        <div className='pl-1'>
          <a href='/projects/AI' className='text-xl bg-slate-600 hover:bg-slate-500 text-white font-bold p-1 mx-1'>Artificial Intelligence</a>
          <a href='/projects/web' className='text-xl bg-slate-600 hover:bg-slate-500 text-white font-bold p-1 mx-1'>Web Development</a>
          <a href='/projects/games' className='text-xl bg-slate-600 hover:bg-slate-500 text-white font-bold p-1 mx-1'>Games</a>
          <a href='/projects/finance' className='text-xl bg-slate-600 hover:bg-slate-500 text-white font-bold p-1 mx-1'>Finance</a>
          <a href='/projects/other' className='text-xl bg-slate-600 hover:bg-slate-500 text-white font-bold p-1 mx-1'>Other</a>
        </div>
        <br />
        <div className=''>{children}</div>
      </>
    )
  }