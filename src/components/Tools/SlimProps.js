import React from "react";
import PropTypes from "prop-types";
import MatchMedia from "react-responsive";
import { withPageConfig } from "./components/Layout";

const SlimProps = (props) => {
  const { pageConfig, children, slimProps } = props;
  return (
    <React.Fragment>
      <MatchMedia minWidth={992}>
        {pageConfig.sidebarSlim && pageConfig.sidebarCollapsed
          ? React.Children.map(children, (child) =>
              React.cloneElement(child, slimProps)
            )
          : children}
      </MatchMedia>
      <MatchMedia maxWidth={990.2}>{children}</MatchMedia>
    </React.Fragment>
  );
};

SlimProps.propTypes = {
  children: PropTypes.node,
  pageConfig: PropTypes.object,
  slimProps: PropTypes.object,
  defaultProps: PropTypes.object,
};

const ExtendedSlimProps = withPageConfig(SlimProps);

export { ExtendedSlimProps as SlimProps };
