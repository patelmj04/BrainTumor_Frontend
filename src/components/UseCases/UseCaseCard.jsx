import React from "react";
import './UseCaseCard.css';

const UseCaseCard = ({ image, title, description, learnMoreIcon }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="cardImage" />
      <h3 className="cardTitle">
        {title}
        <br />
        <span style={{ fontWeight: 400 }}>{description}</span>
      </h3>
      <div className="learnMore">
        <div className="learnMoreText">Learn more</div>
        <img src={learnMoreIcon} alt="" className="learnMoreIcon" />
      </div>
    </div>
  );
};

export default UseCaseCard;
