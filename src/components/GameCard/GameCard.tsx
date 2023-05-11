import React, { useEffect } from "react";
import square from "../../../public/assets/images/backgrounds/square.png";
import Typewriter from "typewriter-effect";
import PathSelector from "../PathSelector/PathSelector";
import GameCardStyles from "./GameCardStyles";
import { useNavigate } from "react-router-dom";

const GameCard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
          navigate("/about");
          break;
        case "ArrowRight":
          navigate("/projects");
          break;
        case "ArrowDown":
          navigate("/mystery");
          break;
        case "ArrowLeft":
          navigate("/cv");
          break;
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [navigate]);
  return (
    <GameCardStyles>
      <img src={square} className="square" alt="game-card" />
      <div className="question-container">
        <Typewriter
          options={{ delay: 25, cursor: ">" }}
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "<h2>You find yourself in a clearing. There are 4 paths in front of you which way would you like to go?</h2>"
              )
              .pauseFor(500)
              .start();
            typewriter
              .typeString("<h3>(Hint: Use keyboard arrow keys) </h3>")
              .pauseFor(500)
              .start();
          }}
        />
      </div>

      <PathSelector />
    </GameCardStyles>
  );
};
export default GameCard;
