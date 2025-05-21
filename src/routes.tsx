import { createBrowserRouter } from "react-router";
import { SignIn } from "./pages/auth/sign-in";
import { AuthLayout } from "./pages/_layout/auth";
import { SignUp } from "./pages/auth/sign-up";
import { AppLayout } from "./pages/_layout/app";
import { Dashboard } from "./pages/app/dashboard";
import { Products } from "./pages/app/products";

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
    icon: null,
    route: {
      path: "/",
      element: <Dashboard />,
    },
  },
  {
    name: "Produtos",
    icon: null,
    route: {
      path: "/products",
      element: <Products />,
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
  "/products": "Produtos",
};
