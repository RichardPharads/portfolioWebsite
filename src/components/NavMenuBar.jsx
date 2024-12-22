import React from 'react'
import exis from '../assets/exis.png'
function NavMenuBar() {
  return (
    <div className='w-full h-full bg-black/90 py-8 top-0 left-0 z-50 sm:hidden fixed'>
        <div className='flex justify-between items-start p-5'>
            
            <ul className='font-inter text-2xl  '>
                <li className='hover:underline duration-500 hover:scale-110 hover:my-2 text-white/60 hover:text-white py-2'><a href="">Home</a></li>
                <li className='hover:underline duration-500 hover:scale-110 hover:my-2 text-white/60 hover:text-white  py-2'><a href="">Project</a></li>
                <li className='hover:underline duration-500 hover:scale-110 hover:my-2 text-white/60 hover:text-white  py-2'><a href="">About</a></li>
                <li className='hover:underline duration-500 hover:scale-110 hover:my-2 text-white/60 hover:text-white  py-2'><a href="">Mockups</a></li>
                <li className='hover:underline duration-500 hover:scale-110 hover:my-2 text-white/60 hover:text-white  py-2'><a href="">Skills</a></li>
                <li className='hover:underline duration-500 hover:scale-110 hover:my-2 text-white/60 hover:text-white  py-2'><a href="">Contact</a></li>

                
            </ul>
            <div className='p-1 mix-blend-exclusion bg-white cursor-pointer hover:rotate-180 duration-500 hover:rounded-xl'> 
                <img src={exis} alt="" className='w-8 h-8' />
            </div>
        </div>
    </div>
  )
}

export default NavMenuBar