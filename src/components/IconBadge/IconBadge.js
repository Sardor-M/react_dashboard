import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const IconBadge = (props) => {
  const { badge, children, className } = props;
  const adjustedBadge = React.cloneElement(badge, {
    className: classNames(badge.props.className, "icon-with-badge"),
  });
  const wrapClass = classNames(className, "icon-with-badge");
  return (
    <div className={wrapClass}>
      {children}
      {adjustedBadge}
    </div>
  );
};

IconBadge.propTypes = {
  badge: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
};

export { IconBadge};
