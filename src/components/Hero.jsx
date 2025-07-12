import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Hero = () => {
  return (
    <div className='border-1 flex h-[65vh] '>
        <div className='w-[40%] bg-zinc-300 overflow-hidden h-full'>
          <img className='h-full w-full object-cover' src={assets.LatestCollection} alt="" />
        </div>
        <div className='w-[60%] h-full overflow-hidden '>
           <img className='h-full w-full object-cover' src={assets.hero_img} alt="" />
        </div>


    </div>
  )
}

export default Hero