import React from 'react'

const About = () => {
  return (
    <div className='w-full '>
      <div className='py-20'>
        <h2 className='tracking-heroSpacing font-inter font-semibold text-3xl'>About</h2>
        <h3 className='text-2xl'>section</h3>
      </div>
      <div className='image-container w-full  gap-6 flex flex-col sm:flex-row'>
          <div className='w-full sm:w-6/12 md:w-8/12 bg-white  h-96 md:h-heroImage'>
            <img src="" alt="" />
          </div>
          <div className='w-full sm:w-6/12 md:w-4/12 bg-white h-heroImage'>
            <img src="" alt="" />
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