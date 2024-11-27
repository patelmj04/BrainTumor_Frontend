import React from "react";
import "./InputField.css"; // Updated import for the simple CSS file

function InputField({ label, type, placeholder }) {
  return (
    <div className="inputGroup">
      <label className="inputLabel">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="inputField"
        aria-label={label}
      />
    </div>
  );
}

export default InputField;
