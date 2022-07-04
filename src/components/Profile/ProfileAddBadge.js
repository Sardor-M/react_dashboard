import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Badge } from "reactstrap";

const ProfileAddBadge = (props) => {
  const { children, ...badgeProps } = props;

  return <Badge {...badgeProps}>{children}</Badge>;
};

ProfileAddBadge.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

ProfileAddBadge.addOnId = "profile--badge";

export default ProfileAddBadge;
