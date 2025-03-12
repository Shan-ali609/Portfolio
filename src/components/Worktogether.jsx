import Link from 'next/link'
import React from 'react'

const Worktogether = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-3.5 text-center py-3 md:py-36 border-t border-gray-300'>
        <div className='px-5 md:px-0'> 
            <p className='text-2xl md:text-5xl font-semibold'>Let's Work Together</p>
            <p className='text-sm md:text-lg px-3 md:px-0'>I'm currently available for freelance projects, full-time positions, or consulting work. If you're interested in working together, get in touch!</p>
        </div>
        <div className='flex flex-col md:flex-row gap-4 md:gap-7'>
            <Link className='px-5 py-2 border border-gray-300 bg-blue-500 text-white text-[14px] md:text-[15px] font-bold' href="/contact">Contact Me</Link>
            <Link className='px-5 py-2 border border-gray-300 text-black text-[14px] md:text-[15px] font-bold' href="/about">Learn More About Me</Link>
        </div>
    </div>
  )
}

export default Worktogether
