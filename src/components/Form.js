import React, { Fragment, useState } from "react";
import Signup from "./Signup";
import SignupSuccess from "./Signup/SignupSuccess";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <Fragment>
      {!isSubmitted ? <Signup submitForm={submitForm} /> : <SignupSuccess />}
    </Fragment>
  );
};

export default Form;
