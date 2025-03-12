import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import Form from '@/components/Form';
const page = () => {
  return (
    <div className='pt-24 p-3 md:px-24'>
        <div className='flex flex-col gap-3.5'>
          <p className='text-4xl font-semibold'>Contact Me</p>
          <p className='max-w-4xl'>I'm interested in freelance opportunities, full-time positions, and consulting work. If you have a question or want to work together, feel free to get in touch!</p>
        </div>
       {/* left */}
        <div className='grid md:grid-cols-[30%_70%] grid-cols-1 gap-10 py-6'>
          <div className='flex flex-col gap-7'>
              <div className='border border-gray-300 p-4'>
                <p className='font-bold'>Contact Information</p>
                <div className='pt-2.5 overflow-hidden'>
                <div className='flex items-center gap-2'>
                  <MdOutlineEmail className='text-[20px] text-blue-500 ' />
                  <div>
                   <p>Email</p>
                 
                  </div>
                </div>
                <p className='pl-7'>shan.softwareengineer007@gmail.com</p>
                </div>


                <div className='pt-2.5'>
                <div className='flex items-center gap-2'>
                  <LuPhone className='text-[20px] text-blue-500 ' />
                  <div>
                   <p>Phone</p>
                 
                  </div>
                </div>
                <p className='pl-7'>+966 51041 3244</p>
                </div>

                <div className='pt-2.5'>
                <div className='flex items-center gap-2'>
                  <CiLocationOn className='text-[20px] text-blue-500 ' />
                  <div>
                   <p>Location</p>
                 
                  </div>
                </div>
                <p className='pl-7'>Riyadh, Saudi Arabia</p>
                </div>

              </div>

              <div className='border border-gray-300 flex flex-col p-4'>
                <p className='font-semibold'>Availability</p>
                <p>I'm currently available for new projects, My typical response time is within 24 hours.</p>
              </div>
          </div>
          {/* right */}
          <div>
            <Form />
          </div>
        </div>
       </div>
  )
}

export default page