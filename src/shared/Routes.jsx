import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "../components/Routes/ProtectedRoute";
import Profile from "../pages/Profile";
import Results from "../pages/Results";
import Test from "../pages/Test";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Layout from "./Layout";

const isLogin = false;

const routesForNotAuthenticaiedOnly = [
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
];

const routesForAuthenticatedOnly = [
  {
    element: <ProtectedRoute />,
    children: [
      { path: "profile", element: <Profile /> },
      { path: "results", element: <Results /> },
      { path: "test", element: <Test /> },
    ],
  },
];

const finalRoutes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      ...(!isLogin ? routesForNotAuthenticaiedOnly : []),
      ...routesForAuthenticatedOnly,
    ],
  },
];
const router = createBrowserRouter([...finalRoutes]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
