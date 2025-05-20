import React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Banana } from "lucide-react";
import { applicationRoutes } from "@/routes";
import { Link, useLocation } from "react-router";

export const AppSidebar = () => {
  const { state } = useSidebar();
  const { pathname } = useLocation();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="px-4 pt-7">
        <div className="flex items-center gap-2 text-xl font-semibold">
          <Banana size={20} />{" "}
          {state === "expanded" && <span>Nowaste Shop</span>}
        </div>
      </SidebarHeader>
      <SidebarContent className="">
        <SidebarGroup></SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="uppercase">
            Relatórios
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {applicationRoutes.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton
                    asChild
                    isActive={item.route.path === pathname}
                  >
                    <Link to={item.route.path}>
                      <item.icon />
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
