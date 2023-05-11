import React from "react";
import Timeline from "../../components/Timeline/Timeline";
import timelineData from "../../components/Timeline/timelineData.json";
import ProjectsStyles from "./ProjectsStyles";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import cubeBackground from "../../../public/assets/images/backgrounds/triangle-background.png";
const Projects = () => {
  return (
    <ProjectsStyles>
      <HeroBanner heroBannerImage={cubeBackground} heroBannerHeading="Projects" />
      <Timeline items={timelineData.Timeline} />
    </ProjectsStyles>
  );
};
export default Projects;
