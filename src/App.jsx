import React , {useRef} from 'react'
import NavBar from "./components/Navbar.jsx"
import Hero from './Hero.jsx'
import About from './About.jsx'
import Project from './Project.jsx'
import Designing from './Designing.jsx'
import Skills from './Skills.jsx'
import Contact from './Contact.jsx'


const App = () => {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className='m-auto max-w-7xl px-5 py-10 relative'>
        
        <NavBar/>
        <Hero scrollToContact={scrollToContact}/>
        <About/>
        <Project/>
        <Designing/>
        <Skills/>
        <h2 className='tracking-heroSpacing font-inter font-semibold text-3xl'>Contact</h2>
        <h3 className='text-2xl'>section</h3>
      </div>
      <Contact ref={contactRef}/>
    </>
  )
}

export default App