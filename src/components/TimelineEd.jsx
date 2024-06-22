/* eslint-disable no-unused-vars */
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { AcademicCapIcon,BuildingLibraryIcon } from '@heroicons/react/24/outline';

function Timeline() {
  return (
    <div><VerticalTimeline lineColor="purple">
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'rgb(137, 46, 255)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(137, 46, 255)' }}
      date="2021 - present"
      iconStyle={{ background: 'rgb(137, 46, 255)', color: '#fff' }}
      icon={<BuildingLibraryIcon />}
    >
      <h3 className="vertical-timeline-element-title">Institute of Engineering & Management</h3>
      <h4 className="vertical-timeline-element-subtitle">Kolkata, WB</h4>
      <p>
        Computer Science & Engineering (Artificial Intelligence)
      </p>
    </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{background: 'rgb(239, 222, 255)'}}
    date="2019, 2021"
    iconStyle={{ background: 'rgb(137, 46, 255)', color: '#fff' }}
    icon={<AcademicCapIcon />}
  >
    <h3 className="vertical-timeline-element-title">Aditya Academy Senior Secondary</h3>
    <h4 className="vertical-timeline-element-subtitle">Kolkata,WB</h4>
    <p>
      High School
    </p>
  </VerticalTimelineElement>
    
  </VerticalTimeline></div>
  )
}

export default Timeline