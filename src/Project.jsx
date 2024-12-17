import React from 'react'

const Project = () => {
  return (
    <div className=''>
      <div className='py-20'>
        <h2 className='tracking-heroSpacing font-inter font-semibold text-3xl'>Project</h2>
        <h3 className='text-2xl'>section</h3>
      </div>
      <div className='text-right  my-20'>
        <h4 className='text-3xl font-light'>Programming</h4>
        <h2 className='font-inter text-8xl'>Experience</h2>
      </div>



      <div className='image-container w-full flex gap-10 flex-wrap'>

        <div className='max-w-lg'>
          <div className='max-w-xl h-96 bg-white border my-10'>
             <img  src="" alt="" />
          </div>
          
          <div className='flex justify-between'>
            <h2 className='text-3xl'>BPI - Project SOL</h2>
            <div className='text-right'>
              <p className=''>Locally Deployed Chat Bot And Completely Offline using BPI Data Sets  </p>
              <p className='text-sm font-light py-4 '>oct-nov, 2024</p>
            </div>
          </div>


        </div>
        <div className='max-w-lg'>
          <div className='max-w-2lx h-96  bg-white border my-10'>
             <img  src="" alt="" />
          </div>
          
          <div className='flex justify-between'>
            <h2 className='text-3xl'>CCI Workshop - Weather Application</h2>
            <div className='text-right'>
              <p className=''>Weather App Using React Tailwind.  </p>
              <p className='text-sm font-light py-4 '>October 24-28 2024</p>
            </div>
          </div>
        </div>
        <div className='max-w-lg'>
          <div className='max-w-2lx h-96  bg-white border my-10'>
             <img  src="" alt="" />
          </div>
          
          <div className='flex justify-between'>
            <h2 className='text-3xl'>Robothinks - Project Neon</h2>
            <div className='text-right'>
              <p className=''>AI Chat Bot Assistance For ICCT with TTS, STT and Vision.  </p>
              <p className='text-sm font-light py-4 ' >July - Jan 2024</p>
            </div>
          </div>
        </div>
        <div className='max-w-lg'>
          <div className='max-w-2lx h-96  bg-white border my-10'>
             <img  src="" alt="" />
          </div>
          
          <div className='flex justify-between'>
            <h2 className='text-3xl'>AppCon - Project Project LUNA</h2>
            <div className='text-right'>
              <p className=''>Locally Deployed Chat Bot And Completely Offline using BPI Data Sets  </p>
              <p className='text-sm font-light py-4 '>July - Jan 2024</p>
            </div>
          </div>
        </div>

      </div>


    </div>
  )
}

export default Project