"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';



const ProjectCards = ({ project }) => {  // Fixed prop destructuring
  return (
    <Link href={`/projects/${project.slug}`} > 
    <div className="rounded-lg border border-gray-400 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col">
        <div className="relative h-60 w-full mb-4 border-b border-gray-300 overflow-hidden">
          <Image 
            src={project.image} 
            alt="project" 
            height={320}
            width={320}
            className="h-full w-full object-cover p-2"  // Added object-cover
          />
        </div>
        <div className='p-3.5 bg-white'>
          <div className="flex items-center space-x-2 mb-2">
            {project.category.split(' ').map((word, i) => (
              <span key={i} className="text-sm font-medium px-2 py-1 bg-blue-100 rounded">
                {word}
              </span>
            ))}
          </div>
          
          <h3 className="text-xl text-left font-semibold mb-2">{project.title}</h3>
          
          <p className="text-gray-600 mb-4 text-left">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((technology, i) => (
              <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {technology}
              </span>
            ))}
          </div>
          <div className='flex justify-between'>
          <button            
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center hover:underline cursor-pointer">
            View Project Details
          </button>
          <button 
               onClick={() => window.open(project.url, "_blank")}
               className="px-3 py-1 bg-blue-500 text-white rounded cursor-pointer">
               Live Demo
               </button>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
}

export default ProjectCards;