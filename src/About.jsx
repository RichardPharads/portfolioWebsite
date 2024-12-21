import React from 'react'
import cultivateVid from './assets/cultivate.mp4'
const chillGuy = 'https://images.unsplash.com/photo-1731020131444-c60ef92b3e1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2Nnx8fGVufDB8fHx8fA%3D%3D'

const About = () => {
  return (
    <div className='w-full '>
      <div className='py-20'>
        <h2 className='tracking-heroSpacing font-inter font-semibold text-3xl'>About</h2>
        <h3 className='text-2xl'>section</h3>
      </div>

      <div className='flex flex-col sm:flex-row gap-10 '>
        <div className=' w-full h-auto'>
          <img className='w-full' src={chillGuy} alt="" />
        </div>
        <div className='flex items-center justify-center w-full sm:w-1/2 h-auto'>
          <video className='w-full' src={cultivateVid} autoPlay loop></video>
        </div>
      </div>

      <div className='py-10 max-w-3xl'>
        <p className='py-5'> <span className='text-4xl hover:text-red-600 duration-500 cursor-pointer'>I'm Richard</span> - a passionate web developer from the Philippines. I specialize in creating modern, user-friendly web applications and systems. With a strong foundation in JavaScript, Node.js, and experience in tools like OpenAI API and React, I bring innovative ideas to life.When I'm not coding, I enjoy exploring the latest advancements in AI and sharing knowledge through seminars.</p>
       <button className='bg-white text-black py-2 px-10 font-inter'>Learn more</button>
      </div>
    </div>
  )
}

export default About