import React from 'react';
import './UseCases.css'; // Importing the plain CSS file
import UseCaseCard from './UseCaseCard';
import CarouselControls from './CarouselControls';
import Footer from './Footer';

const useCases = [
  {
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c9948101467f1f5a8e436c62772f0452929b1c992b2382c4cffdf3a9c70c5630?placeholderIfAbsent=true&apiKey=8d452d1644444e399eb08835def2295f',
    title: 'Devices',
    description: 'Connect patients and care teams with devices that support point-of-care visits and clinical collaboration',
    learnMoreIcon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/13608046722c434dcf99ea9cdaf87f4ebc2c9dc6e3a5f3ac6ea76f0cb143fa47?placeholderIfAbsent=true&apiKey=8d452d1644444e399eb08835def2295f'
  },
  {
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b76ab6cb1b2d3eee3f65f89228be77bf765ee8530baf18a9612242a00a26e0b2?placeholderIfAbsent=true&apiKey=8d452d1644444e399eb08835def2295f',
    title: 'Inpatient services',
    description: 'Innovative solutions that enable virtual nursing, critical care, hospitalists and other use cases',
    learnMoreIcon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f8889de504c9a7e3f9d2696916c10c78d69b0c58f713572d9e0606869fd57707?placeholderIfAbsent=true&apiKey=8d452d1644444e399eb08835def2295f'
  },
  {
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/98a7e402a0e01ad0998daf9f538cf2b945bc6209da403c60fc561165e862eca4?placeholderIfAbsent=true&apiKey=8d452d1644444e399eb08835def2295f',
    title: 'Emergency Services',
    description: 'Facilitate collaboration quickly with virtual stroke, neonatology and behavioral health solutions.',
    learnMoreIcon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/95ebff2e492e1c44838fad352764846c45b8fd7c27a54bf8bd59ed916556f8b9?placeholderIfAbsent=true&apiKey=8d452d1644444e399eb08835def2295f'
  }
];

const UseCases = () => {
  return (
    <section className="container">
      <div className="background">
        <div className="content">
          <h1 className="title">
            Use cases across <br /> the care continuum
          </h1>
          <div className="cardContainer">
            <div className="cardGrid">
              {useCases.map((useCase, index) => (
                <div key={index} className="cardColumn">
                  <UseCaseCard {...useCase} />
                </div>
              ))}
            </div>
          </div>
          <CarouselControls 
            leftArrow="https://cdn.builder.io/api/v1/image/assets/TEMP/e2b8ff460547ab5a23fa4f5b641bfdbd8f3f7070c3033e02ce1959305d120353?placeholderIfAbsent=true&apiKey=8d452d1644444e399eb08835def2295f" 
            rightArrow="https://cdn.builder.io/api/v1/image/assets/TEMP/1bc396ba84ef7486f87f874e8ddb1524955e2d032f0cfe4ad4309900a9957898?placeholderIfAbsent=true&apiKey=8d452d1644444e399eb08835def2295f" 
          />
        </div>
      </div>
      <Footer />
      <div className="gradient" />
    </section>
  );
};

export default UseCases;
