import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classNames from "classnames";
import MenuContext from "./MenuContext";
import uuid from "uuid/v5";

const SidebarMenuItemLink = (props) =>
  props.to || props.href ? (
    props.to ? (
      <Link to={props.to} className={`${props.classBase}__entry__link`}>
        {props.children}
      </Link>
    ) : (
      <a
        href={props.href}
        target="_blank"
        rel="noopener roreferrer"
        className={`${props.classBase}__entry__link`}
      >
        {props.children}
      </a>
    )
  ) : (
    <a
      href="javascript:;"
      className={`${props.classBase}__entry__link`}
      onClick={() => props.onToggle()}
    >
      {props.children}
    </a>
  );

// function SidebarMenuItem() {
//   return <div>SidebarMenuItem</div>;
// }

SidebarMenuItemLink.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  active: PropTypes.bool,
  onToggle: PropTypes.func,
  children: PropTypes.node,
  classBase: PropTypes.string,
};

export class SidebarMenuItem extends React.Component {
  static propTypes = {
    addEntry: PropTypes.func,
    entries: PropTypes.object,
    parentId: PropTypes.string,
    children: PropTypes.node,
    href: PropTypes.string,
    exact: PropTypes.bool,
    icon: PropTypes.node,
    to: PropTypes.string,
  };

  static defaultProps = {
    super: true,
  };

  constructor(props) {
    super(props);
    this.id = uuid();
  }
}
