import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

import NavbarLayout from "../layouts/NavbarLayout.js";

const Navbar = () => {
  return (
    <NavbarLayout>
      <div className="collapse navbar-collapse navbar-menu" id="navbarToggler">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" as={NavLink} href="/">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" as={NavLink} href="/">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" as={NavLink} href="/settings">
              Settings
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" as={NavLink} href="/login">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </NavbarLayout>
  );
};

export default Navbar;
