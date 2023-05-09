import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TimelineStyles from "./TimelineStyles";
interface TimelineProps {
  items: Array<{
    projectTitle: string;
    projectDate: string;
    projectDetails: string;
  }>;
}
const Timeline = ({ items }: TimelineProps) => {
  // const items = timelineData.Timeline;
  return (
    <TimelineStyles>
      <VerticalTimeline>
        {items.map(({ projectTitle, projectDate, projectDetails }) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            key={projectDate}
            contentStyle={{ background: "rgb(77, 88, 102)", color: "#fff" }}
            contentArrowStyle={{
              borderRight: "10px solid  rgb(255, 255, 255)",
            }}
            date={projectDate}
            iconStyle={{ background: "rgb(77, 88, 102)", color: "#fff" }}
          >
            <h4 className="vertical-timeline-element-subtitle">
              {projectTitle}
            </h4>
            <p>{projectDetails}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </TimelineStyles>
  );
};
export default Timeline;
