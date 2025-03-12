import Aboutsection from '@/components/Aboutsection'
import AboutSkills from '@/components/AboutSkills'
import Education from '@/components/Education'
import TechStack from '@/components/TechStack'
import React from 'react'

const page = () => {
  return (
    <div>
      <Aboutsection />
      <TechStack />
      <AboutSkills />
      <Education />
    </div>
  )
}

export default page