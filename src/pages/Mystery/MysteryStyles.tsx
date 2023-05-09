import styled from "styled-components";
import CityScape from "../../../public/assets/images/backgrounds/city-scape.png";

const MysteryStyles = styled.div`
  background-image: url(${CityScape});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 90vh;
  img {
    display: block;
    margin: auto;
    width: 60vw;
    height: 100%;
  }
  .text-container {
    transform: translateY(-50vh);
    z-index: 999;
    color: white;
    width: 50%;
    text-align: center;
  }
  span {
    font-size: 30px;
  }
`;
export default MysteryStyles;
