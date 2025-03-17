"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
const Hero = () => {
  return (
    <div className='bg-blue-50 pt-12 px-3 grid md:grid-cols-[50%_50%] grid-cols-1 md:gap-2 items-center justify-center min-h-[calc(100vh-10px)] '>
        {/* detail section */}
        <div className='grid gap-3 py-2'>
        <div className='lg:pl-40'>
        <h1 className="text-2xl lg:text-[52px] font-semibold">
            <TypeAnimation
                sequence={[
                "Hi, I'm",
                1000,
                "Hi, I'm",
                1000
                ]}
                speed={50}
                repeat={Infinity}
                className="inline text-black" // Ensures it follows the h1 styling
            />
            <TypeAnimation
                sequence={[
                "Shan Ali",
                1000,
                "Web Developer",
                1000
                ]}
                speed={50}
                repeat={Infinity}
                className="inline text-blue-500" // Applies blue color to dynamic text
            />
            </h1>
            <p className='max-w-[580px] text-black lg:text-[18px]'>A passionate full-stack developer specializing in creating exceptional digital experiences. I build accessible, responsive, and performant web applications.</p>
            <div className='flex gap-3.5 mt-3'>
                <Link href="/project" className="lg:p-2 px-1 text-[10px] lg:text-[15px] bg-blue-500 text-white inline-flex items-center gap-2 rounded">View my Work <span><FaArrowRight /></span></Link>
                <Link href="/contact" className="lg:p-2 p-2 text-[10px] lg:text-[15px] text-black inline-flex items-center font-semibold gap-2 border-gray-400 border rounded">Contact Me </Link>

            </div>
            </div>
        </div>
        {/* img section */}
        <div className='mx-auto'>
            <div className='lg:h-96 h-48 w-48  lg:w-96 overflow-hidden border-blue-500 border-4 rounded-full'>
               <Image
                src="/shan ali.jpg"
                alt='shan image'
                width={320}
                height={320}
                className='h-full w-full object-center ' 
                />
            </div>
        </div>
    </div>
  )
}

export default Hero