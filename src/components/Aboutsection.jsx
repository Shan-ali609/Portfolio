import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { GoMail } from "react-icons/go";
import { LuGithub } from "react-icons/lu";
const Aboutsection = () => {
  return (
    <div className='pt-24 md:px-24'>
        <div className=' px-3 grid md:grid-cols-[65%_35%] grid-cols-1 md:gap-2 items-center justify-center   '>
            <div className='pl-4 ' >
                <div className=' flex flex-col gap-4'>
                    <p className='text-5xl font-semibold'>About Me</p>
                    <p className='text-[18px]'>I'm Shan Ali, a Full Stack Developer with 5+ years of experience and expertise in building scalable web applications using React.js, Next.js, TypeScript, Express.js, Node.js, and cloud technologies like AWS and Vercel.</p>
                    <p>Over the past few years, I have developed e-commerce platforms like Binkit, a MERN stack-based app. I implemented a login system with user registration, OTP password recovery, and JWT authentication. The admin section allows product and category management. Users can place orders seamlessly. Additionally, I have experience building CRM systems for customer relationship management and CMS for content management, helping businesses streamline processes and enhance user engagement</p>
                     <p>What drives me is solving complex problems through clean, efficient code and delivering solutions that make a tangible impact. I am passionate about leveraging my skills in frontend and backend development to create seamless user experiences and robust systems.</p>
                </div>
                <div className='flex items-center gap-2 py-3.5'>
                <Link href="/" className='text-[29px]'><CiLinkedin className='hover:text-blue-500' /></Link>
                 <Link  href="/" className='text-[26px]' > <GoMail className='hover:text-blue-500' />  </Link>
                 <Link href="/" className="text-[26px]" ><LuGithub className='hover:text-blue-500' /></Link>
                </div>
            </div>
             <div className='mx-auto'>
                        <div className='lg:h-96 h-60 w-60  lg:w-96 overflow-hidden border-blue-500 border-4 rounded-full'>
                           <Image
                            src="/shan.jpeg"
                            alt='shan image'
                            width={320}
                            height={320}
                            className='h-full w-full object-cover  ' 
                            />
                        </div>
               </div>
        </div>
        <div className='border px-24 border-gray-300 mt-5'></div>
    </div>
  )
}

export default Aboutsection