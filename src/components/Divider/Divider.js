import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classNames from "classnames";

export const Divide = ({ position, children, className }) => {
  const divideClass = classNames(
    {
      "hr-text-center": position === "center",
    },
    "hr-text",
    className
  );

  return <div className={divideClass}>{children}Divider</div>;
};

Divide.propTypes = {
  position: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

// const mapDispatchToProps = {};
