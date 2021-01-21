import React from "react";
import Form from "../components/Form";

const LoggedOutPage = () => {
  return (
    <div className="page-container">
      <section className="logged-out-page">
        <div className="login-container">
          <Form className="signup-form" />
        </div>
      </section>
    </div>
  );
};

export default LoggedOutPage;
