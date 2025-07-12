import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import LatestCollection from '../components/LatestCollection'
import { assets } from '../assets/frontend_assets/assets'

const Home = () => {
  return (
    <div className='px-16'>
      <Hero/>
    <LatestCollection/>
    <div className='ml-5 mb-[20vh] mt-[15vh] '>
      <img src={assets.PolicyDisplay} alt="" />
    </div>
   
    </div>
  )
}

export default Home