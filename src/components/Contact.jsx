import React from 'react'
import { Section } from './common/Section'
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import avatar from '../assets/contact.png'

export const Contact = () => {
    const SOCIAL=[

        {
            id:2,
            link:'https://github.com/Prajaktasangolkar',
            icon:<FaGithub/>
        },
        {
            id:3,
            link:'https://www.linkedin.com/in/prajakta-sangolkar-a75271248/',
            icon:<FaLinkedin/>
        }
    ]
  return (
    <Section 
      className=' bg-gray-900'
    >
            <div className="flex justify-center my-5 lg:py-8" id='contact'>
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Contact
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center gap-8 text-center  text-white'>
        <div>
            <img src={avatar} alt=""  className=' h-60'/>
        </div>
            <div>
             <p>Thses are the ways you can get in touch with me,Hope to hear from you soon :)</p>
               <p className='max-w-xs md:max-w-lg font-extralight'
               >Feel free to contact me using your preferred medium</p>
            </div>
            <div className='flex w-full items-center justify-evenly text-3xl'>
                 {
                    SOCIAL.map(({id,link,icon})=>(
                         // eslint-disable-next-line react/jsx-key
                         <a href={link}      target='_blank'
                 rel='noopener noreferrer'
                          className='duration-200 ease-in-out hover:text-rose-600'
                         >{icon}</a>
                    ))
                 }
            </div>
            {/* Bottom form */}
            <div className="p-8 text-left w-full">
                <form action='https://getform.io/f/qblomxpa' method='POST'>
                      <div className='gap-4 w-full'>
                        <div className='flex flex-col my-2'>
                            <label className="capitalize text-sm py-2 font-extralight" >name</label>
                            <input type="text" name='name' className='border-2 rounded-lg p-3 flex focus: outline-none  border-gray-400 dark:bg-gray-900 dark:text-white' />
                        </div>
                        <div className='flex flex-col my-2'>
                            <label className="capitalize text-sm py-2 font-extralight" >Phone</label>
                            <input type="text" name='phone' className='border-2 rounded-lg p-3 flex focus: outline-none  border-gray-400 dark:bg-gray-900 dark:text-white' />
                        </div>
                        <div className='flex flex-col my-2'>
                            <label className="capitalize text-sm py-2 font-extralight" >Email</label>
                            <input type="email" name='email' className='border-2 rounded-lg p-3 flex focus: outline-none  border-gray-400 dark:bg-gray-900 dark:text-white' />
                        </div>
                        <div className='flex flex-col my-2'>
                            <label className="capitalize text-sm py-2 font-extralight" >Message</label>
                            <textarea type="message" name='textarea' rows='10' className='border-2 rounded-lg p-3 flex focus: outline-none  border-gray-400 dark:bg-gray-900 dark:text-white resize-none' />
                        </div>
                      </div>
                      <div className="flex items-center justify-center">
                        <button className="my-8 bg-gradient-to-r from-rose-600 to-teal-500 text-white px-6 py-3 uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200">
                            send message
                        </button>
                      </div>
                </form>
            </div>
      </div>
    </Section>
  )
}
