import {
  FaCalendar,
  FaHouseMedical,
  FaList,
  FaSearchengin,
} from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaAd,
  FaBook,
  FaEnvelope,
  FaHome,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import useRole from "../Hooks/useRole";
import { useState } from "react";
import DashboardNavbar from "../Components/Shared/DashboardNavbar/DashboardNavbar";

const Dashboard = () => {
  // const [role, setRole] = useState();
  const [data] = useRole();
  const role = data?.role;
  return (
    <>
      <DashboardNavbar></DashboardNavbar>
      <div className="flex">
        {/* dashboard side bar */}
        <div className="w-64 min-h-screen bg-[#008080]">
          <ul className="menu p-4">
            {role === "Admin" ? (
              <>
                <li>
                  <NavLink to="/dashboard/adminHome">
                    <FaHome></FaHome>
                    Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageUser">
                    <FaUtensils></FaUtensils>
                    Manage Users
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageTask">
                    <FaList></FaList>
                    Manage Task
                  </NavLink>
                </li>
              </>
            ) : role === "TaskCreator" ? (
              <>
                <li>
                  <NavLink to="/dashboard/taskerHome">
                    <FaHome></FaHome>
                    Tasker Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addtask">
                    <FaCalendar></FaCalendar>
                    Add new Tasks
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/mytask">
                    <FaShoppingCart></FaShoppingCart>
                    My Task’s
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/purchasecoin">
                    <FaAd></FaAd>
                    Purchase Coin
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/paymentHistory">
                    <FaList></FaList>
                    Payment history
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard/userHome">
                    <FaHome></FaHome>
                    User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/tasklist">
                    <FaCalendar></FaCalendar>
                    TaskList
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/mysubmission">
                    <FaShoppingCart></FaShoppingCart>
                    My Submissions
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/withdrawa">
                    <FaAd></FaAd>
                    withdrawals
                  </NavLink>
                </li>
              </>
            )}
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHouseMedical></FaHouseMedical>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/order/salad">
                <FaSearchengin></FaSearchengin>
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/order/contact">
                <FaEnvelope></FaEnvelope>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        {/* dashboard content */}
        <div className="flex-1 p-8">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
