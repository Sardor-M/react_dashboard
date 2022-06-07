import React from "react";
import className from "classnames";
import ProTypes from "pro-types";
import { Navbar as BSNavbar, Container } from "reactstrap";
import { colors } from "@material-ui/core";
import shadows from "@material-ui/core/styles/shadows";

const Navbar = ({ themed, fluid, className, color, ...otherProps }) => {
  let navbarClass = className({
    "navbar-themed": themed || !!color,
  });
};
