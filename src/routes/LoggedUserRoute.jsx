import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import { DotLoader } from 'react-spinners';

const LoggedUserRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const { state } = useLocation();
  const navigate = state || '/';

  if (user) {
    return <Navigate to={navigate}></Navigate>;
  }

  return children;
};

export default LoggedUserRoute;
