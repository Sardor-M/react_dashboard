import React from "react";
import PropTypes from "prop-types";
import className from "classnames";

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
