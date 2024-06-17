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
  

  return (
    <>
    
    <div >
      <Header />
    <main className='  bg-gray-900  dark:bg-gray-900'>
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

