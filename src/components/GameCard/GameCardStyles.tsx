import styled from "styled-components";
import CityScape from "../../../public/assets/images/backgrounds/city-scape.png";
const GameCardStyles = styled.div`
  background-image: url(${CityScape});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 90vh;

  .square {
    padding-top: 5rem;
    display: block;
    margin: auto;
    width: 53em;
    height: 33em;
  }
  .question-container {
    transform: translateY(-30em);
    margin: auto;
    width: 50vw;
    z-index: 999;
    color: white;
    padding: 0 2rem;
  }
  h2,
  h3 {
    text-align: center;
  }
`;
export default GameCardStyles;
