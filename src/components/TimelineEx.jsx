/* eslint-disable no-unused-vars */
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  BuildingOffice2Icon,
  ChartBarSquareIcon, BuildingOfficeIcon
} from "@heroicons/react/24/outline";

function TimelineEx() {
  return (
    <div>
      <VerticalTimeline lineColor="purple">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(137, 46, 255)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(137, 46, 255)" }}
          date="Aug,2023 - May,2024"
          iconStyle={{ background: "rgb(137, 46, 255)", color: "#fff" }}
          icon={<BuildingOffice2Icon />}
        >
          <h3 className="vertical-timeline-element-title">SDE Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">
            IEMA Research & Development Pvt. Ltd.
          </h4>
          <p>
            Worked on real-life projects focusing on front-end development and
            User experience.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{background: 'rgb(239, 222, 255)'}}
          date="2022 - present"
          iconStyle={{ background: "rgb(137, 46, 255)", color: "#fff" }}
          icon={<ChartBarSquareIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Team Lead of Art & Design
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            IIC(Institute's Innovation Council), IEM
          </h4>
          <p>Creative Direction, Event Organisation</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(137, 46, 255)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(137, 46, 255)" }}
          date="May,2023 - Jul,2024"
          iconStyle={{ background: "rgb(137, 46, 255)", color: "#fff" }}
          icon={<BuildingOfficeIcon />}
        >
          <h3 className="vertical-timeline-element-title">AI ML Virtual Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">
            AICTE NEAT
          </h4>
          <p>
            Worked on real-life projects and a vividly learning experience focusing on AWS Servies.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default TimelineEx;
