import React from 'react'
import { Section } from './common/Section'
import {FaGithub,FaExternalLinkSquareAlt} from 'react-icons/fa'
import p1 from '../assets/ecom.png'
import p2 from '../assets/codered.png'
import p3 from '../assets/schoolmanagement.png'
import p4 from '../assets/netflix.png'
import p5 from '../assets/twitter.png'
import p6 from '../assets/twitter.png'
export const Portfolio = () => {
    const projects=[
        {
            id:1,
            image:p1,
            title:"Ecommerce Website",
            github:'https://github.com/Prajaktasangolkar/E-Commerce_Website',
            demo:'link'
        },
        {
            id:2,
            image:p2,
            title:"Code red website",
            github:'https://github.com/Prajaktasangolkar/Code-Red',
            demo:'link'
        },
        {
            id:3,
            image:p3,
            title:"School Management website",
            github:'https://github.com/Prajaktasangolkar/School_Management__',
            demo:'link'
        },
        {
            id:4,
            image:p4,
            title:"Netflix Clone",
            github:'https://github.com/Prajaktasangolkar/NetFlix__Clone',
            demo:'link'
        },
        {
            id:5,
            image:p5,
            title:"Twitter Website",
            github:'https://github.com/Prajaktasangolkar/tweeter',
            demo:'link'
        },
        {
            id:6,
            image:p6,
            title:"Portfolio",
            github:'https://github.com/Prajaktasangolkar',
            demo:'link'
        },
    ]
  return (
    <Section title='PROJECTS 🧑‍💻'
    Subtitle="These are all the Projects that I have worked on.Some of them I have ...."
    >
   <div className='grid gap-5 lg:gap-14 lg:grid-cols-2'>
    {
        projects.map(({id,image,title,github,demo})=>(
            // eslint-disable-next-line react/jsx-key
            <div key={id} 
            className='max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden'
            >
                <img src={image} alt={title} 
                className='w-2/3'
                />
                <div
                className='w-1/3 flex flex-col items-center justify-evenly p-1'
                >
                    <h2>{title}</h2>
                    <a href={github}
                    target='_blank'
                 rel='noopener noreferrer'
className='text-2xl cursor-pointer duration-150 hover:scale-110'
                    >
                        <FaGithub/>
                    </a>
                    <a href={demo}
                    target='_blank'
                 rel='noopener noreferrer'
                 className='text-2xl cursor-pointer duration-150 hover:scale-110'
                    >
                        <FaExternalLinkSquareAlt/>
                    </a>
                </div>
            </div>
        ))
    }
   </div>
    </Section>
  )
}
