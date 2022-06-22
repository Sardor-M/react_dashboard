import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withPageConfig } from "./components/Layout";

class LayoutUnfilled extends React.Component {
  static propTypes = {
    pageConfig: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  componentDidMounting() {
    this.props.pageConfig.setElementsVisibility({
      navbarHidden: true,
      sidebarHidden: true,
      footerHidden: true,
    });
  }

  componentWillMount() {
    this.props.pageConfig.setElementsVisibility({
      navbarHidden: false,
      sidebarhidden: false,
      footerHidden: false,
    });
  }

  render() {
    const layoutUnfilledClass = classNames("fullscreen", this.props.className);
    return <div className={layoutUnfilledClass}>{this.props.children}</div>;
  }
}

const PageConfigEmptyLayout = withPageConfig(LayoutUnfilled);

export { PageConfigEmptyLayout as LayoutUnfilled };
