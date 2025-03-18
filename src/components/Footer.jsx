import Link from 'next/link'
import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { GoMail } from "react-icons/go";
import { LuGithub } from "react-icons/lu";
const Footer = () => {
  return (
    <>
    <div className='border-b border-gray-300'>

    </div>
    <div className='px-3 md:px-20'>
    
         <div className='flex flex-wrap gap-8 md:gap-40 items-center p-4 md:pb-10 md:px-20 border-b border-gray-300 '>
             <div className='flex flex-col'>
              <p className='font-semibold'>Shan Ali</p>
              <p>A passionate developer building amazing digital experiences.</p>
             </div>
             <div className='flex items-center justify-center mt-7 flex-col'>
              <p className='font-semibold mr-auto'>Quik Links</p>
                <div className='grid grid-cols-2  '>
                 <Link className='hover:text-blue-500' href="/">Home</Link>
                 <Link className='pl-10 hover:text-blue-500' href="/about">About</Link>
                 <Link className='hover:text-blue-500' href="/project">Projects</Link>
                 <Link href="/contact" className='pl-10 hover:text-blue-500'>Contact</Link>

                 </div>
             </div>
              <div>
                <p className='font-bold'>Connect</p>
                <div className='flex gap-5 items-center'>
                <Link href="https://www.linkedin.com/in/shan-ali-7b6062311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='text-[23px]'><CiLinkedin className='hover:text-blue-500' /></Link>
                 <Link href="shan.softwareengineer007@gmail.com"><GoMail className='hover:text-blue-500' /></Link>
                 <Link href="https://github.com/Shan-ali609?tab=repositories"><LuGithub className='hover:text-blue-500' /></Link>
                </div>
              </div>
         </div>
         <div className=' flex flex-wrap gap-3 items-center justify-between py-3'>
         <p>© 2025 Shan Ali. All rights reserved.</p>
         <div className=' flex gap-3'>
         <Link className='hover:text-blue-500' href="/">Privacy Policy</Link>
         <Link className='hover:text-blue-500' href="/">Term of Services</Link>
         </div>
         </div>
    </div>
    </>
  )
}

export default Footer