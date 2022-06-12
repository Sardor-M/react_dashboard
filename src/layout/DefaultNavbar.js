import React from "react";
import { Link } from "react-router-dom";
import { NavbarMessages } from "./NavbarMessages";
import { NavbarUser } from "./NvabrUser";
import { LogoColored } from "./routes/LogoColored";
import { Navbar, Nav, NavItem, SidebarTrigger } from "./components";

export const DefaultNavbar = () => (
  <Navbar light expand="xs fluid">
    <Nav navbar>
      <NavItem className="m-1">
        <SidebarTrigger />
      </NavItem>
      <NavItem className="navbar-brand d-logo-none">
        <link to="/">
          <LogoColored />
        </link>
      </NavItem>
      <NavItem className="d-none d-md-block">
        <span className="navbar-text">
          <link to="/">
            <i className="fa fa-home"></i>
          </link>
        </span>
      </NavItem>
    </Nav>
  </Navbar>
);
