import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
  const [themeController, setThemeController] = useState(false);

  return (
    <>
      <main
        className="flex flex-col min-h-screen"
        data-theme={themeController ? 'dark' : 'light'}
      >
        <Navbar
          themeController={themeController}
          setThemeController={setThemeController}
        ></Navbar>
        <section className="flex-1">
          <Outlet></Outlet>
        </section>
        <Footer></Footer>
      </main>
    </>
  );
};

export default MainLayout;
