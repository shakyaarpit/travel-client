import React from "react";
import { Navigate } from "react-router-dom";

const ProtectRoute = ({ children }) => {
  let user = localStorage.getItem("logedInUser");

  user ? children : <Navigate to="/login" />;

  return children;
};

export default ProtectRoute;
