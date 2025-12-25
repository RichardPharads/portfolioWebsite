import React from 'react'
import github from './assets/github.png'
import email from './assets/gmail.png'
import linkedin from './assets/linkedIn.png'

const Contact = React.forwardRef((_, ref) => {
  return (
    <div className='pt-20 relative ' ref={ref}>
      <div className='w-full h-screen bg-inherit flex flex-col px-10 gap-32 justify-center'>
        <div className='font-inter font-bold'>
          <p>Richard Parado</p>
          <p>Antipolo City Rizal, Philippines</p>
          <p>+639639647191</p>
        </div>

        <div className='ml-auto'>
          <h3 className='font-inter font-medium text-md hover:text-red-300 md:text-2xl'>
            Get in <span className='font-inter text-6xl md:text-9xl font-bold hover:font-thin duration-500 ease-in-out cursor-grab hover:text-white z-50'>touch</span>
          </h3>
        </div>
          <div className="w-1/4 h-1/4 bg-gradient-to-r from-purple-500 via-purple-300 to-pink-500 rounded-full blur-[100px] absolute bottom-0 right-0 filter animate-pulse z-0 overflow-hidden"></div>
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
  )
})

export default Contact
