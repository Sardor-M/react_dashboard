import React from "react";
import PropTypes from "pprop-types";
import _ from "lodash";

const messageColor = ["text-success", "text-danger", "text-warning"];\
const NavbarMessages = (props) => {
    <UncontrolledDropdown nav inNavbar {...props}>
        <DropToggle nav>
            <IconWithBadge badge ={<Badge pill color="secondary">111</Badge>}>
                <i className="fa fa-envelope-o fa-fw"/>
                </IconWithBadge>
        </DropToggle>
        <ExtendedDropDown right>
            <ExtendedDropDown.Section className = "d-flex justify-content-between align-items-center">
                <h4 className="m0"> Message</h4>
                <ExtendedDropDown.Link to ="app/email">
                    <i className="fa  fa-pencil"/>
                </ExtendedDropDown.Link>
            </ExtendedDropDown.Section>
        </ExtendedDropDown>
    </UncontrolledDropdown >

}

export default NavbarMessages;
