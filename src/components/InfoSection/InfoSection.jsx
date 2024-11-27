import React from "react";
import "./InfoSection.css";
import { Link } from "react-router-dom";

const InfoSection = () => {
  return (
    <section className="infoSection">
      <p className="description">
        Transforming brain health through technological innovation.
        NeuroInsight's AI-driven detection software enables swift, accurate
        diagnoses, improving patient lives and healthcare decisions.
      </p>
      <h3 className="callToAction">
        Early Detection Saves Lives – Get Your Results Instantly.
      </h3>
      <Link to='/braintumordetection'>
      <button className="uploadButton">Upload Now</button>
      </Link>
    </section>
  );
};

export default InfoSection;
