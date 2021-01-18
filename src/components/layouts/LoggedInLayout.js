import React from "react";
import LoggedInNav from "../Navbar/LoggedInNav.js";

const LoggedInLayout = ({ children }) => {
  return (
    <>
      <LoggedInNav />
      {children}
    </>
  );
};

export default LoggedInLayout;
