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

  componentDidMount() {
    const entry = {
      id: this.id,
      parentId: this.props.parentId,
    };
    if (this.props.to) {
      entry.url = this.props.to;
    }
    this.props.addEntry(entry);
  }
  componentWillMount() {
    this.props.removeEntry(this.id);
  }
  getEntry() {
    return this.props.entries[this.id];
  }

  toggleNode() {
    const entry = this.getEntry();
    this.props.updateEntry(this.id, { open: !entry.open });
  }

  render() {
    const entry = this.getEntry();
    const classBase = this.props.isSubNode ? "sidebar-submenu" : "sidebar-menu";
    const itemClass = classNames(`${classBase}__entry`, {
      // function will go here
    });

    return (
      <li
        className={classNames(itemClass, {
          "sidebar-menu__entry -- no caret": this.props.noCaret,
        })}
      >
        <SidebarMenuItemLink
          to={this.props.to || null}
          href={this.props.href || null}
          onToggle={this.toggleNode.bind(this)}
          classBase={classBase}
        ></SidebarMenuItemLink>
      </li>
    );
  }
}
