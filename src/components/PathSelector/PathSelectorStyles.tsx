import styled from "styled-components";

const PathSelectorStyles = styled.div`
  display: grid;
  width: 50vw;
  grid-template-columns: 5vw 7vw 5vw 7vw 5vw;
  transform: translateX(10vw);
  img {
    height: 50px !important;
  }
  .up-arrow {
    text-align: center;
    grid-column: 3;
  }
  .right-arrow {
    text-align: center;
    grid-column: 4;
    grid-row: 2;
  }
  .right-arrow img {
    transform: rotate(90deg);
  }
  .right-arrow-text {
    grid-column: 5;
    grid-row: 2;
  }
  .down-arrow {
    text-align: center;
    grid-column: 3;
    grid-row: 3;
  }
  .down-arrow img {
    transform: rotate(180deg);
  }
  .left-arrow {
    text-align: center;
    grid-column: 2;
    grid-row: 2;
  }
  .left-arrow img {
    transform: rotate(-90deg);
  }
  .left-arrow-text {
    grid-column: 1;
    grid-row: 2;
    text-align: right;
  }
`;
export default PathSelectorStyles;
