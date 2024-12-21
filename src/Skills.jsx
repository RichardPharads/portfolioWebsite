import React from 'react'
import SkillsCapsul from './components/SkillsCapsul'

const Skills = () => {
  return (
    <div>
     <div className='py-20'>
        <h2 className='tracking-heroSpacing font-inter font-semibold text-3xl'>Skills</h2>
        <h3 className='text-2xl'>section</h3>
      </div>

      <div>
        <h2 className='font-inter text-4xl mx-20'>Technical Skills</h2>
        <div className='flex justify-center gap-6 flex-wrap  max-w-5xl m-auto py-20'>
          <SkillsCapsul/>
          <SkillsCapsul/>
          <SkillsCapsul/>
          <SkillsCapsul/>
          <SkillsCapsul/>
          <SkillsCapsul/>
          <SkillsCapsul/>
          <SkillsCapsul/>
          <SkillsCapsul/>
          <SkillsCapsul/>
          <SkillsCapsul/>
          <SkillsCapsul/>
          <SkillsCapsul/>
          <SkillsCapsul/>
          <SkillsCapsul/>
        </div>
      </div>
    </div>
  )
}

export default Skills