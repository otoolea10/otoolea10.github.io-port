import React from "react";
import Timeline from "../../components/Timeline/Timeline";
import timelineData from "../../components/Timeline/timelineData.json";
import ProjectsStyles from "./ProjectsStyles";
import SkinnyBanner from "../../components/SkinnyBanner/SkinnyBanner";
const Projects = () => {
  return (
    <ProjectsStyles>
      <SkinnyBanner bannerHeading="Projects" />
      <Timeline items={timelineData.Timeline} />
    </ProjectsStyles>
  );
};
export default Projects;
