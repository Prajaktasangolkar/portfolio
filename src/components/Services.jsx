import React from "react";
import { Section } from "./common/Section";
import p1 from "../assets/certificate_/python.jpeg";
import p2 from "../assets/certificate_/dsa.jpeg";
import p3 from "../assets/certificate_/frontend.png";
import p4 from "../assets/certificate_/fullstack.jpeg";
export const Services = () => {
  const services = [
    {
      id: 1,
      image: p1,
      title: "Introduction to Python ",
      link:'https://certificate.codingninjas.com/view/84ea44d9939de001'
    },
    {
      id: 2,
      image: p2,
      title: "Data Structure and Algorithm",
      link:'https://certificate.codingninjas.com/view/3801cac336123545'
    },
    {
      id: 3,
      image: p3,
      title: "Frontend Developement",
      link:'https://www.coursera.org/learn/introduction-to-front-end-development/home/week/1?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta'
    },
    {
      id: 4,
      image: p4,
      title: "Full Stack Developement",
      link:'https://trainings.internshala.com/view_certificate/2B881BD6-8619-8472-174E-8F83011ACD4A/fmehu6vkt34/'
    },
  ];
  return (
    <Section id="certificate">
      <div className="flex justify-center my-5 lg:py-8" id="certificate">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Certificates
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

    

      <div className="grid gap-10 lg:grid-cols-2">
        {services.map(({ id, image, title,link }) => (
          // eslint-disable-next-line react/jsx-key
          <div
            key={id}
            className="flex flex-col items-center justify-center p-5 shadow-lg dark:shadow-gray-900 rounded-xl duration-300 ease-in-out hover:scale-110 relative group  "
          >
            <img
              src={image}
              alt={title}
              className="w-60 h-36 md:h-44 object-contain"
            />
              <div className="overlay  items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500   ">
            
            <a
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white"
              href={link}
                 target='_blank'
                 rel='noopener noreferrer'
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                className="h-10 w-10 text-[#ADB7BE]  absolute top-1/2 left-1/2 trasnform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:white"
              >
                <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path>
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </a>
          </div>
       
            <h5 className="text-xl font-xl font-semibold mb-2 top-6">{title}</h5>
      
          </div>
        ))}
      </div>
    </Section>
  );
};
