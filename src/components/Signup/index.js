import React from "react";
import useForm from "./useForm";
import validate from "./ValidatesInfo";
import SectionHeader from "../SectionHeader";

const Index = ({ submitForm }) => {
  const {
    handleChange,
    values,
    handleSubmit,
    errors,
    submitDisabled,
  } = useForm(submitForm, validate);

  return (
    <>
      <SectionHeader
        header="Get Started with Staffbook"
        description="Tackle timecards, payroll, and insurance with Staffbook, a powerful and
          easy to use platform for managing productions."
      />

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
        {errors.password && <p className="error-message">{errors.password}</p>}
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
          <button
            type="submit"
            disabled={submitDisabled}
            className="form-button"
          >
            Continue to Staffbook
          </button>
        </div>
      </form>
    </>
  );
};

export default Index;
