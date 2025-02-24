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
import useUserStore from "../zustand/userStorage";

// const isAuthenticated = useUserStore(state => state.isAuthenticated)

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

// const finalRoutes = [
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       { path: "/", element: <Home /> },
//       ...(!isAuthenticated ? routesForNotAuthenticaiedOnly : []),
//       ...routesForAuthenticatedOnly,
//     ],
//   },
// ];
// const router = createBrowserRouter([...finalRoutes]);

const Routes = () => {
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);
  console.log(isAuthenticated);

  const finalRoutes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        ...(!isAuthenticated ? routesForNotAuthenticaiedOnly : []),
        ...routesForAuthenticatedOnly,
      ],
    },
  ];
  const router = createBrowserRouter([...finalRoutes]);
  return <RouterProvider router={router} />;
};

export default Routes;
