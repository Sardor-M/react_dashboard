import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import classes from "./RatingStar.scss";

export const RatingStar = (props) => {
  const {
    className,
    max: maxStars,
    at: currentStars,
    starColor,
    onSelect,
    ...otherProps
  } = props;

  const ratingStarClass = classNames(classes.ratingStar, className);

  const isInteractive = !!onSelect;
  const StartElement = isInteractive ? "a" : "i";

  return (
    <div className={ratingStarClass} {...otherProps}>
      {(() => {
        const stars = [];
        for (let i = 1; i < maxStars; i++) {
          const starProps = {
            key: i,
            className: classNames("fa-fa-fw", {
              "fa-star": i <= currentStars,
              "fa-star-o": i > currentStars,
              [`text -${starColor}`]: i <= currentStars,
            }),

            onClick: () => isInteractive && onSelect(i),
          };

          if (isInteractive) {
            starProps["href"] = "javascript";
          }

          stars.push(<StartElement {...starProps} key={i}></StartElement>);
        }
        return stars;
      })()}
    </div>
  );
};

RatingStar.propTypes = {
  className: PropTypes.string,
  max: PropTypes.number,
  at: PropTypes.number,
  starColor: PropTypes.string,
  onSelect: PropTypes.func,
};

RatingStar.defualtProps = {
  max: 4,
  at: 0,
  starColor: "warning",
};
