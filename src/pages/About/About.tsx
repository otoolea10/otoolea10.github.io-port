import React from "react";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import Stone from "../../../public/assets/images/backgrounds/stone-background.jpg";
import SkinnyBanner from "../../components/SkinnyBanner/SkinnyBanner";
import AboutStyles from "./AboutStyles";
const About = () => {
  return (
    <AboutStyles>
      <HeroBanner heroBannerImage={Stone} heroBannerText="About Me" />
      <SkinnyBanner bannerHeading="About" />
      <div className="text-container">
        <p>
          I am a passionate Software Developer and Scrum Master with 4+ years of
          experience working within Agile Development teams. My expertise
          focuses on developing and maintaining responsive web applications
          using the latest frontend technologies.
        </p>
        <p>
          My experience within Vodafone has taught me how to work efficiently
          within enterprise environments especially with cross-functional teams.
          Currently, I am trusted to deliver high-quality code and lead
          development teams to deliver projects on-time.
        </p>
        <p>
          Furthermore, my previous experience in public speaking equipped me
          with valuable soft skills and a passion for STEM subjects. During
          these talks I addressed audiences ranging from 300 to 5000 people and
          this provided me the ability to adjust how I present to suit the
          audience size and knowledge on subject matters.
        </p>
      </div>

      <SkinnyBanner bannerHeading="GitHub Contributions" />
    </AboutStyles>
  );
};
export default About;
