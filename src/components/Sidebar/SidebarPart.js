import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const SidebarPart = (props) => {
  const sectionClass = classNames(
    "sidebar_section",
    {
      "sidebar_section--fluid": props.fluid,
      "sidebar_section--cover": props.cover,
    },
    props.className
  );
  return <div className={sectionClass}>{props.children}</div>;
};

SidebarPart.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { SidebarPart };
