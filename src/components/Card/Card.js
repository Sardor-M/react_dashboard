import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import classes from "Card.scss";
import { Card as BsCard } from "reactstrap";

const Card = (props) => {
  const { children, type, color, className, ...otherProps } = props;
  const cardClass = classNames(
    className,
    classes[`custom-card`],
    classes[`custom-card--${type}`],
    color && classes[`custom-card--color-${color}`]
  );

  return (
    <BsCard className={cardClass} {...otherProps}>
      {children}
    </BsCard>
  );
};

Card.propTypes = {
  ...BsCard.propTypes,
  type: PropTypes.string,
  color: PropTypes.string,
};

Card.defaultProps = {
  type: null,
  color: null,
};
export { Card };
