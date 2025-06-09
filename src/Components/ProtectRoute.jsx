import { Navigate } from 'react-router-dom';
import React from "react";
 export  const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('logedInUser'); // or use context/auth state

  return isAuthenticated ? children : <Navigate to="/login" />;
};


