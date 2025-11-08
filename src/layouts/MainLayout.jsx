import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <>
      <main className="flex flex-col min-h-screen">
        <Navbar></Navbar>
        <section className="flex-1">
          <Outlet></Outlet>
        </section>
        <Footer></Footer>
      </main>
    </>
  );
};

export default MainLayout;
