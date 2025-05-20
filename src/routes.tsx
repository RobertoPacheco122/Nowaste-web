import { createBrowserRouter } from "react-router";
import { SignIn } from "./pages/auth/sign-in";
import { AuthLayout } from "./pages/_layout/auth";
import { SignUp } from "./pages/auth/sign-up";
import { ChartColumnIncreasing } from "lucide-react";
import { AppLayout } from "./pages/_layout/app";
import { Dashboard } from "./pages/app/Dashboard";

export const authRoutes = [
  {
    name: "Entrar",
    route: {
      path: "/signIn",
      element: <SignIn />,
    },
  },
  {
    name: "Cadastrar-se",
    route: {
      path: "/signUp",
      element: <SignUp />,
    },
  },
];

export const applicationRoutes = [
  {
    name: "Dashboard",
    icon: ChartColumnIncreasing,
    route: {
      path: "/",
      element: <Dashboard />,
    },
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: applicationRoutes.map(({ route }) => {
      return route;
    }),
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: authRoutes.map(({ route }) => {
      return route;
    }),
  },
]);

export const applicationRoutesNamesMap: Record<string, string> = {
  "/": "Dashboard",
};
