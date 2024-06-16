import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';
import avatar from '../../assets/avatar.png';
import '../.././App.css'
import { Hero } from "../Hero";

const developerTypes = [
  "Software Developer",
  "Web Developer",
  "Full Stack Developer",
  "Frontend Developer",
];

export const Card = () => {
  const [currentType, setCurrentType] = useState(developerTypes[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentType((prevType) => {
        const currentIndex = developerTypes.indexOf(prevType);
        const nextIndex = (currentIndex + 1) % developerTypes.length;
        return developerTypes[nextIndex];
      });
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const downArrow = document.querySelector(".down-arrow");
      if (window.scrollY >= 90) downArrow.classList.add("hide-down-arrow");
      else downArrow.classList.remove("hide-down-arrow");
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const SOCIAL = [
    {
      id: 2,
      link: 'https://github.com/Prajaktasangolkar',
      icon: <FaGithub />
    },
    {
      id: 3,
      link: 'https://www.linkedin.com/in/prajakta-sangolkar-a75271248/',
      icon: <FaLinkedin />
    }
  ];

  return (
    <div>
      

    <section className=" flex flex-col justify-start items-center p-5 text-center lg:flex-row lg:text-left lg:justify-between">
      
    {/* <div className="flex flex-col justify-center items-center lg:items-start lg:w-1/2"> */}
    <div className="relative flex flex-col items-center justify-center lg:w-1/2 lg:items-end">
      <img
        alt="Hero"
        loading="lazy"
        width="1572"
        height="795"
        decoding="async"
        data-nimg="1"
        className="absolute -top-[98px] -z-10"
        src="/hero.svg"
      />
      <div className="grid grid-cols-1 items-start lg:grid-cols-1 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello <span className="text-pink-500">Prajakta Sangolkar</span>, I'm a
            Professional <span className="text-[#16f2b3]">{currentType}</span>.
          </h1>
        </div>
        
      </div>
        {/* social icons */}
        <div className="flex justify-evenly py-8 lg:py-16 text-3xl w-full ">
        {SOCIAL.map(({ id, link, icon }) => (
          <a href={link} key={id} target='_blank' rel='noopener noreferrer' className='cursor-pointer duration-300 hover:text-rose-600'>
            {icon}
          </a>
        ))}
      </div>
    </div>
      
    
      {/* avatar and resume */}
      <div>
        <img src={avatar} alt="avatar" className='w-60 h-60 md:w-72 md:h-72 object-cover object-top bg-gradient-to-b from-rose-600 rounded-xl pt-5' />
        <a href="/Prajakta_Resume.pdf" download={true} className='flex items-center justify-center mt-10 bg-gradient-to-r from-rose-600 to-teal-500 text-white py-2 rounded-lg'>
          Resume Download 
        </a>
        <div className='flex justify-center mt-10 down-arrow '>
        <FaArrowDown className='text-gray-400 text-2xl animate-bounce' />
        
      </div>
      </div>
      {/* arrow down animation */}
      
    {/* </div> */}
  
   
  </section>
  </div>
  );
};
