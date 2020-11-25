import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Skills from './Skills/Skills';
import Certifications from './Certifications/Certifications';

import { PortfolioProvider } from '../context/context';
import {
  heroData,
  aboutData,
  projectsData,
  contactData,
  footerData,
  skillsData,
  certificationData,
} from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
    setSkills([...skillsData]);
    setCertifications([...certificationData]);
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer, skills, certifications }}>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
