// @flow strict

import { personalData } from "./persondata";
import avatar from "../assets/avatar.png";


function About() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
       <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            About
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#4af0c3] text-xl uppercase">
            Who I am?
          </p>
          <p className=" text-gray-500 text-sm lg:text-lg  font-bold">
            {personalData.description}
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <img
            src={avatar}
            width={280}
            height={280}
            alt="Prajakta Sangolkar"
            className='w-60 h-60 md:w-72 md:h-72 object-cover object-top bg-gradient-to-b from-rose-600 rounded-xl pt-5'
            />
        </div>
      </div>
    </div>
  );
};

export default About;