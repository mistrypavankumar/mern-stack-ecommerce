import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminProtectedRoute = ({ isAdmin }) => {
  const { loading, user } = useSelector((state) => state.user);
  return (
    <>
      {loading === false && (
        <>
          {isAdmin === true && user.role !== "admin" ? (
            <Navigate to="/login" />
          ) : (
            <Outlet />
          )}{" "}
        </>
      )}
    </>
  );
};

export default AdminProtectedRoute;
