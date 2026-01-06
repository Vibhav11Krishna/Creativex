import React from 'react'
import Hero from '../../Component/Home/Hero/Hero'
import About from '../../Component/Home/About/About'
import Features from '../../Component/Home/Features/Features'
import Solution from '../../Component/Home/Solution/Solution'
import Contact from '../../Component/Home/Contact/Contact'
import Team from '../../Component/Home/Team/Team'
 import Footer from "../../Component/Footer/Footer";

const Home = () => {
  return (
    <div className='bg-gray-50'>
      <Hero/>
      <About/>
      <Features/>
      <Solution/>
      <Team/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home

// bg-[#F2F2F2]