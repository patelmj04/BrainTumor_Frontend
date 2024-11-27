import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="heroSection">
      <div className="content">
        <h2 className="title">
          Welcome to NeuroInsight: Advanced Brain Tumor Detection
        </h2>
      </div>
      <div className="imageWrapper">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3869ab0ab8b0edf1db6b59139a234fe382a566452a7b2125e75d96a583a82032?placeholderIfAbsent=true&apiKey=8d452d1644444e399eb08835def2295f"
          alt="Brain scan visualization"
          className="mainImage"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/35ec2ed3a425c37fbd786446fb9e690eebd6f8a31af2e761e0e9100c98f6a3a9?placeholderIfAbsent=true&apiKey=8d452d1644444e399eb08835def2295f"
          alt=""
          className="decorativeImage"
        />
      </div>
    </section>
  );
};

export default HeroSection;
