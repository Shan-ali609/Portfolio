import React from 'react'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa";
import ProjectCards from '@/components/ProjectCards';
import { projects } from '@/data/projects';
const page = () => {
   
  return (
    <div className=' w-full p-3 md:px-28 pt-9 flex'>
         <div className='flex flex-col w-full  '>
           <div className=' pt-11'>
            <p className='font-semibold text-5xl'>Featured Projects</p>
            <p className=' text-lg'>Check out some of my recent work. These projects showcase my skills and expertise.</p>
            </div>
            <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6 p-4 mt-5">
           {projects.map((project) => (
           <ProjectCards key={project.title} project={project} />
           ))}
          </div>
        
         </div>
    </div>
  )
}

export default page