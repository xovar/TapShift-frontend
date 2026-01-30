import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Authentication/Login/Login/Login";
import SignUp from "../pages/Authentication/SignUp/Singup/SignUp";
import Coverage from "../pages/Coverage/Coverage";

const router = createBrowserRouter([
    {
      path: "/",
      Component: MainLayout,
      children: [
        {
            index: true,
            Component: Home
        },
        {
          path:"coverage",
          Component: Coverage,
        }
      ]
    },
    {
      path:"/",
      Component: AuthLayout,
      children: [
        {
          path: "login",
          Component: Login
        },
        {
          path: "signup",
          Component: SignUp
        }
      ]
    }
  ]);

  export default router;