import React from "react";

import { NavigationGroups } from "@/components/sidebar/navigation-groups";
import { AppSidebarHeader } from "@/components/sidebar/app-sidebar-header";
import { Sidebar, SidebarContent, SidebarRail } from "@/components/ui/sidebar";

export const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      <AppSidebarHeader />
      <SidebarContent>
        <NavigationGroups />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
};
