import React from 'react'
import SkillsCapsul from './components/SkillsCapsul'
import data from './data/skillData.js'


const Skills = () => {

    function createSkillData(data){
      return (
      <SkillsCapsul
        name={data.name}
        image={data.image}
      />
    )
  }

  return (
    <div>
     <div className='py-20'>
        <h2 className='tracking-heroSpacing font-inter font-semibold text-3xl'>Skills</h2>
        <h3 className='text-2xl'>section</h3>
      </div>

      <div>
        <h2 className='font-inter text-4xl mx-20 text-center'>Technical Skills</h2>
        <div className='flex justify-center gap-6 flex-wrap  max-w-5xl m-auto py-20'>
          
          {data.map(createSkillData)}
        </div>
      </div>
      <div>
        <h2 className='font-inter text-4xl mx-20 text-center'>Other Tools</h2>
        <div className='flex justify-center gap-6 flex-wrap  max-w-5xl m-auto py-20'>
          
          {data.map(createSkillData)}
        </div>
      </div>




      <div className=''>
      <h2 className='font-inter text-4xl  text-center '>Certificates</h2>


        <div className=' flex flex-col justify-center items-center sm:flex-row gap-10 py-20'>

          <div className='w-80 grid gap-2'>
            <div className='w-full text-center py-7  bg-custom-gradient rounded-xl'>
              <h2 className='font-instrument font-extralight px-10'><span className=' pr-1'>my</span> <span className='font-inter text-lg'>2024</span> <br /> <span className=' text-3xl capitalize'>achivement</span></h2>
            </div>
            <div>
              <button className='font-inter text-md text-center border rounded-lg w-full'>View Certificate</button>
            </div>
          </div>


       
      
      <div className='max-w-lg'>
        <h2 className='text-2xl '>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores velit quod sit accusantium nihil, quia odio delectus enim sint eaque?</p>
      </div>
      </div>



      </div>
    </div>
  )
}

export default Skills