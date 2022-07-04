import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import _ from "lodash";

import { Profile } from "./Profile";
import { ProfileFont } from "./ProfileFont";

class ProfileFont extends React.PureComponent {
  static propTypes = {
    src: PropTypes.string.isRequired,
    placeholder: PropTypes.node,
    alt: PropTypes.string,
    className: PropTypes.string,
    ..._.omit(Avatar.propTypes, [`children`]),
  };

  static defaultProps = {
    placeholder: <i className="fa fa-user fa-fw"></i>,
  };

  constructor(props) {
    super(props);
    this.state = {
      imgLoaded: false,
    };
  }

  render() {
    const { src, placeholder, alt, className, ...profileProps } = this.props;
    const parentClass = classNames(
      "profile-image",
      {
        "profile-image--loaded": this.state.imgLoaded,
      },
      className
    );
  }
}

export default ProfileImage;
