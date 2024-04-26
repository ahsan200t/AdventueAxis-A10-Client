/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("luxury");
    } else {
      setTheme("light");
    }
  };

  const { user, logOut } = false;
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-emerald-700 border border-emerald-700 font-bold bg-gray-300"
              : "font-semibold"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/tourist"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-emerald-700 border border-emerald-700 font-bold"
              : "font-semibold"
          }
        >
          All Tourists Spot
        </NavLink>
      </li>

      {user && (
        <li>
          <NavLink
            to="/update profile"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-emerald-700 border border-emerald-700 font-bold"
                : "font-semibold"
            }
          >
            Add Tourists Spot
          </NavLink>
        </li>
      )}

      <li>
        <NavLink
          to="/selling details"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-emerald-700 border border-emerald-700 font-bold"
              : "font-semibold"
          }
        >
          My List
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/register"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-emerald-700 border border-emerald-700 font-bold"
              : "font-semibold"
          }
        >
          Register
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-gray-100  mb-10 shadow">
      <div className="navbar-start">
        <div className="dropdown dropdown-bottom z-10 ">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost md:hidden lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="text-2xl md:text-4xl font-semibold font-serif text-secondary">
          Adventure<span className="text-emerald-700">Axis</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>

      <div className="navbar-end">
        <div>
          <label className="cursor-pointer grid place-items-center mr-3">
            <input
            onChange={handleToggle}
              type="checkbox"
              className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
            />
            <svg
              className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>

        {user ? (
          <div className="dropdown dropdown-bottom flex items-center">
            <label
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom"
              data-tip={user.displayName}
            >
              <div className="w-10 rounded-full">
                <img
                  src={user?.photoURL || "https://i.ibb.co/2ykmyLP/ahsan.jpg"}
                />
              </div>
            </label>
            <Link to="/">
              <button onClick={logOut} className="btn btn-sm btn-secondary">
                Logout
              </button>
            </Link>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-sm bg-emerald-600 text-white">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
