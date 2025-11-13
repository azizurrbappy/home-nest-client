import React from 'react';
import Container from '../Container/Container';
import { NavLink } from 'react-router';

const Page404 = () => {
  return (
    <>
      <Container className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h1 className="text-9xl font-bold">404</h1>
          <h3 className="text-xl py-5">Page Not Found</h3>
          <NavLink to="/" className="bg-[#7065f0] py-2 px-3 rounded-lg">
            Back To Home
          </NavLink>
        </div>
      </Container>
    </>
  );
};

export default Page404;
