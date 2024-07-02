import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErroPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layouts/Dashboard";
import TaskCreatorHome from "../Pages/Dashboard/TaskCreator/TaskCreatorHome/TaskCreatorHome";
import AddTask from "../Pages/Dashboard/TaskCreator/AddTask/AddTask";
import MyTask from "../Pages/Dashboard/TaskCreator/MyTask/MyTask";
import PurchaseCoin from "../Pages/Dashboard/TaskCreator/PurchaseCoin/PurchaseCoin";
import PaymentHistory from "../Pages/Dashboard/TaskCreator/PaymentHistory/PaymentHistory";
import WorkerHome from "../Pages/Dashboard/Worker/WorkerHome/WorkerHome";
import TaskList from "../Pages/Dashboard/Worker/TaskList/TaskList";
import Withdrawa from "../Pages/Dashboard/Worker/Withdrawa/Withdrawa";
import MySubmission from "../Pages/Dashboard/Worker/MySubmission/MySubmission";
import TaskDetail from "../Pages/Dashboard/Worker/TaskList/TaskDetail";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome/AdminHome";
import ManageUser from "../Pages/Dashboard/Admin/ManageUser/ManageUser";
import ManageTask from "../Pages/Dashboard/Admin/ManageTask/ManageTask";
import Profile from "../Pages/Profile/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      // admin
      {
        path: "adminHome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "manageUser",
        element: <ManageUser></ManageUser>,
      },
      {
        path: "manageTask",
        element: <ManageTask></ManageTask>,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/tasks`),
      },
      // task creator
      {
        path: "taskerHome",
        element: <TaskCreatorHome />,
      },
      {
        path: "addtask",
        element: <AddTask />,
      },
      {
        path: "update/:id",
        element: <TaskDetail></TaskDetail>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/task/${params.id}`),
      },
      {
        path: "mytask",
        element: <MyTask />,
      },
      {
        path: "purchasecoin",
        element: <PurchaseCoin />,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory />,
      },
      // worker
      {
        path: "userHome",
        element: <WorkerHome></WorkerHome>,
      },
      {
        path: "tasklist",
        element: <TaskList></TaskList>,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/tasks`),
      },
      {
        path: "tasklist/task/:id",
        element: <TaskDetail></TaskDetail>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/task/${params.id}`),
      },
      {
        path: "mysubmission",
        element: <MySubmission></MySubmission>,
      },
      {
        path: "withdrawa",
        element: <Withdrawa></Withdrawa>,
      },
    ],
  },
]);
