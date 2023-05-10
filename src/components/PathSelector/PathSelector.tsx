import React from "react";
import { useNavigate } from "react-router-dom";
import Arrow from "../../../public/assets/images/backgrounds/arrow.svg";
import PathSelectorStyles from "./PathSelectorStyles";
const PathSelector = () => {
  const navigate = useNavigate();
  const handleGoToAbout = () => navigate("/about");
  const handleGoToCV = () => navigate("/cv");
  const handleGoToProjects = () => navigate("/projects");
  const handleGoToMystery = () => navigate("/mystery");
  return (
    <PathSelectorStyles>
      <div className="up-arrow" onClick={handleGoToAbout}>
        <h2>About</h2>
        <img src={Arrow} />
      </div>
      <div className="left-arrow" onClick={handleGoToCV}>
        <img src={Arrow} />
      </div>
      <div className="left-arrow-text" onClick={handleGoToCV}>
        <h2>CV</h2>
      </div>

      <div className="down-arrow" onClick={handleGoToMystery}>
        <img src={Arrow} />
        <h2>???</h2>
      </div>
      <div className="right-arrow" onClick={handleGoToProjects}>
        <img src={Arrow} />
      </div>
      <div className="right-arrow-text" onClick={handleGoToProjects}>
        <h2>Projects</h2>
      </div>
    </PathSelectorStyles>
  );
};
export default PathSelector;
