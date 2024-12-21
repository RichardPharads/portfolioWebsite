import React from 'react'
import htmlImage from '../assets/html-5.png'
function SkillsCapsul() {
  return (
    <div className='w-32 sm:w-40 h-14 border-gray-800 flex items-center hover:flex-row-reverse duration-700 hover:m-1 justify-between rounded-xl border  ease-in-out hover:border-white
   '>
        <div className='flex justify-center items-center h-full  bg-capsul w-20 rounded-xl'>
            <img src={htmlImage} alt="" className='w-10 h-auto m-4'/>
        </div>
        <div className='w-full text-center'>
            <h3 className='font-inter text-xl'>HTML</h3>
        </div>
    </div>
  )
}

export default SkillsCapsul