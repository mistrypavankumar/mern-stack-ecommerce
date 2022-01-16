import React from "react";
import { Navigate, Routes } from "react-router-dom";

const ProtectedRoute = ({
  element: Element,
  path,
  isAuthenticated,
  userRole,
  ...rest
}) => {
  return (
    <React.Fragment>
      <Routes
        {...rest}
        path={path}
        element={
          isAuthenticated && userRole === "admin" ? <Element /> : <Navigate />
        }
      />
    </React.Fragment>
  );
};

export default ProtectedRoute;
