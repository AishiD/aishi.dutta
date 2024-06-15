/* eslint-disable no-unused-vars */
import React from 'react'
import { SocialIcon } from 'react-social-icons';


function Skills() {
  return (
    <div className='flex flex-col justify-start gap-10 py-10 px-10 h-screen align-top'>
      {/* heading */}
      <div className='font-bold font-mono text-xl md:text-3xl lg:text-3xl text-purple-600'>Skills</div>
      {/* languages */}
      <div className='flex flex-row'>
        <SocialIcon url='www.html5.com' />
      </div>
      {/* graphic design */}
      <div></div>
    </div>
  )
}

export default Skills