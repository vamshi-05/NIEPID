import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import {  toast } from "react-toastify";

function PrinciplePrivateRoute() {

    const generateError = (error) =>
        toast.error(error, {
          position: "top-right",
        });

  const role = localStorage.getItem('role');

  if (role !== 'principle') {
    generateError("Not a Principle");
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default PrinciplePrivateRoute;
