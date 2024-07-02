import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import toast from "react-hot-toast";
import useRole from "../../../Hooks/useRole";
// import { toast } from "react-toastify";

const Navbar = () => {
  // const [theme, setTheme] = useState("light");
  // const handleToggle = (e) => {
  //   if (e.target.checked) {
  //     setTheme("dark");
  //   } else {
  //     setTheme("light");
  //   }
  // };
  // useEffect(() => {
  //   localStorage.setItem("theme", theme);
  //   const localTheme = localStorage.getItem("theme");
  //   document.querySelector("html").setAttribute("data-theme", localTheme);
  // }, [theme]);
  const [data] = useRole();
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
    toast.success("You have sucessfully loged Out", {
      className: "mt-20",
    });
  };
  const links = (
    <>
      <li>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#fff" : "#008080",
            backgroundColor: isActive && "#008080",
          })}
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#fff" : "#008080",
                backgroundColor: isActive && "#008080",
              })}
              to={"/dashboard"}
            >
              Deshboard
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar shadow-xl fixed z-10 bg-black bg-opacity-40 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[#008080]"
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
            {links}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl">
          <span className="text-[#008080]">Swift Tasker</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {/* <label className="cursor-pointer grid place-items-center mr-3">
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
        </label> */}
        {user ? (
          <div className="flex items-center gap-3">
            <button className="btn bg-transparent border-none">
              Coin
              <div className="bg-[#008080] badge border-none text-white">
                {data?.coin}
              </div>
            </button>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    id="clickable"
                    className="w-10 h-10 rounded-full border-[#008080] border-4"
                    title={user?.displayName}
                    alt="user"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="space-y-3 menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li className="text-gray-600 hover:text-white">
                  <Link
                    to={"/profile"}
                    className="  hover:bg-[#008080] p-2 rounded-xl"
                  >
                    {user?.displayName}
                  </Link>
                </li>
                <li className="text-gray-600 hover:text-white">
                  <button
                    onClick={handleLogOut}
                    className="btn hover:text-white hover:bg-[#008080] p-2 rounded-xl"
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-5">
            <Link
              to={"/login"}
              className="btn bg-[#008080] text-white border-none"
            >
              Log In
            </Link>
            <Link
              to={"/signup"}
              className="btn bg-[#008080] text-white border-none"
            >
              Sign Up
            </Link>
            <Link
              to={"/signup"}
              className="btn bg-[#008080] text-white border-none"
            >
              Watch Demo
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
