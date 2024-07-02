import { Link } from "react-router-dom";
import useRole from "../../../Hooks/useRole";
import useAuth from "../../../Hooks/useAuth";

const DashboardNavbar = () => {
  const [data] = useRole();
  const { user, logOut } = useAuth();
  const handleLogOut = () => {
    logOut();
    toast.success("You have sucessfully loged Out", {
      className: "mt-20",
    });
  };
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <Link to={"/"} className="btn btn-ghost text-xl">
            <span className="text-[#008080]">Swift Tasker</span>
          </Link>
        </div>
        <div className="navbar-end">
          <div>
            <div className="flex items-center gap-5">
              <button className="btn bg-transparent border-none">
                Coin
                <div className="bg-[#008080] badge border-none text-white">
                  {data?.coin}
                </div>
              </button>{" "}
              ||
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
            <div className="flex items-center gap-5">
              <p>{data?.role}</p> ||
              <div className="w-10 rounded-full">
                <p>{user?.displayName}</p>
              </div>
            </div>
          </div>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
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
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
