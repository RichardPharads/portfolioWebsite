import React from 'react'
import NavBar from "./components/Navbar.jsx"
import Hero from './Hero.jsx'
import About from './About.jsx'
import Project from './Project.jsx'
import Designing from './Designing.jsx'
import Skills from './Skills.jsx'
import Contact from './Contact.jsx'
import Footer from './components/Footer.jsx'
const App = () => {
  return (
    <div className='m-auto max-w-7xl '>
      <NavBar/>

      <Hero/>
      <About/>
      <Project/>
      <Designing/>
      <Skills/>
{/*   
  

  
 
     
      <Contact/>
      <Footer/> */}
 
    </div>
  )
}

export default App