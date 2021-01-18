import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <Menu secondary id="navbar" className="desktopNav">
      <Menu.Item>
        <a href="/" className="home-logo">
          Wrapbook
        </a>
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item as={NavLink} exact to="/" name="home" />
        <Menu.Item as={NavLink} to="/link" name="link" />
        <Menu.Item as={NavLink} to="/settings" name="settings" />
        <Menu.Item as={NavLink} to="/profile" name="logout" />
      </Menu.Menu>
    </Menu>
  );
};

export default Nav;
