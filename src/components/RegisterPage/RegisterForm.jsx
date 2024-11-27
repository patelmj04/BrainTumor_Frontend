import React from "react";
import InputField from "./InputField";
import "./RegisterForm.css"; // Updated import for the simple CSS file
import { Link } from "react-router-dom";

function RegisterForm() {
  const formFields = [
    { label: "Username", type: "text", placeholder: "Enter Username" },
    { label: "Password", type: "password", placeholder: "Enter Password" },
    {
      label: "Confirm Password",
      type: "password",
      placeholder: "Confirm Password",
    },
  ];

  return (
    <form className="registerForm">
      <h2 className="formTitle">REGISTER</h2>
      {formFields.map((field, index) => (
        <InputField key={index} {...field} />
      ))}
      <p className="signInPrompt">Sign in to continue!</p>
      <button type="submit" className="signInButton">
        <Link to="/signin">
        <span className="buttonText">Sign in</span>
        </Link>
      </button>
    </form>
  );
}

export default RegisterForm;
