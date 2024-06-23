/* eslint-disable no-unused-vars */
import React from 'react'
import TimelineEd from '../TimelineEd'
import TimelineEx from '../TimelineEx'
import PubCard from '../pubCard'

function Academics() {
  return (
    <div className='flex flex-col justify-center w-full px-10 py-10'>
      <div className='text-xl lg:text-3xl text-purple-700 font-bold'>Education</div>
      <TimelineEd />
      <div className='text-xl lg:text-3xl text-yellow-500 font-bold'>Experience</div>
      <TimelineEx />
      <div className='text-xl lg:text-3xl text-purple-700 font-bold'>Publication</div>
      <div className='flex justify-center items-center py-10 md:px-20 lg:px-40 xl:px-80'>
      <PubCard
        title="Nanotechnology Solutions To Mitigate Covid-19 Challenges" description="The COVID-19 pandemic has fuelled a global demand for effective diagnosis. Millions have lost lives in the face of this current health threat. The first case of COVID-19 was reportedly found in December 2019 in Wuhan, China. Since then, effective strategies for early detection and plausible treatment of COVID-19 to reduce the viral load and contain its global transmission have been under rigorous research..."
        linkText="Read me"
      />
      </div>
    </div>
  )
}

export default Academics