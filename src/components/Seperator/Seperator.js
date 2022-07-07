import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export const Seperator = ({ position, children, className }) => {
  const seperatorClass = classNames(
    {
      "hr-text-center": position === "center",
      "hr-text-left": position === "left",
    },
    "hr-text",
    className
  );

  return <div className={seperatorClass}>{children}</div>;
};

Seperator.propTypes = {
  position: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};
