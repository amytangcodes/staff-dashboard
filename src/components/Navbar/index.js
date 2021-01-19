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
            <NavLink className="nav-link" exact to="/" href="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/" href="/">
              Link
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login" href="/login">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/signup"
              aria-current="page"
              href="/signup"
            >
              Signup
            </NavLink>
          </li>
        </ul>
      </div>
    </NavbarLayout>
  );
};

export default Navbar;
