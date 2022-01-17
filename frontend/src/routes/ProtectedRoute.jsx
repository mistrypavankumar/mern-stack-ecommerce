import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useSelector((state) => state.user);
  return (
    <>
      {loading === false && (
        <>
          {isAuthenticated === false ? <Navigate to="/login" /> : <Outlet />}{" "}
        </>
      )}
    </>
  );
};

export default ProtectedRoute;
