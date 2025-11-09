import React from 'react';
import { RiMenu2Fill } from 'react-icons/ri';
import Logo from '../../assets/logo.png';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="all-properties">All Properties</NavLink>
      </li>
      <li>
        <NavLink to="add-properties">Add Properties</NavLink>
      </li>
      <li>
        <NavLink to="my-properties">My Properties</NavLink>
      </li>
      <li>
        <NavLink to="my-ratings">My Ratings</NavLink>
      </li>
    </>
  );

  return (
    <>
      <nav className="shadow-sm sticky top-0 z-50 backdrop-blur-2xl">
        <div className="navbar lg:max-w-11/12 px-4 mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="pr-2  lg:hidden">
                <RiMenu2Fill size={20} />
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-[#000929] font-medium space-y-3"
              >
                {links}
              </ul>
            </div>
            <Link className="flex items-center gap-1">
              <img src={Logo} alt="HomeNest" />
              <h2 className="text-lg font-bold">HomeNest</h2>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal space-x-5 px-1 text-[#000929] font-semibold">
              {links}
            </ul>
          </div>
          <div className="navbar-end">
            <Link
              to="login"
              className="btn bg-[#7065F0] text-white rounded-md border-0 shadow-none h-9 px-6"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
