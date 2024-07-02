import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { FaCoins } from "react-icons/fa";
import useAuth from "../../../../Hooks/useAuth";
import useRole from "../../../../Hooks/useRole";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { MdOutlinePendingActions, MdPayment } from "react-icons/md";
import { MdOutlineDoNotDisturb } from "react-icons/md";
const TaskCreatorHome = () => {
  const { user } = useAuth();
  // console.log(user);
  const [data, refetch] = useRole();
  const [tasks, setTasks] = useState([]);
  const [states, setStates] = useState([]);
  const axiosSecure = useAxiosSecure();
  const [control, setControl] = useState(false);
  useEffect(() => {
    axiosSecure(`/submitted/${user?.email}`).then(
      (result) => {
        setTasks(result.data);
        // console.log(result.data);
      },

      axiosSecure(`/taskCreator-state/${user?.email}`).then((result) => {
        setStates(result.data);
      })
    );
  }, [user, control, axiosSecure]);

  const [selectedTask, setSelectedTask] = useState(null);
  const closeModal = () => {
    setSelectedTask(null);
  };

  const openModal = (task) => {
    setSelectedTask(task);
    document.getElementById(`modal_${task._id}`).showModal();
  };

  const handleStatus = async (status, id) => {
    const newStatus = status;
    // console.log(newStatus, id);
    try {
      const { data } = await axiosSecure.patch(
        `${import.meta.env.VITE_API_URL}/submissionMark/${id}`,
        { newStatus }
      );
      // console.log(data);
      toast.success(`Task ${newStatus} Successfully!`);
      // navigate('/')
    } catch (err) {
      console.log(err);
    }
  };
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
                {states?.coin?.coin}
              </p>
              <p className="capitalize">Coin</p>
            </div>
          </div>
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
              <MdOutlinePendingActions className="text-3xl text-white" />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leading-none">
                {states?.quantity[0]?.totalQuantity}
              </p>
              <p className="capitalize">Pending Task</p>
            </div>
          </div>
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
              <MdPayment className="text-3xl text-white" />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leading-none">172%</p>
              <p className="capitalize">Payment</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container px-4 mx-auto pt-24">
        <div className="flex items-center gap-x-3">
          <h2 className="text-lg font-medium text-gray-800 ">
            Task&rsquo;s To Review
          </h2>

          <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
            {tasks?.length} Task&rsquo;s
          </span>
        </div>

        <div className="flex flex-col mt-6 min-h-[80vh]">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        <div className="flex items-center gap-x-3">
                          <span>Worker Info</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        <span>Title</span>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        <button className="flex items-center gap-x-2">
                          <span>Amount</span>
                        </button>
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        <button className="flex items-center gap-x-2">
                          <span>Detail</span>
                        </button>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        Approve
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        Reject
                      </th>

                      {/* <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                      Actions
                    </th> */}
                    </tr>
                  </thead>
                  {tasks.map((task) => (
                    <tbody
                      key={task._id}
                      className="bg-white divide-y divide-gray-200 "
                    >
                      <tr>
                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          {task?.worker_info.displayName}
                          <br />
                          {task?.worker_info.email}
                        </td>

                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          {task?.task_title}
                        </td>

                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          {task?.payable_amount}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          {/* Open the modal using document.getElementById('ID').showModal() method */}
                          <button
                            className="btn"
                            onClick={() => openModal(task)}
                          >
                            View Submission Details
                          </button>

                          <dialog id={`modal_${task._id}`} className="modal">
                            <div className="modal-box">
                              <p className="py-4">{task.submission_details}</p>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                              <button onClick={closeModal}>Close</button>
                            </form>
                          </dialog>
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <p
                            onClick={() => handleStatus("Approved", task?._id)}
                            className="text-xl text-[#0077cc] cursor-pointer hover:text-[#005fa3]"
                          >
                            <MdOutlinePendingActions />
                          </p>
                        </td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-00 whitespace-nowrap">
                          <p
                            onClick={() => handleStatus("Reject", task?._id)}
                            className="text-2xl text-[#e74c3c] cursor-pointer hover:text-[#c0392b]"
                          >
                            <MdOutlineDoNotDisturb />
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaskCreatorHome;
