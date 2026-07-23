import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import RegisterPage from "../pages/RegisterPage";
import AuthLayout from "../layout/AuthLayout";
import LoginPage from "../pages/LoginPage";
import MainLayout from "../layout/MainLayout";
import ProductPage from "../pages/ProductPage";
import UsersPage from "../pages/UsersPage";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        {
          path: "",
          element: <RegisterPage />,
        },
        {
          path: "login",
          element: <LoginPage />,
        },
      ],
    },
    {
      path: "/main",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <ProductPage />,
        },
        {
          path: "user",
          element: <UsersPage />
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
