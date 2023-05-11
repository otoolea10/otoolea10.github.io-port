import styled from "styled-components";
import CityScape from "../../../public/assets/images/backgrounds/city-scape.png";

const HomeStyles = styled.div`
  background-image: url(${CityScape});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  img {
    display: block;
    margin: auto;
    width: 53em;
    height: 33em;
  }
  .title-container {
    transform: translateY(-30em);
    z-index: 999;
    color: white;
    width: 50em;
    margin: auto;
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
