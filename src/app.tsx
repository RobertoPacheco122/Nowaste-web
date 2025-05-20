import React from "react";

import { RouterProvider } from "react-router";
import { Toaster } from "./components/ui/sonner";
import { router } from "./routes";
import { ThemeProvider } from "./components/theme-provider";

import "./global.css";

export const App = () => {
  return (
    <>
      <ThemeProvider storageKey="@nowaste-ui-theme-1.0.0">
        <RouterProvider router={router} />
        <Toaster richColors />
      </ThemeProvider>
    </>
  );
};
