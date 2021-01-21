import React from "react";
import Navbar from "../components/Navbar";

const LoggedOutLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default LoggedOutLayout;
