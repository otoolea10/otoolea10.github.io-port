import React, { useEffect, useState } from "react";
import square from "../../../public/assets/images/backgrounds/square.svg";
import Typewriter from "typewriter-effect";
import MysteryData from "./MysteryData.json";
import MysteryStyles from "./MysteryStyles";
import { useNavigate } from "react-router-dom";
const Mystery = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        navigate("/");
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <MysteryStyles>
      <img src={square} />
      <div className="text-container">
        <Typewriter
          options={{ delay: 25, cursor: ">" }}
          onInit={(typewriter) => {
            typewriter
              .typeString(
                `${MysteryData[Math.floor(Math.random() * MysteryData.length)]}`
              )
              .pauseFor(500)
              .start();
            typewriter
              .typeString("<p>Press [Enter] to return home </p>")
              .pauseFor(500)
              .start();
          }}
        />
      </div>
    </MysteryStyles>
  );
};
export default Mystery;
