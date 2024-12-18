import React from 'react'

const Navbar = () => {
  return (
    <div className=' border border-red-600 relative h-36'>
      <div className='flex justify-between items-center w-full h-36 mix-blend-exclusion z-50 top-0 left-0 fixed px-10 border'>  
        <div className='font-inter font-bold text-lg'>Cultivate</div>
        <div className='flex gap-20 font-inter'>
          <ul className='max-w-xs hidden sm:flex'>
            <div className='pr-10'>
              <li><a href="">Home</a></li>
              <li><a href="">Project</a></li>
            </div>
            <div className='pr-10'>
              <li><a href="">About</a></li>
              <li><a href="">Mockups</a></li>
            </div>
            <div className='pr-10'>
              <li><a href="">Skills</a></li>
              <li><a href="">Contact</a></li>
            </div>
          </ul>

          <div>
            <button className='bg-white text-black py-3 px-8 font-inter font-semibold hidden sm:flex '>Request Design</button>
          </div>

      </div>
      </div>
    </div>
  )
}

export default Navbar