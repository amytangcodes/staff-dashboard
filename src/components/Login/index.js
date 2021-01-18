import React from "react";
import "./Login.scss";

const Login = () => {
  return (
    <section className="login-page">
      <div className="login-container">
        <div className="section-header">
          <h1 className="header">Get Started with Wrapbook</h1>
          <p className="subhead">
            Tackle timecards, payroll, and insurance with Wrapbook, a powerful
            and easy to use platform for managing productions.
          </p>
        </div>
        <form>
          <label>
            <p>Username</p>
            <input type="text" />
          </label>
          <label>
            <p>Password</p>
            <input type="password" />
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
          
        </form>
      </div>
    </section>
  );
};

export default Login;
