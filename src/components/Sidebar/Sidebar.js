import React from "react";
import PropTypes from "prop-types";

const Sidebar =(props) => {
    <React.Fragment>
        <Outerclick active ={!props.pageConfig.sidebarCollapsed && (
            props.pageConfig.screenSize === "xs" || 
            props.pageConfig.screenSize === "sm" ||
            props.pageConfig.screenSize === "md" ||
        )
    } 
    onClickOutside={()=> props.pageConfig.toggleSidebar()}
    >
        <SidebarContent { ...props} />
    </Outerclick>
    </React.Fragment>
  return
}

export default Sidebar;
