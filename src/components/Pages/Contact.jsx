/* eslint-disable no-unused-vars */
import React from 'react'
import FormApp from '../contactForm'

function Contact() {
  return (
    <div className='flex flex-col justify-center w-full px-10 py-10'> <div className='text-purple-700 text-3xl font-bold'>Contact Me!</div>
    <div className='flex flex-col justify-center h-screen items-center pb-60'><FormApp /></div>
    </div>
  )
}

export default Contact