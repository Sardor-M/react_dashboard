import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, SidebarCatch } from "./components";
import { NavbarMessages } from "./NavbarMessages";
import { NavbarUser } from "./NavbarUser";

export const Sidebar1Navbar = () => (
  <Navbar light expand="xs" fluid>
    <Nav navbar>
      <NavItem className="m1-3">
        <SidebarCatch />
      </NavItem>
      <NavItem className="navbar-brand h5 mb-0 d-lg-none">
        <Link to="/">react.bs5</Link>
      </NavItem>
    </Nav>
  </Navbar>
);

export default Sidebar1Navbar;
