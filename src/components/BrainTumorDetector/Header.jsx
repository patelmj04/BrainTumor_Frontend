import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import NavigationPill from "../NavigationPill/NavigationPill";

const Header = () => {
  return (
    <header className="header">
      <div className="logoContainer">
        <Link to="/app" className="logoTextLink">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7e71a04a96f2f2092e9d0f4e0b2b2af839c251138708449246ddfca081c0889?placeholderIfAbsent=true&apiKey=8d452d1644444e399eb08835def2295f"
            alt="Logo representing Neuro Insight, a brain health application"
            className="logo"
          />
          <div className="brandName">Neuro Insight</div>
        </Link>
      </div>
      <nav className="nav">
        <Link to="/signin" aria-label="Sign In">
          <NavigationPill text="Sign In" />
        </Link>
        <Link to="/register" className="registerLink" aria-label="Register">
          <NavigationPill text="Register" />
        </Link>
      </nav>
      <div className="userInfo">
        <img src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png" alt="User Avatar" className="userAvatar" />
        <div className="greeting">Hello, User!</div>
      </div>
    </header>
  );
};

export default Header;
