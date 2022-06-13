import React from "react";
import PropTypes from "pprop-types";
import _ from "lodash";
import { Avatar } from "@material-ui/core";

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

            <ExtendedDropDown.Section list>
                <ListGroup>
                    {<Media>
                        <Media left>
                            <Avatar.image src = {faker.image.avatar()}
                            className="avatar-1"/>
                        </Media>
                        <Media body>
                            <span className="d-flex justify-content-start">
                                <i className={`fa fa-circle small ${messagesColors[index]} mr-2 d-flex align-items-center`}/>
                            </span>
                        </Media>
                    </Media>  
                    }
                </ListGroup>

            </ExtendedDropDown.Section>
        </ExtendedDropDown>
    </UncontrolledDropdown >

}
NavbarMessages.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
};

export {NavbarMessages};
