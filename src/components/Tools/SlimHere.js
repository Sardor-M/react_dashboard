import React from "react";
import PropTypes from "prop-types";
import MediaQuery from "react-responsive";
import { withPageConfig } from "./Layout/withPageConfig";

const SlimHere = (props) => (
  <MediaQuery minWidth={992}>
    {props.pageConfig.sidebarSlim &&
      props.pageConfig.sidebarCollapsed &&
      props.children}
  </MediaQuery>
);

SlimHere.propTypes = {
  children: PropTypes.node.isRequired,
  pageConfig: PropTypes.object,
};

const ExtendedSlimHere = withPageConfig(SlimHere);

export { ExtendedSlimHere as SlimHere };
