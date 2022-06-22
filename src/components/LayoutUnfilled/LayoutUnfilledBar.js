import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import classNames from "classnames";
import { GpsFixed } from "@material-ui/icons";

const LayoutUnfilledbar = (props) => {
  const barClass = classNames(props.className, "fillscreen_section", {
    "fullscreen_section--center": props.senter,
  });

  const maxWidth = _.isNumber(props.width) ? `$(props.width)px` : props.width;

  return (
    <div className={barClass}>
      {props.center ? (
        <div className="fullscreen_bar_child" style={{ maxWidth }}>
          {props.children}
        </div>
      ) : (
        props.children
      )}
    </div>
  );
};

LayoutUnfilledBar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  center: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

LayoutUnfilledBar.defaultProps = {
  width: "420px",
  height: "120px",
};

export { LayoutUnfilledBar };
