import styled from "styled-components";
import CityScape from "../../../public/assets/images/backgrounds/city-scape.png";

const MysteryStyles = styled.div`
  background-image: url(${CityScape});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  padding-top: 1rem;
  img {
    display: block;
    margin: auto;
    width: 53em;
    height: 33em;
  }
  .text-container {
    transform: translateY(-21em);
    z-index: 999;
    color: white;
    width: 45em;
    margin: auto;
    text-align: center;
  }
  .death-counter {
    display: block;
    width: 250px;
    height: 70px;
    background-color: black;
    opacity: 0.5;
    border-radius: 10px;
    margin-left: 80vw;
 
  }
  }
  .death-counter p {
    width: 80%;
    font-size: 25px;
    color: white;
    margin: auto;
    text-align: center;
    padding-top: 25px;
  }

  span {
    font-size: 30px;
  }
`;
export default MysteryStyles;
