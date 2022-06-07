import React from "react";
import className from "classnames";
import ProTypes from "pro-types";
import { Navbar as NavbarBs, Container } from "reactstrap";
import { colors } from "@material-ui/core";
import shadows from "@material-ui/core/styles/shadows";

const Navbar = ({ themed, fluid, className, color, ...otherProps }) => {
  let navbarClass = className({
    "navbar-themed": themed || !!color,
  });
};
<NavbarBs className="navbarClass">
  {""}
  <Container className="navbar_wrap"></Container>
</NavbarBs>;

Navbar.proTypes = {
  themed: ProTypes.bool,
  fluid: ProTypes.bool,
  className: ProTypes.string,
  color: ProTypes.string,
};

Navbar.defaultProps = {
  fluid: false,
  themed: false,
};

export { Navbar };
