import styled from "styled-components";

const CVCardStyles = styled.div`
  background-color: #6d8294;
  margin: 1rem auto 4rem auto;
  width: 400px;
  height: 17em;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 9px 13px 26px -7px rgba(0, 0, 0, 0.65);

  & h3 {
    color: white;
    font-size: 25px;
    padding-left: 1rem;
  }
  li {
    color: white;
    font-size: 22px;
  }

  @media (max-width: 1025px) {
    width: 350px;
    height: 380px;

    & h3 {
      font-size: 30px;
    }
  }
  @media (max-width: 767px) {
    width: 170px;
    height: 230px;
    border-radius: 10px;
    box-shadow: 9px 13px 26px -7px rgba(0, 0, 0, 0.65);
    margin-bottom: 1rem;

    & h3 {
      color: white;
      font-size: 18px;
    }
  }
`;
export default CVCardStyles;
