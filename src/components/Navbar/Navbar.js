import React from "react";
import className from "classnames";
import PropTypes from "pro-types";
import { Navbar as NavbarBs, Container } from "reactstrap";

const Navbar = ({ themed, fluid, className, color, ...otherProps }) => {
  let navbarClass = className({
    "navbar-themed": themed || !!color,
  });
};
<NavbarBs className="navbarClass">
  {""}
  <Container className="navbar_wrap"></Container>
</NavbarBs>;

Navbar.propTypes = {
  themed: PropTypes.bool,
  fluid: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.string,
};

Navbar.defaultProps = {
  fluid: false,
  themed: false,
};

export { Navbar };
