import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classNames from "classnames";
import MenuContext from "./MenuContext";

const SidebarMenuItemLink = (props) => (
    (props.to || props.href) ? (props.to ? (
        <Link to = {props.to} className={`${props.classBase}__entry__link`}>
            {props.children}
        </Link>
    ): (
        <a href ={props.href}
        target="_blank"
        rel = "noopener roreferrer"
        className={`${props.classBase}__entry__link`}>
            {props.children}
        </a>
    ))
)
// function SidebarMenuItem() {
//   return <div>SidebarMenuItem</div>;
// }

export default SidebarMenuItem;
