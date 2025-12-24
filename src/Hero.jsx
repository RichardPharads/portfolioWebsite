import React, { forwardRef } from 'react'
import ScrollTracker from './hooks/ViewTracker'
const Hero = forwardRef(({contactScroll }, ref) => {
  const {scrollY} = ScrollTracker()
  return (
    <div className='w-full' ref={ref}>
      <div>
        <div className='flex flex-col  gap-10'>
          <h1 className='font-inter text-5xl sm-text-6xl md:text-7xl lg:text-8xl uppercase leading-heroLine tracking-heroSpacing text-left'>i'm <span className='text-sm text-neutral-900'>Not yet please hire me</span> <br />Software <br /> Engineer </h1>
          <button className='bg-white text-black py-2 px-10 w-fit font-inter font-semibold' onClick={contactScroll}> Get in touch</button>
        </div>
          <div className="w-32 h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-3xl absolute top-60 left-0 -z-10 filter animate-hue-spin animate-pulse"></div>
         <h2 className='text-right py-10'>Richard Parado, Web <br /> Developer in the  <br />Philippines </h2>
      </div>

      
    </div>
  )
})

export default Hero