import React from "react";
import { withPageConfig } from "./layout";
import { NavLink } from "reactstrap";
import PropTypes from "prop-types";

const SidebarTrigger = (props) => {
  const { tag: Tag, pageConfig, ...otherProps } = props;
  return (
    <Tag
      onClick={() => {
        props.pageConfig.toggleSidebar();
        return false;
      }}
      active={Tag !== "a" ? !pageConfig.sidebarCollapsed : null}
      {...otherProps}
    >
      {props.children}
    </Tag>
  );
};

SidebarTrigger.propTypes = {
  tag: PropTypes.any,
  children: PropTypes.node,
  pageConfig: PropTypes.object,
};

export default SidebarTirgger;
