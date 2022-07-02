import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { Profile } from "./Profile";
import profileColors from "./../colors.css";

const ProfileFont = (props)=> {
    const {
        children,
        bcgrdColor,
        fgColor,
        bcgrdColorCustom,
        fgColorCustom,
        ...profileProps
    } =props;

    const parentClass =classNames (
        "profile-font";
        `profile-font--${profileProps.size}`,
        bcgrdColor && profileColors [`bcgrd-color--${bcgrdColor}`]
    );
    const childClass = classNames("profile-font__text",
    fgColor && profileColors [`fg-color--${fgColor}`]);

    return (
        <Profile {...profileProps}>
            <div className={parentClass} style ={parentCustomStyle}>
                {React.cloneElement(child, {
                    style: childCustomStyle,
                    className:classNames (child.props.className, childClass)
                })}
            </div>
        </Profile>
    )
}

export default ProfileFont;
