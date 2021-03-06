import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import classes from "./Rating.scss";

export const Rating = (props) => {
  const {
    className,
    max: maxStars,
    at: CurrentStars,
    starColor,
    onSelect,
    ...otherProps
  } = props;

  const ratingClass = classNames(classes.Rating, className);
  const isInteractive = !!onSelect;
  const StartElement = isInteractive ? "a" : "i";

  return (
    <div className={ratingClass} {...otherProps}>
      {() => {
        const stars = [];
        for (let i = 1; i <= maxStars; i++) {
          const starProps = {
            key: 1,
            className: classNames("fa fa-fw", {
              "fa-star": i <= CurrentStars,
              "fa-star-o": i > CurrentStars,
            }),
            onClick: () => isInteractive && onSelect(i),
          };

          if (isInteractive) {
            starProps["href"] = "javascript";
          }

          starColor.push(
            <StartElement {...starProps} key={i}>
              {" "}
            </StartElement>
          );
        }
        return stars;
      }}
    </div>
  );
};

Rating.propTypes = {
  className: PropTypes.string,
  max: PropTypes.number,
  at: PropTypes.number,
  starColor: PropTypes.string,
  onSelect: PropTypes.func,
};

Rating.defaultProps = {
  max: 5,
  at: 0,
  starColor: "warning",
};
