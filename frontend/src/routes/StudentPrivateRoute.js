import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import {  toast } from "react-toastify";

function StudentPrivateRoute() {

    const generateError = (error) =>
        toast.error(error, {
          position: "top-right",
        });

  const role = localStorage.getItem('role');

  if (role !== 'student') {
    generateError("Not a Student");
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default StudentPrivateRoute;
