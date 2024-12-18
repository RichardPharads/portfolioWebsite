import React from 'react'

const Hero = () => {
  return (
    <div className='min-h-lvh  w-full'>
      <div>
        <div className='flex flex-col items-center gap-10 py-20'>
          <h1 className='font-inter text-7xl md:font-red uppercase leading-heroLine tracking-heroSpacing text-center'>Creativity  <br />must <br /> outdo</h1>
          <button className='bg-white text-black py-2 px-10 w-fit font-inter font-semibold'>Get in touch</button>
        </div>
        
         <h2 className='text-right py-10 px-5'>Richard Parado, Web <br /> Developer in the  <br />Philippines </h2>
     
      </div>

      <div className='max-w-heroImage max-h-heroImage bg-white m-auto'  >
        <img src="" alt="" />
      </div>

    </div>
  )
}

export default Hero