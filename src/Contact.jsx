import React from 'react'
import github from './assets/github.png'
import email from './assets/gmail.png'
import linkedin from './assets/linkedIn.png'
const Contact = () => {
  return (
    <div className='pt-20'>
      
        <div className='w-full h-lvh bg-redBg flex flex-col px-10 gap-32 justify-center'>
          <div className='font-inter font-bold '>
            <p>Richard Parado</p>
            <p>Antipolo City Rizal , Philippines</p>
            <p>+639639647191</p>
          </div>

          <div className='ml-auto'>
            <h3 className='font-inter font-medium text-md hover:text-red-300 md:text-2xl'>Get in <span className='font-inter text-6xl md:text-9xl font-bold hover:font-thin duration-500 ease-in-out cursor-grab hover:text-white'>touch</span></h3>
          </div>

          <div className='flex gap-1'>

            <a href=""><span className='w-10 h-10 bg-white grid place-items-center rounded-md'>
              <img className='w-8 h-8' src={email} alt="" />
            </span>
            </a>

            <a href=""><span className='w-10 h-10 bg-white grid place-items-center rounded-md'>
              <img className='w-8 h-8' src={github} alt="" />
            </span>
            </a>  <a href=""><span className='w-10 h-10 bg-white grid place-items-center rounded-md'>
              <img className='w-8 h-8' src={linkedin} alt="" />
            </span>
            </a>
          </div>
        </div>
      </div>
  )
}

export default Contact