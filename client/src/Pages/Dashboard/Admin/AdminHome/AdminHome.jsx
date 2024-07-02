import { FaCoins } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import WithdrawRequest from "./WithdrawRequest";

const AdminHome = () => {
  const axiosSecure = useAxiosSecure();
  const [data, setData] = useState();
  useEffect(() => {
    async function stateData() {
      const { data } = await axiosSecure("/admin-stats");
      setData(data);
    }
    stateData();
  }, []);
  return (
    <div>
      <section className="p-6 my-6 dark:bg-gray-100 dark:text-gray-800">
        <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
              <FaUsers className="text-white text-3xl" />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leading-none">
                {data?.users}
              </p>
              <p className="capitalize">User</p>
            </div>
          </div>
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
              <FaCoins className="text-white text-3xl" />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leading-none">
                {data?.totalCoin[0]?.total}
              </p>
              <p className="capitalize">Coin</p>
            </div>
          </div>
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
              <RiSecurePaymentFill className="text-white text-3xl" />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leading-none">172%</p>
              <p className="capitalize">Payments</p>
            </div>
          </div>
        </div>
      </section>
      <WithdrawRequest></WithdrawRequest>
    </div>
  );
};

export default AdminHome;
