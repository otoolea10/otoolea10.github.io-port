import styled from "styled-components";
import CityScape from "../../../public/assets/images/backgrounds/city-scape.png";

const HomeStyles = styled.div`
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
  .title-container {
    transform: translateY(-70vh);
    z-index: 999;
    color: white;
  }
  h1 {
    font-size: 70px;
    text-align: center;
  }
  h2 {
    font-size: 30px;
    text-align: center;
  }
`;
export default HomeStyles;
