import { createBrowserRouter } from "react-router";
import { SignIn } from "./pages/auth/sign-in";
import { AuthLayout } from "./pages/_layout/auth";
import { SignUp } from "./pages/auth/sign-up";

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

export const router = createBrowserRouter([
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
