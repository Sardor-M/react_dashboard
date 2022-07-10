import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, SidebarCatch } from "./components";
import { NavbarMessages } from "./NavbarMessages";
import { NavbarUser } from "./NavbarUser";
import { NavbarActivityFeed } from "./NavbarActivityFeed";

export const Sidebar1Navbar = () => (
  <Navbar light expand="xs" fluid>
    <Nav navbar></Nav>
    <Nav navbar className="ml-auto">
      <NavbarActivityFeed />
      <NavbarMessages className="ml-2" />
      <NavbarUser className="ml-2" />
    </Nav>
  </Navbar>
);

export default Sidebar1Navbar;
