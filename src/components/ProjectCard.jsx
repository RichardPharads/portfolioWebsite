import React from 'react'
const ProjectCard = (props) => {
  const [hoverState, setHoverState] = React.useState(false);
  const handleMouseEnter = () => {
    setHoverState(true);
  }

  return (
    <div key={props.id} className='w-full md:w-5/12 '>
      <div className='relative w-full bg-purple-500/5 backdrop-blur-lg my-5' onMouseEnter={handleMouseEnter} 
       onMouseLeave={() => setHoverState(false)} style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
        {hoverState && (
          <div className='absolute w-full h-full bg-black/50 z-10 flex items-center justify-center text-white text-2xl'>
            View Project
          </div>
        )}
        <img className={`absolute items-center w-full h-full object-cover ${hoverState ? 'blur-sm scale-90' : ''} duration-300 cursor-crosshair`} src={props.image} alt={props.title} />
      </div>
      
      <div className='flex justify-between gap-4 flex-col lg:flex-row'>
        <h2 className='text-2xl'>{props.title}</h2>
        <div className='lg:text-right'>
          <p className='opacity-50'>{props.detail}</p>
          <p className='text-sm font-light py-4'>{props.date}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard