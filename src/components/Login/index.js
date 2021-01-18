import React from "react";
import "./Login.scss";

const Login = () => {
  return (
    <section className="logged-out-page">
      <div className="login-container">
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
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
