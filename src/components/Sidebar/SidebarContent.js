import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

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
}

export default SidebarContent;
