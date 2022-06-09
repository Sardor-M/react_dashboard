import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Common from "./common";

export class SidebarContent extends React.Component {
  static propTypes = {
    slim: PropTypes.bool,
    collapsed: PropTypes.bool,
    pageConfig: PropTypes.object,
  };

  sidebarRef = React.createRef();

  constructor(props) {
    super(props);

    this.state = {
      entryAnimationFinished: false,
    };
  }
  componentDidMounting() {
    this.sidebarEntryAnimate = new Common.SidebarEntryAnimate();
    this.slimSidebarAnimate = new Common.SlimSidebarAnimate();
    this.slimMenuAnimate = new Common.SlimMenuAnimate();

    this.sidebarEntryAnimate.executeAnimation().then(() => {
      this.setState({ entryAnimationFinished: true });
    });
  }

  render() {
    const { pageConfig, collapsed, slim, children } = this.props;

    const sidebarClass = classNames("sidebar", {
      "sidebar--slim": slim || pageConfig.sidebarSlim,
      "sidebar--collapsed": collapsed || pageConfig.sidebarCollapsed,
      "sidebar--animate-entry-complete": this.state.entryAnimationFinished,
    });

    return (
      <div className={sidebarClass} ref={this.sidebarRef}>
        {children}
      </div>
    );
  }
}
