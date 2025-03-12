"use client"
import React from 'react'
import { FaCode } from "react-icons/fa";
import { GrDatabase } from "react-icons/gr";
import { ImCompass } from "react-icons/im";
const skillsData = [
    {
      id: 1,
      title: "Frontend Development",
      description: "Creating responsive and accessible user interfaces with React, Next.js, and modern CSS frameworks.",
      icon: <FaCode className="text-blue-500 text-2xl " />,
    },
    {
      id: 2,
      title: "Backend Development",
      description: "Building robust server-side applications with Node.js, Express, and various database technologies.",
      icon: <GrDatabase className="text-blue-500 text-2xl" />,
    },
    {
      id: 3,
      title: "Performance Optimization",
      description: "Improving application speed and efficiency through code optimization and modern web techniques.",
      icon: <ImCompass className="text-blue-500 text-2xl" />,
    },
  ];
  
const Skills = () => {
  return (
    <div className='md:py-36 py-20 w-full flex items-center justify-center '> 
    <div className='text-center flex flex-col items-center gap-1.5'>
      <p className='font-semibold text-5xl'>My Skills</p>
      <p className='w-full text-lg'>
        I specialize in building modern web applications using the latest technologies and best practices.
      </p>
      <div className="flex flex-row flex-wrap gap-5 lg:mt-6 w-full  ">
        {skillsData.map((skill) => (
          <div
            key={skill.id}
            className="bg-white p-6 shadow-md rounded-lg mx-auto flex flex-col items-center text-center w-80 hover:shadow-lg"
          >
            <div className="mb-4 bg-blue-100 p-2 rounded-full ">{skill.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{skill.title}</h2>
            <p className="text-gray-600">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Skills