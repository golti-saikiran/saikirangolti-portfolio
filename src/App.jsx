import React, { useEffect, useState } from 'react'
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

const calculateExperience = () => {
  const startDate = new Date(2022, 3, 4);
  const today = new Date();
  let years = today.getFullYear() - startDate.getFullYear();
  let months = today.getMonth() - startDate.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  if (years > 0 && months > 0) return `${years} years ${months} months`;
  if (years > 0) return `${years} years`;
  return `${months} months`;
};

const App = () => {
  const [totalExperience] = useState(() => calculateExperience());

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <NavBar />
      <Hero experience={totalExperience} />
      <Skills />
      <Projects />
      <Experience experience={totalExperience} />
      <AboutMe experience={totalExperience} />
      <ContactMe />
      <Footer />
    </>
  )
}

export default App
