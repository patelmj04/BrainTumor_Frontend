import React from "react";
import './CarouselControls.css';

const CarouselControls = ({ leftArrow, rightArrow }) => {
  return (
    <div className="carouselControls">
      <img src={leftArrow} alt="Previous" className="carouselArrow" />
      <div className="carouselDots">
        <div className="carouselDot carouselDotActive" />
        <div className="carouselDot carouselDotInactive" />
        <div className="carouselDot carouselDotInactive" />
        <div className="carouselDot carouselDotInactive" />
      </div>
      <img src={rightArrow} alt="Next" className="carouselArrow" />
    </div>
  );
};

export default CarouselControls;
