import Image from 'next/image'
import React from 'react'

const TechStack = () => {
  return (
    <div className='p-3.5 md:pt-20'>
      <div className='flex flex-col justify-center items-center gap-3 text-center'>
        <p className='text-4xl font-semibold'>Teck Stack</p>
        <p className='max-w-3xl'>Here are the technologies, frameworks, and tools I work with on a daily basis. I'm always learning and exploring new technologies to stay up-to-date with the latest trends.</p>
      </div>
      <div className="md:px-28 md:py-14 ">
   
        
            <h2 className="text-2xl font-bold text-black">Frontend</h2>
            <div className="flex  justify-between flex-wrap gap-4">
             
                <div className="flex flex-col  items-center p-4 hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <Image src="/html5.png" alt='html5' height={50} width={50} />
                    <span className="text-gray-700 font-medium">HTML5</span>
                </div>
                
             
                <div className="flex flex-col items-center p-4 hover:scale-110 transition-transform duration-300 cursor-pointer">
                <Image src="/css3.png" alt='html5' height={50} width={50} />
                    <span className="text-gray-700 font-medium">CSS3</span>
                </div>

            
                <div className="flex flex-col items-center p-4 hover:scale-110 transition-transform duration-300 cursor-pointer">
                <Image src="/js.png" alt='html5' height={50} width={50} />
                    <span className="text-gray-700 font-medium">JavaScript</span>
                </div>

             
                <div className="flex flex-col items-center p-4 hover:scale-110 transition-transform duration-300 cursor-pointer">
                <Image src="/typescript.png" alt='html5' height={50} width={50} />
                    <span className="text-gray-700 font-medium">TypeScript</span>
                </div>

          
                <div className="flex flex-col items-center p-4 hover:scale-110 transition-transform duration-300 cursor-pointer">
                <Image src="/react.png" alt='html5' height={50} width={50} />
                    <span className="text-gray-700 font-medium">React</span>
                </div>

               
                <div className="flex flex-col items-center p-4 hover:scale-110 transition-transform duration-300 cursor-pointer">
                <Image src="/next.png" alt='html5' height={50} width={50} />
                    <span className="text-gray-700 font-medium">Next.js</span>
                </div>

              
                <div className="flex flex-col items-center p-4 hover:scale-110 transition-transform duration-300 cursor-pointer">
                <Image src="/redux.png" alt='html5' height={50} width={50} />
                    <span className="text-gray-700 font-medium">Redux</span>
                </div>

               
                <div className="flex flex-col items-center p-4 hover:scale-110 transition-transform duration-300 cursor-pointer">
                <Image src="/tailwind.png" alt='html5' height={50} width={50} />
                    <span className="text-gray-700 font-medium">Tailwind CSS</span>
                </div>
            </div>

            <h2 className="text-2xl font-bold text-black pt-4">Backend</h2>
            <div className="flex flex-row gap-16 flex-wrap ">
             
                <div className="flex flex-col items-center p-4 hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <Image src="/node.png" alt='html5' height={50} width={50} />
                    <span className="text-gray-700 font-medium">Node.js</span>
                </div>
                
             
                <div className="flex flex-col items-center p-4 hover:scale-110 transition-transform duration-300 cursor-pointer">
                <Image src="/express.png" alt='html5' height={50} width={50} />
                    <span className="text-gray-700 font-medium">Express.js</span>
                </div>

            
                <div className="flex flex-col items-center p-4 hover:scale-110 transition-transform duration-300 cursor-pointer">
                <Image src="/mongodb.png" alt='html5' height={50} width={50} />
                    <span className="text-gray-700 font-medium">MongoDB</span>
                </div>        

           
            </div>

            <h2 className="text-2xl font-bold text-black pt-4">Tools</h2>
            <div className="flex flex-row md:gap-16 flex-wrap ">
             
                <div className="flex flex-col items-center p-4 hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <Image src="/git.png" alt='html5' height={50} width={50} />
                    <span className="text-gray-700 font-medium">Git</span>
                </div>
                
             
                <div className="flex flex-col items-center p-4 hover:scale-110 transition-transform duration-300 cursor-pointer">
                <Image src="/github.png" alt='html5' height={50} width={50} />
                    <span className="text-gray-700 font-medium">Github</span>
                </div>

            
                <div className="flex flex-col items-center p-4 hover:scale-110 transition-transform duration-300 cursor-pointer">
                <Image src="/vscode.png" alt='html5' height={50} width={50} />
                    <span className="text-gray-700 font-medium">VS Code</span>
                </div> 

                <div className="flex flex-col items-center p-4 hover:scale-110 transition-transform duration-300 cursor-pointer">
                <Image src="/npm.png" alt='html5' height={50} width={50} />
                    <span className="text-gray-700 font-medium">npm</span>
                </div> 
                   
                <div className="flex flex-col items-center p-4 hover:scale-110 transition-transform duration-300 cursor-pointer">
                <Image src="/webpack.png" alt='html5' height={50} width={50} />
                    <span className="text-gray-700 font-medium">Webpack</span>
                </div>        

           
            </div>
             
             <div className='border-b border-gray-300 pt-3'></div>
    
        </div>

    </div>
  )
}

export default TechStack