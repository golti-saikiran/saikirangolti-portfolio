import React, { useEffect } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import ContactMe from './components/ContactMe'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Projects from './components/Projects'



const App = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <NavBar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <AboutMe />
      <ContactMe />
      <Footer />
    </>
  )
}

export default App
