import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignInPage.css";
import Header from "../../Header/Header";

const SignInPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // State for handling error messages
  const navigate = useNavigate();

  const handleSignIn = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Basic validation
    if (!username || !password) {
      setError("Username and password are required");
      return;
    }

    try {
      // Replace with your actual sign-in logic
      // For example, you might send a request to your authentication API
      const response = await fetch("/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Sign-in failed");
      }

      // Clear the error if sign-in is successful
      setError(null);
      // Navigate to the NeuroInsightApp page upon successful sign-in
      navigate('/app');
    } catch (error) {
      // Handle sign-in errors
      setError(error.message);
    }
  };

  return (
    <div className="signInPage">
      {/*<header className="header">*/}
        {/*<div className="logoContainer">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e02965a7fdeb2463ce8fd08da14adddc584b173ecc92e4fb9c29d6c6c81a07f3?placeholderIfAbsent=true&apiKey=8d452d1644444e399eb08835def2295f"
            className="logo"
            alt="NeuroInsight Logo"
          />
          <div className="brandName">
            <span style={{ fontWeight: 600, color: "rgba(53,31,101,1)" }}>
              Neuro Insight
            </span>
          </div>
        </div>
        <nav className="nav">
          <div className="navPill" />
          <a href="#register" className="registerLink">
            Register Now
          </a>
        </nav>
      </header>*/}
      <Header/>
      <main className="mainContent">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d731c959cb703364f6654a68070f607e2e0fcdda9474a2281e71819e2d283ac?placeholderIfAbsent=true&apiKey=8d452d1644444e399eb08835def2295f"
          className="backgroundImage"
          alt="Background image with abstract design"
        />
        <div className="signInContainer">
          <form className="signInForm" onSubmit={handleSignIn}>
            <h1 className="signInTitle">SIGN IN</h1>
            <div className="inputGroup">
              <label htmlFor="username" className="inputLabel">
                Username
              </label>
              <div className="inputField">
                <input
                  type="text"
                  id="username"
                  className="inputContent"
                  placeholder="Enter Username"
                  aria-label="Enter Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="inputGroup">
              <label htmlFor="password" className="inputLabel">
                Password
              </label>
              <div className="inputField">
                <input
                  type="password"
                  id="password"
                  className="inputContent"
                  placeholder="Enter Password"
                  aria-label="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <a href="#forgot-password" className="forgotPassword">
              Forgot Password
            </a>
            <p className="signUpPrompt">Don't have an account?</p>
            <div className="createAccountButton">
              <button type="submit" className="buttonContainer">
                <span className="buttonContent">Sign In</span>
              </button>
            </div>
            {error && <p className="error">{error}</p>} {/* Display error message */}
          </form>
        </div>
      </main>
    </div>
  );
};

export default SignInPage;
