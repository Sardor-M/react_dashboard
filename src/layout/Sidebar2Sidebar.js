import React from "react";
import { Sidebar, SidebarTrigger } from "./components";

export const Sidebar2Sidebar = () => (
  <Sidebar>
    {}
    <Sidebar.Close>
      <SidebarTrigger tag={`a`} href="javascript:;">
        <i className="fa fa-times0-circle fa-fw"></i>
      </SidebarTrigger>
      <Sidebar.Section>
        <SidebarTopA />
      </Sidebar.Section>
    </Sidebar.Close>
  </Sidebar>
);
