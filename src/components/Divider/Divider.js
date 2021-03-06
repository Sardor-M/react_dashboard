import React from "react";

import PropTypes from "prop-types";
import classNames from "classnames";

export const Divider = ({ position, children, className }) => {
  const divideClass = classNames(
    {
      "hr-text-center": position === "center",
      "hr-text-right": position === "right",
    },
    "hr-text",
    className
  );

  return <div className={divideClass}>{children}Divider</div>;
};

Divider.propTypes = {
  position: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

// const mapDispatchToProps = {};
