import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import classes from "Progress.scss";
import { Progress as BsProgress } from "reactstrap";

const Progress = (props) => {
  const { children, slim, className, ...otherProps } = props;
  const progressClass = classNames(className, { [classes["slim"]]: slim });

  return (
    <BsProgress className={progressClass} {...otherProps}>
      {!slim && children}
    </BsProgress>
  );
};

Progress.propTypes = {
  slim: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

export { Progress };
