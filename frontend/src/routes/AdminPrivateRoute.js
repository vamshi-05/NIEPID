import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import {  toast } from "react-toastify";

function AdminPrivateRoute() {

    const generateError = (error) =>
        toast.error(error, {
          position: "top-right",
        });

  const role = localStorage.getItem('role');

  if (role !== 'admin') {
    generateError("Not a Admin");
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default AdminPrivateRoute;
