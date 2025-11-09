import React from 'react';
import { RiMenu2Fill } from 'react-icons/ri';
import Logo from '../../assets/logo.png';
import { Link, NavLink } from 'react-router';

const Navbar = ({ themeController, setThemeController }) => {
  const handleThemeController = () => {
    setThemeController(!themeController);
  };

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
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-medium space-y-3"
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
            <ul className="menu menu-horizontal space-x-5 px-1 font-semibold">
              {links}
            </ul>
          </div>
          <div className="navbar-end space-x-4">
            <label className="toggle text-base-content">
              <input
                onClick={handleThemeController}
                type="checkbox"
                value="dark"
                className="theme-controller"
              />

              <svg
                aria-label="sun"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2"></path>
                  <path d="M12 20v2"></path>
                  <path d="m4.93 4.93 1.41 1.41"></path>
                  <path d="m17.66 17.66 1.41 1.41"></path>
                  <path d="M2 12h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="m6.34 17.66-1.41 1.41"></path>
                  <path d="m19.07 4.93-1.41 1.41"></path>
                </g>
              </svg>

              <svg
                aria-label="moon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </g>
              </svg>
            </label>

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
