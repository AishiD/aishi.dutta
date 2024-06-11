/* eslint-disable no-unused-vars */
import React from 'react';
import "../../../public/pp_photo.png";

function Profile() {
  return (
    <div className='flex flex-col sm:flex-row md:flex-row lg:flex justify-evenly py-4 px-20 h-fit items-center'>
      <div className='w- items-center'><img src="pp_photo.png" className='w-96 h-96 border'/></div>
      <div className='w-1/2 bg-blue-100 text-xl'><h1>I am a front-end web developer and UI/UX Designer based in Kolkata</h1></div>
    </div>
  )
}

export default Profile