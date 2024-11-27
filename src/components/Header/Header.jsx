import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import NavigationPill from "../NavigationPill/NavigationPill";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">
        <Link to="/app" className="logoTextLink">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7e71a04a96f2f2092e9d0f4e0b2b2af839c251138708449246ddfca081c0889?placeholderIfAbsent=true&apiKey=8d452d1644444e399eb08835def2295f"
            alt="Neuro Insight Logo"
            className="logo"
          />
          <div className="brandName">Neuro Insight</div>
        </Link>
      </h1>
      <nav className="navigation">
        <Link to="/signin">
          <NavigationPill text="Sign In" />
        </Link>
        <Link to="/register" className="registerLink">
          <NavigationPill text="Register" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
