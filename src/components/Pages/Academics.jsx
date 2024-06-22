/* eslint-disable no-unused-vars */
import React from 'react'
import TimelineEd from '../TimelineEd'
import TimelineEx from '../TimelineEx'

function Academics() {
  return (
    <div className='flex flex-col justify-center w-full px-10 py-10'>
      <div className='text-xl lg:text-3xl text-purple-700 font-bold'>Education</div>
      <TimelineEd />
      <div className='text-xl lg:text-3xl text-purple-700 font-bold'>Experience</div>
      <TimelineEx />
    </div>
  )
}

export default Academics