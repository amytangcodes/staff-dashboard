import React from "react";

const NavbarLayout = ({ children }) => {
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

        {children}
      </div>
    </nav>
  );
};

export default NavbarLayout;
