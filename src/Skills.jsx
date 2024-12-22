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
        <h2 className='font-inter text-4xl mx-20'>Technical Skills</h2>
        <div className='flex justify-center gap-6 flex-wrap  max-w-5xl m-auto py-20'>
          
          {data.map(createSkillData)}
        </div>
      </div>
      <div>
        <h2 className='font-inter text-4xl mx-20'>Other Tools</h2>
        <div className='flex justify-center gap-6 flex-wrap  max-w-5xl m-auto py-20'>
          
          {data.map(createSkillData)}
        </div>
      </div>




    </div>
  )
}

export default Skills