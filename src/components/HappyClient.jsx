import React from 'react'
import { GoTrophy } from "react-icons/go";
import { FiUsers } from "react-icons/fi";
import { PiTimerLight } from "react-icons/pi";
import { CiAirportSign1 } from "react-icons/ci";
import { IoCodeSlashOutline } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
const record = [
    {
        icon : <GoTrophy className='h-4 w-4 text-blue-500' />,
        Number : "10+",
        title : "Projects Completed",
        description : "Successfully delivered projects across various industries"
    },
    {
        icon : <FiUsers />,
        Number : "15+",
        title : "Satisfied Clients",
        description : "Happy clients who trust my expertise"
    },
    {
        icon : <PiTimerLight />,
        Number : "5+",
        title : "Years Experience",
        description : "Professional experience in software development"
    }
    ,
    {
        icon : <CiAirportSign1 />,
        Number : "100%",
        title : "Project Success Rate",
        description : "Track record of successful project deliveries"
    } ,
    {
        icon : <IoCodeSlashOutline />,
        Number : "50K+",
        title : "Lines of Code",
        description : "Written and maintained across projects"
    } ,
    {
        icon : <CiStar />,
        Number : "4.9/5",
        title : "Client Rating",
        description : "Average client satisfaction rating"
    }
]

const HappyClient = () => {
  return (
    <div className='flex justify-center items-center w-full'>
        <div className='flex flex-col gap-3 py-5 px-2 md:py-20 md:px-20 justify-center items-center text-center w-full'>
            <p className='font-semibold text-5xl'>By the Numbers</p>
            <p className='text-lg w-full'>A track record of delivering successful projects and maintaining high client satisfaction</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-8 grid-cols-1 w-full'>
            
                    {
                     record.map((info,index)=>{
                        return(
                        <div key={index} className='border border-gray-400 rounded hover:shadow-lg w-full p-4'>
                         <div className='flex items-center gap-3 text-left'>
                            <div className=' p-3 rounded-full bg-blue-300' >{info.icon}</div>
                            <div>
                                <p className='text-2xl font-semibold'>{info.Number}</p>
                                <p className='text-blue-500 font-semibold'>{info.title}</p>
                            </div>
                         </div>
                         <div>
                            <p className='text-left'>{info.description}</p>
                         </div>
                        </div>
                     )})   
                    }
                

            </div>
        </div>
    </div>
  )
}

export default HappyClient