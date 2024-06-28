import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import {  toast } from "react-toastify";

function TeacherPrivateRoute() {

    const generateError = (error) =>
        toast.error(error, {
          position: "top-right",
        });

  const role = localStorage.getItem('role');

  if (role !== 'teacher') {
    generateError("Not a Teacher");
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default TeacherPrivateRoute;
