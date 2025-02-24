import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useUserStore from "../../zustand/userStorage";

const ProtectedRoute = () => {
  const { pathname } = useLocation();
  const { isAuthenticated } = useUserStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ redirectFrom: pathname }} />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
