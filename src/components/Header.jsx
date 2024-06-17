import React from 'react'
import { MdNightsStay, MdWbSunny } from 'react-icons/md'

export const Header = () => {
  return (
    <header className='bg-[#0B0F33] dark:bg-gray-900'>
      <nav className='flex justify-between items-center p-5'>
        <div className="flex flex-shrink-0 items-center">
          <a className="text-[#16f2b3] text-3xl font-bold" href="/">
           Prajakta Sangolkar
          </a>
        </div>
        <ul
          className="mt-4 flex h-screen max-h-0 w-full flex-col items-start  text-3xl opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100 font-bold   "
          id="navbar-default"
        >
          <li>
            <a
              className="block px-4 py-2 no-underline outline-none hover:no-underline "
              href="/#about"
            >
              <div className={`text-sm text-white transition-colors duration-300 hover:text-pink-600`}>
                ABOUT
              </div>
            </a>
          </li>
          <li>
            <a
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#experience"
            >
              <div className={`text-sm  text-white transition-colors duration-300 hover:text-pink-600`}>
                EXPERIENCE
              </div>
            </a>
          </li>
          <li>
            <a
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#skills"
            >
              <div className={`text-sm  text-white transition-colors duration-300 hover:text-pink-600`}>
                SKILLS
              </div>
            </a>
          </li>
          <li>
            <a
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#education"
            >
              <div className={`text-sm  text-white transition-colors duration-300 hover:text-pink-600`}>
                EDUCATION
              </div>
            </a>
          </li>
          <li>
            <a
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#certificate"
            >
              <div className={`text-sm  text-white transition-colors duration-300 hover:text-pink-600`}>
                CERTIFICATES
              </div>
            </a>
          </li>
          <li>
            <a
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#projects"
            >
              <div className={`text-sm  text-white transition-colors duration-300 hover:text-pink-600`}>
                PROJECTS
              </div>
            </a>
          </li>
         
        </ul>
      </nav>
    </header>
  )
}
