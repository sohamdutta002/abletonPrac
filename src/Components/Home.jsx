import React from 'react'
import banner from '../assets/banner.avif'

const Home = () => {
  return (
    <div className='bg-white max-w-[1440px]'>
        <header className='main-nav w-[100vw] 2xl:w-full'>
            <nav className='primary flex gap-8 items-center lg:justify-between text-[1.25rem] lg:text-[.9rem] xl:text-[1.25rem] font-semibold pt-6 mb-4 pl-4 pr-4'>
                <div className="flex items-center gap-6">
                    <a href='#' aria-label='Logo'><svg width={60} height={28} viewBox='0 0 45 21'><path d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z"></path></svg></a>
                    <ul className='hidden gap-8 cursor-pointer lg:flex'>
                        <li>Live</li>
                        <li>Push</li>
                        <li>Move</li>
                        <li>Note</li>
                        <li>Link</li>
                        <li>Shop</li>
                        <li>Picks</li>
                        <li>Help</li>
                        <li className='text-[#ff8e6b]'>More+</li>
                    </ul>
                    <p className='lg:hidden'>Menu</p>
                </div>
                <ul className='hidden lg:flex float-right gap-8 items-center mr-12'>
                    <li className='text-[#0000ff]'><a href='#'>Try Live for free</a></li>
                    <li className='text-[1rem]'><a href='#'>Log in or register</a></li>
                </ul>
            </nav>
            <hr className='border-[#ededed] border-1'></hr>
            <nav className='secondary pt-4 pl-[2vw]'>
                <ul className='flex gap-10 text-[.875rem] lg:text-[1rem]'>
                    <li className='text-[#ff8e6b]'><a href='#'>About</a></li>
                    <li><a href='#'>Jobs</a></li>
                    <li><a href='#'>Apprenticeships</a></li>
                </ul>
            </nav>
        </header>
        <div className="page">
            <main>
                <div className="page-about">
                    <header className='w-full h-[94vh] overflow-hidden p-12'>
                        <img src={banner} className='w-full h-full object-cover' />
                    </header>
                </div>
            </main>
        </div>
    </div>
  )
}

export default Home