import React from "react";
import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const ProtectedRoute = () => {
  const { pathname } = useLocation();
  const {isAuthenticated} = useContext(AuthContext)

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ redirectFrom: pathname }} />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
