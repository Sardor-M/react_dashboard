import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import _ from "lodash";

import { Profile } from "./Profile";
import { ProfileFont } from "./ProfileFont";

class ProfileImage extends React.PureComponent {
  static propTypes = {
    src: PropTypes.string.isRequired,
    placeholder: PropTypes.node,
    alt: PropTypes.string,
    className: PropTypes.string,
    ..._.omit(Profile.propTypes, [`children`]),
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
    return (
      <div className={parentClass}>
        <Profile className="profile-image" {...profileProps}>
          <img
            src={src}
            alt={alt}
            onLoad={() => {
              this.setState({ imgLoaded: true });
            }}
          />
        </Profile>
        {!this.state.imgLoaded && (
          <ProfileFont
            className="profile-image__placeholder"
            {...profileProps}
          ></ProfileFont>
        )}
      </div>
    );
  }
}

export { ProfileImage };
