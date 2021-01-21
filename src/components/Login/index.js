import React from "react";
import "./Login.scss";
import SectionHeader from "../SectionHeader";

const Login = () => {
  return (
    <div className="page-container">
    <section className="logged-out-page">
      <div className="login-container">
        <SectionHeader
          header="Log Into Wrapbook"
          description="Tackle timecards, payroll, and insurance with Wrapbook, a powerful and
          easy to use platform for managing productions."
        />
        <div className="section-header">
          <h1 className="header">Log Into Wrapbook</h1>
          <p className="subhead">
            Tackle timecards, payroll, and insurance with Wrapbook, a powerful
            and easy to use platform for managing productions.
          </p>
        </div>
        <form className="form login-form">
          <div className="form-group">
            <label>Email</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" />
          </div>
          <div>
              className="form-button"
          </div>
        </form>
      </div>
    </section>
    </div>
  );
};

export default Login;
