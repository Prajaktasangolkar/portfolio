// @flow strict


import { IoStar } from "react-icons/io5";

export const Footer=()=> {
  return (
    <div className="relative border-t  border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            © Developer Portfolio by 
            <a target="_blank" href="https://www.linkedin.com/in/prajakta-sangolkar-a75271248/"   rel='noopener noreferrer' className="text-[#16f2b3]">Prajakta Sangolkar</a>
          </p>
          <div className="flex items-center gap-5">
            <a
              target="_blank"
              href="https://github.com/Prajaktasangolkar"
               rel='noopener noreferrer'
              className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
            >
              <IoStar  />
              <span className="text-[#16f2b3]">Star</span>
            </a>
            
          </div>
        </div>
      </div>
    </div >
  );
};

