import React from "react";

import { applicationRoutesNamesMap } from "@/routes";
import { useLocation } from "react-router";
import { ThemeToggle } from "./theme-toggle";
import { AccountMenu } from "./account-menu";
import { SidebarTrigger } from "./ui/sidebar";

export const Header = () => {
  const { pathname: actualRouteName } = useLocation();

  const title = applicationRoutesNamesMap[actualRouteName];

  return (
    <header className="border-b-2">
      <div className="p-5 text-2xl font-semibold flex items-center justify-between">
        <div className="flex items-center">
          <SidebarTrigger className="cursor-pointer" />
          <div className="border-l-2 border-muted-foreground w-full h-[30px] ml-3 mr-4"></div>
          <h1>{title}</h1>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <AccountMenu />
        </div>
      </div>
    </header>
  );
};
