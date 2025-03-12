import React from 'react'
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
const Quotes = () => {
  return (
    <div className='p-3 mb-14 md:px-20 flex flex-col items-center  justify-center'>
        <div className="  rounded-lg bg-blue-100 border border-gray-300 flex flex-col items-start justify-center text-center relative">
        <RiDoubleQuotesL  className="text-4xl text-gray-500 absolute md:top-4 top-0 md:left-40 left-0" /> 
         <p className='md:px-52 md:py-10 p-10 font-semibold text-1xl text-gray-600 '>Working with this developer was a great experience. They delivered high-quality work on time and were always responsive to our needs. Their technical expertise and problem-solving skills were invaluable to our project's success.</p>
         <RiDoubleQuotesR className="text-4xl text-gray-500 absolute md:bottom-4 bottom-0 md:right-52 right-0" />
         {/* <div>
            <p>Muhammad Sheraz</p>
            <p>Senior Developer</p>
        </div> */}
        </div>
     
    </div>
  )
}

export default Quotes