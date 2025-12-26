import React, { forwardRef } from 'react'
import ScrollTracker from './hooks/ViewTracker'
import MotionWrapper from './components/MotionWrapper'
import github from './assets/github.png'
import email from './assets/gmail.png'
import linkedin from './assets/linkedIn.png'
const Hero = forwardRef(({_ }, ref) => {
  const {scrollY} = ScrollTracker()
  return (
    <div className='w-full mb-10 justify-between flex lg:flex-row flex-col-reverse' ref={ref}>
      <div className="w-32 h-full bg-gradient-to-r from-purple-800 via-blue-500 to-pink-500 rounded-full blur-3xl absolute top-60 left-0 -z-10 filter animate-pulse "></div>

      <div className='flex-1'>
        <div className='flex flex-col  gap-10 '>
          <MotionWrapper>
          <h1 className='font-inter text-5xl sm-text-6xl md:text-7xl lg:text-8xl uppercase leading-heroLine tracking-heroSpacing text-left'>i'm  <br />Software <br /> Engineer </h1>
          <button className='bg-white text-black py-2 px-10 w-fit font-inter font-semibold my-4' > Get in touch</button>
          <h2 className='text-right lg:text-left py-10'>Richard Parado, Web <br /> Developer in the  <br />Philippines </h2>

          </MotionWrapper>
        </div>
        <div className="">
         <div className='flex gap-1'>
                   <a href="https://mail.google.com/mail/u/2/#inbox?compose=VpCqJSBBDrQRcxKcXNpTHqNKBMGHbsGNPhMdLzSVNFmqTtWJKqgCgcspcLdkkjQlszmXtRb" target='_blank' rel="noopener noreferrer">
                     <span className='w-10 h-10 bg-white grid place-items-center rounded-md'>
                       <img className='w-8 h-8' src={email} alt="Email icon" />
                     </span>
                   </a>
         
                   <a href="https://github.com/RichardPharads" target='_blank' rel="noopener noreferrer">
                     <span className='w-10 h-10 bg-white grid place-items-center rounded-md'>
                       <img className='w-8 h-8' src={github} alt="GitHub icon" />
                     </span>
                   </a>
         
                   <a href="https://www.linkedin.com/in/richard-parado-143502274/" target='_blank' rel="noopener noreferrer">
                     <span className='w-10 h-10 bg-white grid place-items-center rounded-md'>
                       <img className='w-8 h-8' src={linkedin} alt="LinkedIn icon" />
                     </span>
                   </a>
                 </div>
         </div>
      </div>

      <div className='relative flex-1'>
        <img className='w-full lg:[w-900px] h-fit items-center z-10'  src="https://vfdmmynf7t1tehvp.public.blob.vercel-storage.com/Images/wala%20lang.png" alt="Richard Image" />
        <img className='w-[900px] h-fit items-center blur-2xl  absolute top-0 z-0 mix-blend-hue '  src="https://vfdmmynf7t1tehvp.public.blob.vercel-storage.com/Images/wala%20lang.png" alt="" />

      </div>
      
    </div>
  )
})

export default Hero