import React, { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';

function PrivateRoute() {
  const navigate = useNavigate();

  const generateError = (error) =>
    toast.error(error, {
      position: "top-right",
    });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token || token === '') {
      generateError("Not Authorized")
      navigate('/');
    }
  }, [navigate]);

  return (
    <>
      {localStorage.getItem('token') ? <Outlet /> : null}
    </>
  );
}

export default PrivateRoute;
