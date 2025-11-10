import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Login from '../pages/login';
import Signup from '../pages/Signup';
import PrivateRoute from './PrivateRoute';
import LoggedUserRoute from './LoggedUserRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: (
          <LoggedUserRoute>
            <Login></Login>
          </LoggedUserRoute>
        ),
      },
      {
        path: '/signup',
        element: (
          <LoggedUserRoute>
            <Signup></Signup>
          </LoggedUserRoute>
        ),
      },
    ],
  },
]);

export default router;
