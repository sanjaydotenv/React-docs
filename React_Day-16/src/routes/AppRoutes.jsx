import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Auth from "../layout/Auth";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MainLayout from "../layout/MainLayout";
import Home from "../components/Home";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Auth />,
      children: [
        {
          path: "",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/mainlayout",
      element: <MainLayout />,
      children: [
        {
          path: "home",
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
