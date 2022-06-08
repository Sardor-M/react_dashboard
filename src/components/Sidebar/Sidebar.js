import React from "react";
import PropTypes from "prop-types";
import OuterClick from "./OuterClick";
import { withPageConfig } from "./layout";
import { SidebarContent } from "./SidebarContent";

const Sidebar = (props) => (
  <React.Fragment>
    {}
    <OuterClick
      active={
        !props.pageConfig.sidebarCollapsed &&
        (props.pageConfig.screenSize === "xs" ||
          props.pageConfig.screenSize === "sm" ||
          props.pageConfig.screenSize === "md")
      }
      onClickOutside={() => props.pageConfig.toggleSidebar()}
    >
      <SidebarContent {...props} />
    </OuterClick>
  </React.Fragment>
);

Sidebar.proTypes = {
  collapsed: PropTypes.bool,
  pageConfig: PropTypes.object,
};

const cfgSidebar = withPageConfig(Sidebar);

export { cfgSidebar as Sidebar };
