import React from "react";
import Navbar from "../Navbar";

const LoggedOutLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default LoggedOutLayout;
