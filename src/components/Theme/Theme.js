import React from "react";
import PropTypes from "prop-types";
import { Customer } from "./ThemeClass";

const Theme = ({ children, color, style }) => {
  const layoutTheme = `layout--theme--$ {style}--$ {color}`;
  return children(layoutTheme);
};
Theme.PropTypes = {
  chilren: PropTypes.func.isRequired,
  color: PropTypes.string,
  style: PropTypes.string,
};

const ContextTheme = (otherProps) => (
  <Customer>
    {(themeState) => <Theme {...{ ...themeState, ...otherProps }} />}
  </Customer>
);

export {ContextTheme as Theme };
