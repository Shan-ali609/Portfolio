import { projects } from '@/data/projects'
import React from 'react'
import ProjectCards from './ProjectCards'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa";
const Hprojectsection = () => {
    const homeprojects = projects.slice(0 , 2 )
  return (
    <div className='bg-blue-50 py-11 w-full flex items-center justify-center'>
         <div className='flex flex-col items-center justify-center text-center'>
            <p className='font-semibold text-5xl'>Featured Projects</p>
            <p className='w-full text-lg'>Check out some of my recent work. These projects showcase my skills and expertise.</p>
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 grid-cols-1 gap-6 p-4 mt-5">
           {homeprojects.map((project) => (
           <ProjectCards key={project.title} project={project} />
           ))}
          </div>
          <div className='mt-3.5 pb-3.5 '>
            <Link href="/project" className='bg-white border border-gray-400 flex items-center px-6 py-3 rounded gap-2 hover:bg-transparent text-black ' >
            View All Projects <span><FaArrowRight /></span>
            </Link>
          </div>
         </div>
    </div>
  )
}

export default Hprojectsection