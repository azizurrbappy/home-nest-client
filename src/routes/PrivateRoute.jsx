import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import { DotLoader } from 'react-spinners';

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const { pathname } = useLocation();

  if (loading) {
    return (
      <div className="flex h-[calc(100vh-50vh)] justify-center items-center">
        <DotLoader color="#7065f0" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={pathname}></Navigate>;
  }

  return children;
};

export default PrivetRoute;
