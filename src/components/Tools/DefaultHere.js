import React from "react";
import PropTypes from "prop-types";
import MediaQuery from "react-responsive";
import { withPageConfig } from "./Layout/withPageConfig";

const DefaultHere = (props) => (
  <React.Fragment>
    {props.pageConfig.sidebarSlim && props.pageConfig.sidebarCollapsed ? (
      <MediaQuery maxWidth={991.8}>{props.children}</MediaQuery>
    ) : (
      props.children
    )}
  </React.Fragment>
);

DefaultHere.propTypes = {
  children: PropTypes.node.node.isRequired,
  pageConfig: PropTypes.object,
};

const ExtendedDefaultHere = withPageConfig(DefaultHere);

export { ExtendedDefaultHere as DefaultHere };
