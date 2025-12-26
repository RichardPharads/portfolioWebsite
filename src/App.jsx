import React , {useRef} from 'react'
import NavBar from "./components/Navbar.jsx"
import Hero from './Hero.jsx'
import About from './About.jsx'
import Project from './Project.jsx'
import Designing from './Designing.jsx'
import Skills from './Skills.jsx'
import Contact from './Contact.jsx'
import MotionWrapper from './components/MotionWrapper'
import { motion } from 'framer-motion'
const App = () => {
  const homeRef = useRef(null)
  const contactRef = useRef(null);
  const projectRef = useRef(null);
  const designRef = useRef(null);
  const skillsRef = useRef(null);
  
const scrollTo= (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className='m-auto max-w-7xl px-5 py-10 relative  ' ref={homeRef}>
        <NavBar
        homeScroll={() => scrollTo(homeRef)}
        projScroll={() => scrollTo(projectRef)}
        desigScroll={() => scrollTo(designRef)}
        skillsScroll={() => scrollTo(skillsRef)}
        contactScroll={() => scrollTo(contactRef)} />
       
        <Hero  contactScroll={() => scrollTo(contactRef)} />
          
        {/* <About/> */}
        <MotionWrapper>
        <Project ref={projectRef} />
        </MotionWrapper>
        <MotionWrapper>
        <Designing ref={designRef}/>
        </MotionWrapper>
        <MotionWrapper>
        <Skills ref={skillsRef}/>
        </MotionWrapper>
        <h2 className='tracking-heroSpacing font-inter font-semibold text-3xl'>Contact</h2>
        <h3 className='text-2xl'>section</h3>

      </div>
      <Contact ref={contactRef}/>
      
    </>
  )
}

export default App