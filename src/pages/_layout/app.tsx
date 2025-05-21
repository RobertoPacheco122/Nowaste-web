import React from "react";

import { Outlet } from "react-router";
import { Header } from "@/components/header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";

export const AppLayout = () => {
  return (
    <div className="h-screen flex">
      <SidebarProvider>
        <AppSidebar />
        <div className="grow">
          <Header />
          <main className="p-6">
            <Outlet />
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};
