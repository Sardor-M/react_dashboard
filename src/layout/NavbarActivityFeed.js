import React from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import PropTypes from "prop-types";
import {
  UncontrolledDropdown,
  DropdownToggle,
  IconWithBadge,
  Badge,
  ExtendedDropdown,
} from "./components";

const iconActivity = [
  <span className="fa-stack fa-lg fa-fw d-flex mr-3">
    <i className="fa fa-circle fa-fw fa-stack-2x text-success"></i>
    <i className="fa fa-check fa-stack-1x fa-fw text-white"></i>
  </span>,
];

const NavbarActivityFeed = (props) => (
  <UncontrolledDropdown nav inNavbar {...props}>
    <DropdownToggle nav>
      <IconWithBadge
        badge={
          <Badge pill color="primary">
            10
          </Badge>
        }
      >
        <i className="fa fa-bell -o fa-fw" />
      </IconWithBadge>
    </DropdownToggle>
    <ExtendedDropdown right>
      <ExtendedDropdown.Section className="d-flex justify-content-between align-items-center">
        <h5 className="mb-1">Activity Feed</h5>
        <Badge pill>5</Badge>
      </ExtendedDropdown.Section>
    </ExtendedDropdown>
  </UncontrolledDropdown>
);
NavbarActivityFeed.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

export default NavbarActivityFeed;
