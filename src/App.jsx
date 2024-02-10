function App() {
  return (
    <div className='bg-neutral-900 h-screen flex justify-center items-center'>
      <div className='bg-neutral-800 w-[350px] px-8 pt-10 pb-8 rounded-xl text-white'>
        <header className='flex flex-col justify-center items-center'>
          <div className='rounded-full overflow-hidden w-20'>
            <img src='../images/avatar-jessica.jpeg' alt='' />
          </div>
          <h1 className='pt-4 text-2xl font-semibold'>Jessica Randall</h1>
          <h2 className='text-sm text-lime-300 font-semibold'>
            London, United Kingdom
          </h2>
        </header>
        <section className='pt-7 text-center'>
          <span className='text-sm'>
            "Front-end developer and avid reader."
          </span>
          <div className='pt-6 flex flex-col gap-3 font-bold'>
            <button className='bg-neutral-700 rounded-lg py-3 hover:bg-lime-300 hover:text-neutral-800 duration-200 active:scale-95'>
              GitHub
            </button>
            <button className='bg-neutral-700 rounded-lg py-3 hover:bg-lime-300 hover:text-neutral-800 duration-200 active:scale-95'>
              Frontend Mentor
            </button>
            <button className='bg-neutral-700 rounded-lg py-3 hover:bg-lime-300 hover:text-neutral-800 duration-200 active:scale-95'>
              Linkedin
            </button>
            <button className='bg-neutral-700 rounded-lg py-3 hover:bg-lime-300 hover:text-neutral-800 duration-200 active:scale-95'>
              Twitter
            </button>
            <button className='bg-neutral-700 rounded-lg py-3 hover:bg-lime-300 hover:text-neutral-800 duration-200 active:scale-95'>
              Instagram
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
