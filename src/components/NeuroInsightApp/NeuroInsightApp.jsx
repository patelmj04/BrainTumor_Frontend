import React from "react";
import Header from "../Header/Header";
// import SubNavigation from "../SubNavigation/SubNavigation";
import HeroSection from "../HeroSection/HeroSection";
import InfoSection from "../InfoSection/InfoSection";
import "./NeuroInsightApp.css";
import UseCases from '../UseCases/UseCases';

const NeuroInsightApp = () => {
  return (
    <div className="app">
      <Header />
      {/* <SubNavigation /> */}
      <main className="mainContent">
        <HeroSection />
        <InfoSection />
        <UseCases/>
      </main>
    </div>
  );
};

export default NeuroInsightApp;
