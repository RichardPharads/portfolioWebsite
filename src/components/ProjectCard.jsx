import React from 'react'

const ProjectCard = (props) => {
  return (
    <div className='w-full md:w-5/12'>
          <div className=' h-96 bg-white border my-10'>
             <img  src="" alt="" />
          </div>
          
          <div className='flex justify-between gap-10' >
            <h2 className='text-3xl'>{props.title}</h2>
            <div className='text-right'>
              <p className=''>{props.detail} </p>
              <p className='text-sm font-light py-4 '>{props.date}</p>
            </div>
          </div>
    </div>
  )
}

export default ProjectCard