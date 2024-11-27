import React from "react";

import Header from "../Header/Header";
import RegisterForm from "./RegisterForm";
import "./RegisterPage.css"; // Changed the import to the simple CSS file

function RegisterPage() {
  return (
    <main className="registerPage">
      <Header />
      <section className="registerSection">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/30947d4d4a1d40fd6d9cdce19370fab58827f4371629fc5c43de68c9f0b9ac38?placeholderIfAbsent=true&apiKey=8d452d1644444e399eb08835def2295f"
          alt="Background"
          className="backgroundImage"
        />
        <RegisterForm />
      </section>
    </main>
  );
}

export default RegisterPage;
