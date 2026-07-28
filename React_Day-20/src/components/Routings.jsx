import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { getUsers } from "./api/Users";
// import App from "../App";
// import Home from "./Home";
// import About from "./About";
// import Main from "./Main";

const App = lazy(() => import("../App"));
const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const Main = lazy(() => import("./Main"));

const Routings = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "",
          element: <App />,
        },
        {
          path: "/home",
          loader: getUsers,
          hydrateFallbackElement: <h1>LOADING USERS DATA</h1>,
          element: (
            <Suspense fallback={<h1>LOADING HOME</h1>}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routings;
