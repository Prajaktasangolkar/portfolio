import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer.jsx';
import HeroSection from './components/common/HeroSection';
import About from './components/About';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import Skills from './components/Skills.jsx';

function App() {
  const [darkMode,setDarkMode]=useState(false);

  return (
    <>
    
    <div className={darkMode && 'dark'}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
    <main className='bg-white dark:bg-gray-900 text-gray-900 dark:text-white'>
         <Hero/>
         <HeroSection/>
         <About/>
         <Education/>
         <Experience/>
         <Skills/>
         <Portfolio/>
         <Services/>
         <Contact/>
         <Footer/>
    </main>
   
    </div>
    </>
  );
}

export default App;

