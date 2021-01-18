import React, { useState } from "react";
import Signup from "./Signup";
import SignupSuccess from "./Signup/SignupSuccess";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>{!isSubmitted ? <Signup submitForm={submitForm} /> : <SignupSuccess />}</>
  );
};

export default Form;
