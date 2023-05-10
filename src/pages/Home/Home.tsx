import React, { useEffect } from "react";
import square from "../../../public/assets/images/backgrounds/square.svg";
import HomeStyles from "./HomeStyles";
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        navigate("/routes");
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <HomeStyles>
      <img src={square} />
      <div className="title-container">
        <Typewriter
          options={{ delay: 25, cursor: ">" }}
          onInit={(typewriter) => {
            typewriter.typeString("<h1>Amy O'Toole</h1>").pauseFor(500).start();
            typewriter.typeString("<h2>Biker</h2>").pauseFor(500).start();
            typewriter.typeString("<h2>Gamer</h2>").pauseFor(500).start();
            typewriter
              .typeString("<h2>Software Engineer</h2>")
              .pauseFor(500)
              .start();
            typewriter
              .typeString("<h2>Press [Enter] to start </h2>")
              .pauseFor(500)
              .start();
          }}
        />
      </div>
    </HomeStyles>
  );
};

export default Home;
