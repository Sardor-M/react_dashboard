import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { MenuContext } from "./MenuContext";

class SidebarMenu extends React.Conponent {
  static propTypes = {
    children: PropTypes.node,
    pageConfig: PropTypes.object,
  };
  constructor(props) {
    super(props);
    this.state = {
      entries: (this.emtries = {}),
    };
  }
  addEntry(entry) {
    this.setState({
      entries: (this.emtries = {
        ...this.entries,
        [entry.id]: {
          open: false,
          active: false,
          ...entry,
        },
      }),
    });
  }
}

export default SidebarMenu;
