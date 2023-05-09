import React from "react";
import Arrow from "../../../public/assets/images/backgrounds/arrow.svg";
import PathSelectorStyles from "./PathSelectorStyles";
const PathSelector = () => {
  return (
    <PathSelectorStyles>
      <div className="up-arrow">
        <h2>About</h2>
        <img src={Arrow} />
      </div>
      <div className="left-arrow">
        <img src={Arrow} />
      </div>
      <div className="left-arrow-text">
        <h2>CV</h2>
      </div>

      <div className="down-arrow">
        <img src={Arrow} />
        <h2>???</h2>
      </div>
      <div className="right-arrow">
        <img src={Arrow} />
      </div>
      <div className="right-arrow-text">
        <h2>Projects</h2>
      </div>
    </PathSelectorStyles>
  );
};
export default PathSelector;
