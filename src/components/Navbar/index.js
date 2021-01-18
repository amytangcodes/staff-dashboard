import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand home-logo" href="/">
          Wrapbook
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
        </button>

        <div
          className="collapse navbar-collapse navbar-menu"
          id="navbarToggler"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* If logged out/ or new user */}
            <li className="nav-item">
              <a className="nav-link" as={NavLink} href="/">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                as={NavLink}
                exact
                aria-current="page"
                href="/signup"
              >
                Signup
              </a>
            </li>
            {/* If logged in: */}
            <li className="nav-item">
              <a className="nav-link" as={NavLink} href="/dashboard">
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" as={NavLink} href="/settings">
                Settings
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" as={NavLink} href="/logout">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
