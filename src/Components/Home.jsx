import React from 'react'
import Navbar from './Navbar'
import Main from './Main'
import Footer from './Footer'
import "./home.css"
const Home = () => {
  return (
    <div className='bg-white max-w-[1600px]'>
        <Navbar/>
        <Main/>
        <Footer/>
    </div>
  )
}

export default Home