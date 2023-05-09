import React from "react";
import CVCardStyles from "./CVCardStyles";

interface CVCardProps {
  title?: string;
  list: string[];
}

const CVCard = ({ title, list }: CVCardProps) => {
  return (
    <CVCardStyles>
      <div className="title-container">
        <h3>{title}</h3>
        <ul>
          {list.map((text) => (
            <li>{text}</li>
          ))}
        </ul>
      </div>
    </CVCardStyles>
  );
};
export default CVCard;
