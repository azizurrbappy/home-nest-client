import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Login from '../pages/login';
import Signup from '../pages/Signup';
import PrivateRoute from './PrivateRoute';
import LoggedUserRoute from './LoggedUserRoute';
import PropertyDetails from '../pages/PropertyDetails';
import AllProperties from '../pages/AllProperties';
import AddProperty from '../pages/AddProperty';
import MyProperties from '../pages/MyProperties';
import UpdateProperty from '../pages/UpdateProperty';

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
      {
        path: '/all-properties',
        element: (
          <PrivateRoute>
            <AllProperties></AllProperties>
          </PrivateRoute>
        ),
      },
      {
        path: '/add-properties',
        element: (
          <PrivateRoute>
            <AddProperty></AddProperty>
          </PrivateRoute>
        ),
      },
      {
        path: '/my-properties',
        element: (
          <PrivateRoute>
            <MyProperties></MyProperties>
          </PrivateRoute>
        ),
      },
      {
        path: '/update-property/:id',
        element: (
          <PrivateRoute>
            <UpdateProperty></UpdateProperty>
          </PrivateRoute>
        ),
      },
      {
        path: '/property/:id',
        element: (
          <PrivateRoute>
            <PropertyDetails></PropertyDetails>
          </PrivateRoute>
        ),
      },
      {
        path: '/my-ratings',
        element: <p>hlo</p>,
      },
    ],
  },
]);

export default router;
