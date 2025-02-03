import React from 'react'

const Hero = () => {
  return (
    <div className='relative h-dvh w-screen overflow-x-hidden'>
        <div id="video-frame" 
        className="relative 
                   z-10 
                   h-dvh 
                   w-screen 
                   overflow-x-hidden 
                   rounded-lg 
                   bg-blue">
            <div className='mask-clip-path absolute-center absolute z-50 size-64
                cursor-pointer overflow-x-hidden rounded-lg
            '>
                MiniVideoPlayer
            </div>
        </div>
    </div>
  )
}

export default Hero