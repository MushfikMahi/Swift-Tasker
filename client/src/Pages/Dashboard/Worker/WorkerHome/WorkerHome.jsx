import { FaCoins } from "react-icons/fa";
import { FaFileImport } from "react-icons/fa";
import { IoWalletOutline } from "react-icons/io5";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import Approved from "./Approved";
const WorkerHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [state, setStates] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axiosSecure(`/worker-state/${user?.email}`);
        setStates(result.data);
      } catch (error) {
        console.error("Error fetching worker states:", error);
        // You can also set an error state or show a notification here
      }
    };

    if (user?.email) {
      fetchData();
    }
  }, [user]);

  return (
    <div>
      <section className="p-6 my-6 dark:bg-gray-100 dark:text-gray-800">
        <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
              <FaCoins className="text-3xl text-white" />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leading-none">
                {state?.coin?.coin}
              </p>
              <p className="capitalize">Coin</p>
            </div>
          </div>
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
              <FaFileImport className="text-3xl text-white" />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leading-none">
                {state?.totalSubmission}
              </p>
              <p className="capitalize">Total Submission</p>
            </div>
          </div>
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
              <IoWalletOutline className="text-3xl text-white" />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leading-none">172%</p>
              <p className="capitalize">Growth</p>
            </div>
          </div>
        </div>
      </section>
      <Approved></Approved>
    </div>
  );
};

export default WorkerHome;
