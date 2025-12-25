import React from 'react'
import image1 from '../src/assets/Design 1.png'
import image2 from '../src/assets/Design 2 16_9.png'
import { forwardRef } from 'react'

const Designing = forwardRef((props, ref) => {
  return (
    <div className='className="overflow-x-hidden"' ref={ref}>
      <div className='text-right my-20'>
        <h4 className='text-xl font-light md:text-3xl'>Experience of</h4>
        <h2 className='font-inter text-5xl md:text-8xl'>Designing</h2>


        <div className='py-10 flex flex-col gap-10 border-y my-10'>
          <marquee behavior="" direction="" className=" duration-500 ease-in-out hover:font-extralight hover:text-gray-500">
            <ul className='flex gap-20 font-inter text-4xl'>
              <li>UI/UX Designer</li>
              <li>Thumnail Design</li>
              <li>Graphic Design</li>
              <li>Web Designer</li>
            </ul>
          </marquee>
          <marquee behavior="" direction="right" className="  duration-500 ease-in-out hover:font-extralight hover:text-gray-500">
            <ul className='flex gap-20 font-inter text-4xl'>
              <li>UI/UX Designer</li>
              <li>Thumnail Design</li>
              <li>Graphic Design</li>
              <li>Web Designer</li>
            </ul>
          </marquee>
        </div>
      </div>

      <div>
        <div className='flex flex-col sm:flex-row lg:gap-10'>
          
        <div className='flex items-center justify-center w-full sm:w-1/2 h-auto left-500'>
              <div className='flex flex-col'>
                <img className='w-full hover:scale-90 duration-300 cursor-crosshair hover:blur-sm   hover:opacity-80 ' src={image2} alt="" />
                <div className='lg:px-20 w-10/12 py-10'>
                  <h2 className='text-3xl font-inter font-bold'>Ecommerce Design</h2>
                  <h2 className='font-light'>Modern and Elegant Design aim for young stylish people.</h2>
                </div>
              </div>
            </div>

          <div className='flex items-center justify-center w-full sm:w-1/2 h-auto'>
              <div className='flex sm:flex-col flex-col-reverse'>
                <div className='lg:px-20 py-10 w-10/12'>
                  <h2 className='text-3xl font-inter font-bold'>Modern Ai Landing Page Design</h2>
                  <h2 className='font-light'>Artifical Intelligence Modern mockup design best for Startup landing.</h2>
                </div>
                <div className=' relative'>
                  <img className='w-full hover:scale-90 duration-300 cursor-crosshair hover:blur-sm   hover:opacity-80 ' src={image1} alt="" />
                </div>
              </div>
            </div>
        </div>
      </div>
     
        

    </div>
  )
})

export default Designing