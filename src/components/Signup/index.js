import React from "react";
import useForm from "./useForm";
import validate from "./ValidatesInfo";

const Index = () => {
  const { handleChange, values, handleSubmit, errors } = useForm(validate);

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
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && (
            <p className="error-message">{errors.password}</p>
          )}
          <input
            type="password"
            name="password2"
            placeholder="Confirm your password"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && (
            <p className="error-message">{errors.password2}</p>
          )}
          <div>
            <button type="submit">Continue to Wrapbook</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Index;
