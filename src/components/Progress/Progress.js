import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import classes from "Progress.scss";
import { Progress as BsProgress } from "reactstrap";

const Progress = (props) => {
  const { children, className, ...otherProps } = props;
  const progressClass = classNames(className);

  return (
    <BsProgress className={progressClass} {...otherProps}>
      {children}
    </BsProgress>
  );
};

Progress.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Progress;
