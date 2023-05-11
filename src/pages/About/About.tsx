import React from "react";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import SkinnyBanner from "../../components/SkinnyBanner/SkinnyBanner";
import Line from "../../../public/assets/images/backgrounds/line-background.png";
import AboutStyles from "./AboutStyles";
import { useUserQuery } from "../../store/githubApi";
import GithubCalendar from "react-github-calendar";
const About = () => {
  const { data, isLoading } = useUserQuery("otoolea10");
  return (
    <AboutStyles>
      <HeroBanner heroBannerImage={Line} heroBannerHeading="About Me" />
      <SkinnyBanner bannerHeading="Overview" />
      <div className="text-container">
        <p>
          I am a passionate Software Developer and Scrum Master with 4+ years of experience working
          within Agile Development teams. My expertise focuses on developing and maintaining
          responsive web applications using the latest frontend technologies.
        </p>
        <p>
          My experience within Vodafone has taught me how to work efficiently within enterprise
          environments especially with cross-functional teams. Currently, I am trusted to deliver
          high-quality code and lead development teams to deliver projects on-time.
        </p>
        <p>
          Furthermore, my previous experience in public speaking equipped me with valuable soft
          skills and a passion for STEM subjects. During these talks I addressed audiences ranging
          from 300 to 5000 people and this provided me the ability to adjust how I present to suit
          the audience size and knowledge on subject matters.
        </p>
      </div>
      <SkinnyBanner bannerHeading="GitHub Contributions" />
      {!!data && !isLoading && (
        <div className="github-container">
          <img src={data.avatar_url} />
          <h2>{data.login}</h2>
        </div>
      )}
      <GithubCalendar username={"otoolea10"} colorScheme="light" />
    </AboutStyles>
  );
};
export default About;
