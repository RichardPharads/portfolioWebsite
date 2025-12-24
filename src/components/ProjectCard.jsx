import React from 'react'

const ProjectCard = (props) => {
  return (
    <div className='w-full md:w-5/12'>
      <div className='relative w-full bg-white my-10' style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
        <img className='absolute items-center w-full h-full object-cover hover:scale-90 duration-300 cursor-crosshair' src={props.image} alt={props.title} />
      </div>
      
      <div className='flex justify-between gap-10'>
        <h2 className='text-3xl'>{props.title}</h2>
        <div className='text-right'>
          <p className=''>{props.detail}</p>
          <p className='text-sm font-light py-4'>{props.date}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard