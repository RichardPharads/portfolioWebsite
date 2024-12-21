import React from 'react'



const Designing = () => {
  return (
    <div className=''>
      <div className='text-right my-20'>
        <h4 className='text-xl font-light md:text-3xl'>Experience of</h4>
        <h2 className='font-inter text-5xl md:text-8xl'>Designing</h2>


        <div className='py-20 flex flex-col gap-10'>
          <marquee behavior="" direction="" className=" duration-500 ease-in-out hover:font-extralight hover:text-gray-500">
            <ul className='flex gap-20 font-inter text-4xl'>
              <li>UI/UX Designer</li>
              <li>Thumnail Design</li>
              <li>Graphic Design</li>
              <li>Web Designer</li>
            </ul>
          </marquee>
          <marquee behavior="" direction="right" className="  duration-500 ease-in-out hover:font-extralight hover:text-gray-500">
            <ul className='flex gap-20 font-inter text-4xl'>
              <li>UI/UX Designer</li>
              <li>Thumnail Design</li>
              <li>Graphic Design</li>
              <li>Web Designer</li>
            </ul>
          </marquee>
        </div>
      </div>

      <div>
        <div className='flex flex-col sm:flex-row gap-10'>
          
        <div className='flex items-center justify-center w-full sm:w-1/2 h-auto'>
              <div className='flex flex-col'>
                <img className='w-full' src="https://images.unsplash.com/photo-1734366965512-0f7ec347ab36?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <div className='px-20 py-10'>
                  <h2 className='text-3xl font-inter font-bold'>Thumnail Design</h2>
                  <h2 className='font-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, et.</h2>
                </div>
              </div>
            </div>

          <div className='flex items-center justify-center w-full sm:w-1/2 h-auto'>
              <div className='flex sm:flex-col flex-col-reverse'>
                <div className='px-20 py-10'>
                  <h2 className='text-3xl font-inter font-bold'>Thumnail Design</h2>
                  <h2 className='font-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, et.</h2>
                </div>
                <img className='w-full' src="https://images.unsplash.com/photo-1517849845537-4d257902454a" alt="" />
              </div>
            </div>
        </div>
      </div>
     
        

    </div>
  )
}

export default Designing