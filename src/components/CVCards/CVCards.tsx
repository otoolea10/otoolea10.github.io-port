import React from "react";
import CVCard from "./CVCard/CVCard";
import cvCardsData from "./CVCardsData.json";
import CVCardsStyles from "./CVCardsStyles";

interface CVCardsProps {
  cvCardDataStart?: number;
  cvCardDataEnd?: number;
}

const CVCards = ({ cvCardDataStart, cvCardDataEnd }: CVCardsProps) => {
  return (
    <CVCardsStyles>
      {cvCardsData.cvCards.slice(cvCardDataStart, cvCardDataEnd).map((card) => (
        <CVCard key={1} {...card} />
      ))}
    </CVCardsStyles>
  );
};
export default CVCards;
