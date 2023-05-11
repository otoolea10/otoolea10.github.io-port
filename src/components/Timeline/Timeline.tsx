import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
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
      <VerticalTimeline lineColor={"#4D5866"}>
        {items.map(({ projectTitle, projectDate, projectDetails }) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            key={projectDate}
            contentStyle={{
              background: "#F9F9F9",
              color: "black",
              borderTop: "5px solid #4D5866"
            }}
            contentArrowStyle={{
              borderRight: "10px solid  #4D5866"
            }}
            date={projectDate}
            iconStyle={{ background: "#4D5866", color: "#4D5866" }}
          >
            <h4 className="vertical-timeline-element-subtitle">{projectTitle}</h4>
            <p>{projectDetails}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </TimelineStyles>
  );
};
export default Timeline;
