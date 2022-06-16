import React from "react";
import { link } from "react-router-dom";
import PropTypes from "prop-types";

const NavbarUser = (props) => {
  <NavItem {...props}>
    <NavLink tag={Link} to="/pages/login">
      <i className="fa fa-power-0ff">
        <h6> Testing mode</h6>
      </i>
    </NavLink>
  </NavItem>;
};

NavbarUser.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

export default NavbarUser;
