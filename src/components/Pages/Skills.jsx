/* eslint-disable no-unused-vars */
import React from 'react'
import Tech_Stack from '../Tech_Stack.jsx';
import image1 from '../../assets/1.png'
import image2 from '../../assets/2.png'
import image3 from '../../assets/3.png'
import image7 from '../../assets/7.png'
import image4 from '../../assets/4.png'
import image5 from '../../assets/5.png'
import image6 from '../../assets/6.png'
import image13 from '../../assets/13.png'
import image8 from '../../assets/8.png'
import image9 from '../../assets/9.png'
import image10 from '../../assets/10.png'
import image11 from '../../assets/11.png'
import image12 from '../../assets/12.png'
import image14 from '../../assets/14.png'
import image15 from '../../assets/15.png'
import image16 from '../../assets/16.png'
import image17 from '../../assets/17.png'
import image18 from '../../assets/18.png'
import image19 from '../../assets/19.png'
import image20 from '../../assets/20.png'
import image21 from '../../assets/21.jpg'
import image22 from '../../assets/22.png'

function Skills() {
  return (
    <div className='flex flex-col justify-start gap-10 py-8 px-10 md:px-10 h-fit align-top'>
      {/* heading */}
      <div className='font-bold text-xl md:text-3xl lg:text-3xl text-purple-600'>Skills</div>
      <div><h2 className='font-medium font-mono text-yellow-500'>Languages</h2></div>
      {/* languages */}
      <div className='flex flex-wrap gap-6 py-2'>
          <Tech_Stack img={image1} name="C++" />
          <Tech_Stack img={image2} name="C" />
          <Tech_Stack img={image3} name="Python" />
          <Tech_Stack img={image7} name="Javascript" />
          <Tech_Stack img={image11} name="Typescript" />
      </div>
      {/* Frameworks & Version Control */}
      <div><h2 className='font-medium font-mono text-yellow-500'>Frameworks & Version Control</h2></div>
      <div className='flex flex-wrap gap-6 py-2 w-fit'>
        <Tech_Stack img={image4} name="HTML5" />
        <Tech_Stack img={image6} name="CSS3" />
        <Tech_Stack img={image8} name="React" />
        <Tech_Stack img={image5} name="Tailwind CSS" />
        <Tech_Stack img={image10} name="Bootstrap" />
        <Tech_Stack img={image22} name="React-Spring" />
        <Tech_Stack img={image15} name="GitHub" />
        <Tech_Stack img={image12} name="Next" />
        <Tech_Stack img={image21} name='Clerk' />
      </div>
      {/* Graphic Design */}
      <div><h2 className='font-medium font-mono text-yellow-500'>Graphic Design</h2></div>
      <div className='flex flex-wrap flex-grow gap-6 py-2 w-fit'>
        <Tech_Stack img={image19} name="Adobe XD" />
        <Tech_Stack img={image17} name="Figma" />
        <Tech_Stack img={image18} name="Illustrator" />
        <Tech_Stack img={image20} name="Procreate" />
        <Tech_Stack img={image16} name="Blender" />
      </div>
      {/* Backend/ DataBase */}
      <div><h2 className='font-medium font-mono text-yellow-500'>Backend/ DataBase</h2></div>
      <div className='flex flex-wrap gap-6 py-2 w-fit'>
        <Tech_Stack img={image9} name="MongoDB" />
        <Tech_Stack img={image13} name="NodeJS" />
        <Tech_Stack img={image14} name="SQL" />
      </div>
    </div>
  )
}

export default Skills

