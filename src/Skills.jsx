import React from 'react'
import SkillsCapsul from './components/SkillsCapsul'
import data from './data/skillData.js'
import pdf from '../public/mongodb_tutorial.pdf'
import { forwardRef } from 'react'
import eye from '../src/assets/eye.png'
const Skills = forwardRef((props, ref) => {

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = {pdf}; // Replace with the actual path to your PDF
    link.download = "Certificates.pdf"; // Optional: name of the downloaded file
    link.click();
    }
    function createSkillData(data){
      return (
      <SkillsCapsul
        name={data.name}
        image={data.image}
        key={data.id}
      />
    )
  }

  return (
    <div ref={ref} className='className="overflow-x-hidden"'>
     <div className='py-20'>
        <h2 className='tracking-heroSpacing font-inter font-semibold text-3xl'>Skills</h2>
        <h3 className='text-2xl'>section</h3>
      </div>

      <div>
        <h2 className='font-inter text-4xl mx-20 text-center'>Technical Skills</h2>
        <div className='flex justify-center gap-6 flex-wrap  max-w-5xl m-auto py-20 group'>
          
          {data.map(createSkillData)}
        </div>
      </div>
    




      <div className=''>
      <h2 className='font-inter text-4xl  text-center '>Certificates</h2>


        <div className=' flex flex-col justify-center  sm:flex-row gap-10 py-20'>

         <div className="w-80 grid gap-2">
  <div
    className="
      w-full
      text-center
      py-7
      rounded-xl
      border border-gray-800
      bg-custom-gradient
      bg-white/10
      backdrop-blur-md
      shadow-lg
      mix-blend-color-dodge
      duration-500
     
    "
  >
    <h2 className="font-instrument font-extralight px-10 text-white">
      <span className="pr-1">my</span>
      <span className="font-inter text-lg">2024</span>
      <br />
      <span className="text-3xl capitalize">achievement</span>
    </h2>
  </div>
</div>


       
      
      <div className='max-w-lg flex flex-col bewtween h-[100px]'>
        <h2 className='text-2xl font-light '>Showcasing my commitment to continuous learning and professional growth:
           <div className='flex gap-2 py-5'>
              <button onClick={() => {
                window.open('https://vfdmmynf7t1tehvp.public.blob.vercel-storage.com/PDF%20Filesa/Certificates.pdf', '_blank', 'noopener,noreferrer');
              }} className='text-sm flex items-center gap-2 bg-neutral-900 border border-neutral-600 px-5 py-2 rounded-lg hover:bg-white/10 duration-500'>
                <img src={eye} className='w-[20px] ' alt="eye icon" />
                Certificates 
              </button>

              <button onClick={() => {
                window.open('https://vfdmmynf7t1tehvp.public.blob.vercel-storage.com/PDF%20Filesa/RichardCandidoParadoResume2025.pdf', '_blank', 'noopener,noreferrer');
              }} className='text-sm flex items-center gap-2 bg-neutral-900 border border-neutral-600 px-5 py-2 rounded-lg hover:bg-white/10 duration-500'>
                <img src={eye} className='w-[20px] ' alt="eye icon" />
                Resume 
              </button>





              
            </div>
      </h2>

      </div>
      </div>



      </div>
    </div>
  )
})

export default Skills