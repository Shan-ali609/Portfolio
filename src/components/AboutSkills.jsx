"use client";
import React, { useEffect, useState } from "react";

const AboutSkills = () => {
  return (
    <div className="md:px-24 pb-10 px-6 w-full">
      <div className="py-5">
        <p className="text-3xl font-semibold">Skills</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="border border-gray-300 p-2.5 w-full">
        <p className="font-semibold text-2xl">Frontend</p>

        
         <div className="flex flex-col">
          <div className="flex items-center p-4 hover:bg-gray-50 rounded-lg transition-all">
            <div className="flex-1">
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-700">React</span>
                <span className="text-blue-500">5/5</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-blue-500 rounded-full w-full"></div>
              </div>
            </div>
          </div>

          <div className="flex items-center p-4 hover:bg-gray-50 rounded-lg transition-all">
            <div className="flex-1">
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-700">Next.js</span>
                <span className="text-blue-500">5/5</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-blue-500 rounded-full w-full"></div>
              </div>
            </div>
          </div>

          <div className="flex items-center p-4 hover:bg-gray-50 rounded-lg transition-all">
            <div className="flex-1">
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-700">TypeScript</span>
                <span className="text-blue-500">4/5</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-blue-500 rounded-full w-4/5"></div>
                </div>
            </div>
          </div>

          <div className="flex items-center p-4 hover:bg-gray-50 rounded-lg transition-all">
            <div className="flex-1">
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-700">JavaScript</span>
                <span className="text-blue-500">5/5</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-blue-500 rounded-full w-full"></div>
              </div>
            </div>
          </div>


          <div className="flex items-center p-4 hover:bg-gray-50 rounded-lg transition-all">
            <div className="flex-1">
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-700">HTML/CSS</span>
                <span className="text-blue-500">5/5</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-blue-500 rounded-full w-full"></div>
              </div>
            </div>
          </div>


          <div className="flex items-center p-4 hover:bg-gray-50 rounded-lg transition-all">
            <div className="flex-1">
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-700">Redux</span>
                <span className="text-blue-500">5/5</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-blue-500 rounded-full w-full"></div>
              </div>
            </div>
          </div>

          <div className="flex items-center p-4 hover:bg-gray-50 rounded-lg transition-all">
            <div className="flex-1">
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-700">TailwindCSS</span>
                <span className="text-blue-500">5/5</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-blue-500 rounded-full w-full"></div>
              </div>
            </div>
          </div>




          </div>
        </div>


        <div className="border border-gray-300 p-2.5 w-full">
        <p className="font-semibold text-2xl">Backend</p>

        
         <div className="flex flex-col">
          <div className="flex items-center p-4 hover:bg-gray-50 rounded-lg transition-all">
            <div className="flex-1">
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-700">Node.js</span>
                <span className="text-blue-500">4/5</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-blue-500 rounded-full w-4/5"></div>
                </div>
            </div>
          </div>

          <div className="flex items-center p-4 hover:bg-gray-50 rounded-lg transition-all">
            <div className="flex-1">
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-700">Express.js</span>
                <span className="text-blue-500">5/5</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-blue-500 rounded-full w-4/5"></div>
              </div>
            </div>
          </div>

          <div className="flex items-center p-4 hover:bg-gray-50 rounded-lg transition-all">
            <div className="flex-1">
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-700">MongoDB</span>
                <span className="text-blue-500">5/5</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-blue-500 rounded-full w-full"></div>
                </div>
            </div>
          </div>
          <div className="flex items-center p-4 hover:bg-gray-50 rounded-lg transition-all">
            <div className="flex-1">
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-700">REST APIs</span>
                <span className="text-blue-500">5/5</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-blue-500 rounded-full w-full"></div>
              </div>
            </div>
          </div>



          </div>
        </div>

        <div className="border border-gray-300 p-2.5 w-full">
        <p className="font-semibold text-2xl">Tools</p>

        
         <div className="flex flex-col">
          <div className="flex items-center p-4 hover:bg-gray-50 rounded-lg transition-all">
            <div className="flex-1">
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-700">Git</span>
                <span className="text-blue-500">4/5</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-blue-500 rounded-full w-4/5"></div>
                </div>
            </div>
          </div>

          <div className="flex items-center p-4 hover:bg-gray-50 rounded-lg transition-all">
            <div className="flex-1">
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-700">VS Code</span>
                <span className="text-blue-500">5/5</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-blue-500 rounded-full w-full"></div>
              </div>
            </div>
          </div>

          <div className="flex items-center p-4 hover:bg-gray-50 rounded-lg transition-all">
            <div className="flex-1">
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-700">Webpack</span>
                <span className="text-blue-500">3/5</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-blue-500 rounded-full w-3/5"></div>
                </div>
            </div>
          </div>




          </div>
        </div>

        <div className="border border-gray-300 p-2.5 w-full">
        <p className="font-semibold text-2xl">Other</p>

        
         <div className="flex flex-col">
          <div className="flex items-center p-4 hover:bg-gray-50 rounded-lg transition-all">
            <div className="flex-1">
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-700">Problem Solving</span>
                <span className="text-blue-500">4/5</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-blue-500 rounded-full w-4/5"></div>
                </div>
            </div>
          </div>

          <div className="flex items-center p-4 hover:bg-gray-50 rounded-lg transition-all">
            <div className="flex-1">
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-700">Team Collaboration</span>
                <span className="text-blue-500">5/5</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-blue-500 rounded-full w-full"></div>
              </div>
            </div>
          </div>
   

          <div className="flex items-center p-4 hover:bg-gray-50 rounded-lg transition-all">
            <div className="flex-1">
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-700">Time Management</span>
                <span className="text-blue-500">5/5</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-blue-500 rounded-full w-full"></div>
              </div>
            </div>
          </div>



          </div>
        </div>



      </div>
    </div>
  );
};

export default AboutSkills;
