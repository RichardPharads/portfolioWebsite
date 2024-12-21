import React from 'react'

const Hero = () => {
  return (
    <div className='w-full'>
      <div>
        <div className='flex flex-col items-center gap-10'>
          <h1 className='font-inter text-5xl sm-text-6xl md:text-7xl lg:text-8xl uppercase leading-heroLine tracking-heroSpacing text-center'>Creativity  <br />must <br /> outdo</h1>
          <button className='bg-white text-black py-2 px-10 w-fit font-inter font-semibold'>Get in touch</button>
        </div>
        
         <h2 className='text-right py-10'>Richard Parado, Web <br /> Developer in the  <br />Philippines </h2>
     
      </div>

      <div className='relative w-full bg-white  ' style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
        <img className='absolute top-0 left-0 w-full h-full object-cover'  alt="Hero" />
      </div>
    </div>
  )
}

export default Hero