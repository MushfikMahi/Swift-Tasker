import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useRole from "../../../../Hooks/useRole";
import { RiDeleteBin6Fill } from "react-icons/ri";

const ManageTask = () => {
  const axiosSecure = useAxiosSecure();
  const [data, refetch] = useRole();
  // const tasks = useLoaderData();
  const [tasks, setTasks] = useState([]);
  const [control, setControl] = useState(false);
  useEffect(() => {
    axiosSecure("/tasks").then((result) => {
      setTasks(result.data);
      // console.log(result.data);
    });
  }, [axiosSecure, control]);

  const [selectedTask, setSelectedTask] = useState(null);
  const closeModal = () => {
    setSelectedTask(null);
  };

  const openModal = (task) => {
    setSelectedTask(task);
    document.getElementById(`modal_${task._id}`).showModal();
  };

  const handleDelete = (task) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // const newAmount = task?.task_quantity * task?.payable_amount;
        // const newCoin = data.coin + newAmount;

        fetch(`${import.meta.env.VITE_API_URL}/delete/${task._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(async (data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "The Craft has been deleted.", "success");
              // await axiosSecure.patch(`/user/${user?.email}`, { newCoin });
              // refetch();
              setControl(!control);
            }
          });
      }
    });
  };

  return (
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
                        <span>Task Title</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <span>TaskCreator Name</span>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <button className="flex items-center gap-x-2">
                        <span>Task Quantity</span>
                      </button>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <button className="flex items-center gap-x-2">
                        <span>Coin</span>
                      </button>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      Availability
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      View Task
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      Delete Task
                    </th>
                  </tr>
                </thead>
                {tasks.map((task) => (
                  <tbody
                    key={task?._id}
                    className="bg-white divide-y divide-gray-200 "
                  >
                    <tr>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {task?.task_title}
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {task?.task_creator?.name}
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {task?.task_quantity}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {task?.payable_amount}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {task?.availability}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn" onClick={() => openModal(task)}>
                          View Details
                        </button>
                        <dialog id={`modal_${task?._id}`} className="modal">
                          <div className="modal-box w-8/12 max-w-5xl">
                            <div className="flex flex-col container mx-auto gap-5 py-20">
                              <div className="flex-1">
                                <img
                                  src={task?.task_image_url}
                                  alt={task?.task_title}
                                />
                              </div>
                              <div className="flex items-center justify-center">
                                <div className="flex-1 space-y-5">
                                  <h2 className="text-3xl font-bold">
                                    {task?.task_title}
                                  </h2>
                                  <p>{task?.task_detail}</p>
                                  <hr />
                                  <div className="flex justify-between">
                                    <div>
                                      <p className="font-bold">
                                        Price: ${task?.payable_amount}
                                      </p>
                                    </div>
                                    <div>
                                      <p className="flex items-center gap-2 font-bold">
                                        {" "}
                                        <span className="text-yellow-500"></span>{" "}
                                        {task?.submission_details}
                                      </p>
                                    </div>
                                  </div>
                                  <hr />
                                  <div className="space-y-3">
                                    <h3 className="font-bold">
                                      Quantity : {task?.task_quantity}
                                    </h3>
                                    <hr />
                                  </div>
                                  <hr />
                                  <div>
                                    <p className="font-bold">
                                      Owner Information :{" "}
                                    </p>
                                    <p>Name : {task?.task_creator?.name}</p>
                                    <p>Email : {task?.task_creator?.email}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <form method="dialog" className="modal-backdrop">
                            <button onClick={closeModal}>Close</button>
                          </form>
                        </dialog>
                      </td>
                      <td className="px-4 py-4 text-sm font-medium text-gray-00 whitespace-nowrap">
                        <p
                          onClick={() => handleDelete(task)}
                          className="text-2xl text-[#e74c3c] cursor-pointer hover:text-[#c0392b]"
                        >
                          <RiDeleteBin6Fill />
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
  );
};

export default ManageTask;
