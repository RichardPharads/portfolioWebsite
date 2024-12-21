import React from 'react'
import ProjectCard from './components/ProjectCard.jsx'
import projectDetails from './projectData.js'

const Project = () => {

  function createProjectCard(data){
   return  <ProjectCard 
   key={data.id}
   title={data.title}
   detail={data.detail}
   date={data.date}
   image={data.image} />
   
  }

 
  
  return (
    <div className='m-auto'>
      <div className='py-20'>
        <h2 className='tracking-heroSpacing font-inter font-semibold text-3xl'>Project</h2>
        <h3 className='text-2xl'>section</h3>
      </div>
      <div className='text-right  my-20'>
        <h4 className='text-xl font-light md:text-3xl'>Programming</h4>
        <h2 className='font-inter text-5xl md:text-8xl'>Experience</h2>
      </div>



      <div className='w-full flex gap-10 justify-center flex-wrap'>

        {projectDetails.map(createProjectCard)}
       
        
      </div>


    </div>
  )
}

export default Project