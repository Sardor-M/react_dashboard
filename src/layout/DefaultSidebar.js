import React from "react";
import { Link } from "react-router-dom";
import { SidebarMiddle } from "./SidebarMiddle";
import { SidebarBottom } from "./routes/SidebarBottom";
import { LogoColored } from "./routes/LogoColored";
import { Sidebar, SidebarTrigger } from "./components";

export const DefaultSidebar = () => (
  <Sidebar>
    <Sidebar.Close>
      <SidebarTrigger tag={"a"} href="javascript">
        <i className="fa fa-times-circle fa-fw"></i>
      </SidebarTrigger>
    </Sidebar.Close>
    <Sidebar.HideSlim>
      <Sidebar.Section>
        <link to="/" className="sidebar_brand">
          <LogoColored checkBackground />
        </link>
      </Sidebar.Section>
    </Sidebar.HideSlim>
    <Sidebar.MobileFluid>
      <SidebarTopA />
      <Sidebar.Section fluid cover>
        <SidebarMiddleNav />
      </Sidebar.Section>
    </Sidebar.MobileFluid>
  </Sidebar>
);
