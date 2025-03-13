"use client"
import Image from "next/image";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Education = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="  md:px-24">
    <div className=" mx-auto p-8 bg-white rounded-xl ">
      <h2 className="text-3xl font-bold text-gray-800 mb-8  pb-2">
        Education
      </h2>

      <div className=" border border-gray-300">
        <div className="group md:p-6 rounded-lg hover:bg-gray-50 ">
          <div className="flex flex-col md:flex-row justify-between">
              <div className="flex flex-col mb-2">
                <h3 className="text-xl font-semibold text-gray-800">
                  Bachelor of Science in Computer Software Engineering
                </h3>
                <p className="text-gray-600 font-medium mb-3">
                Riphah International University Islamabad
              </p>
              <p className="text-gray-600 mb-4 ">
                Focused on software development, system architecture,
                algorithms, and cloud computing. Covered web and mobile
                development, databases, and scalable software solutions.
              </p>
              </div>
             
           
          
            <div className=" px-5 flex text-sm font-semibold">
              2020-<span>2024</span>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5">
      <p className="font-semibold text-black text-2xl">Experience Letter</p>
      <div className="md:max-w-7xl pt-4">
        {/* Clickable Image */}
        <Image
          src="/Eletter.png"
          width={320}
          height={320}
          alt="certificate"
          className="cursor-pointer object-center"
          onClick={() => setIsOpen(true)}
        />
      </div>

      {/* Fullscreen Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div className="relative">
            {/* Close Button */}
            <button
              className="absolute top-4 -right-9 bg-white rounded-full p-2 hover:bg-gray-300 transition"
              onClick={() => setIsOpen(false)}
            >
              <RxCross2 className="w-6 h-6 cursor-pointer text-black" />
            </button>

            {/* Fullscreen Image */}
            <Image
              src="/Eletter.png"
              width={450} // Adjust the size for full screen
              height={450}
              alt="certificate"
              className="rounded-lg shadow-lg object-fill"
            />
          </div>
        </div>
      )}
    </div>
    </div>
    </div>
  );
};

export default Education;
