import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerColumn">
        <h2 className="footerLogo">
          <span style={{ fontWeight: 636, color: "#351f65" }}>
            Neuro Insight
          </span>
        </h2>
        <div className="footerContent">
          <div className="socialIcons">
            <span className="symbol"></span>
            <span className="symbol"></span>
            <span className="symbol"></span>
            <span className="symbol"></span>
          </div>
          <address className="address">
            Headquarters
            <br />
            Teladoc Health, Inc.
            <br />
            2 Manhattanville Rd.
            <br />
            Purchase, NY 1057
          </address>
          <p className="slogan">
            Empowering all people
            <br />
            everywhere to live
            <br />
            their healthiest lives.
          </p>
          <p className="copyright">© 2024 Teladoc Health, Inc.</p>
          <p className="productCode">PL015968.A</p>
        </div>
      </div>
      <nav className="helpfulLinks">
        <ul className="linksList">
          <li className="linksTitle">Helpful Links</li>
          <li className="link">Contact Us</li>
          <li className="blogLink">
            <span>Blog</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a7a1daf15bb64e7996c95a30c72f081bb3ff2446ddc5e0cce3bc2af3d65a5ed?placeholderIfAbsent=true&apiKey=8d452d1644444e399eb08835def2295f"
              alt=""
              className="blogIcon"
            />
          </li>
          <li className="link">FAQs</li>
          <li className="link">
            Legal, Privacy &<br />
            Compliance
          </li>
          <li className="link">Community Guidelines</li>
        </ul>
        <div className="certifications">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7badb008d2622aed0c83545378126811ef49549a3c3e3b7c00427d57dbd03796?placeholderIfAbsent=true&apiKey=8d452d1644444e399eb08835def2295f"
            alt="Certification 1"
            className="certificationImage"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a61488f2949ed3f174aed3a2fa8b7fbd7e4bc59167ba8b2e07d8537117360fd8?placeholderIfAbsent=true&apiKey=8d452d1644444e399eb08835def2295f"
            alt="Certification 2"
            className="certificationImage"
          />
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
