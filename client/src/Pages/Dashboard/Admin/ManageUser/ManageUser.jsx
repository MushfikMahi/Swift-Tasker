import { useEffect, useState } from "react";
import { MdOutlineDoNotDisturb } from "react-icons/md";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageUser = () => {
  const [workers, setWorkers] = useState([]);
  const [control, setControl] = useState(false);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get("/worker").then((data) => setWorkers(data.data));
  }, [axiosSecure, control]);
  const handleRemove = (worker) => {
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

        fetch(`${import.meta.env.VITE_API_URL}/userdelete/${worker._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(async (data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "The User has been deleted.", "success");
              // await axiosSecure.patch(`/user/${user?.email}`, { newCoin });
              // refetch();
              setControl(!control);
            }
          });
      }
    });
  };
  const handleRole = (role, worker) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to make him/her ${role}!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, Make ${role}`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data } = await axiosSecure.patch(`/worker/${worker._id}`, {
          newRole: role,
        });
        // console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire(
            "Updated!",
            `This user role has updated to ${role} .`,
            "success"
          );
          setControl(!control);
        }
      }
    });
  };
  return (
    <div>
      {/* <div>
        <div className="overflow-x-auto  min-h-screen">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Photo</th>
                <th>Role</th>
                <th>Coin</th>
                <th>Remove</th>
                <th>Update Role</th>
              </tr>
            </thead>
            <tbody>
              {workers.map((worker, index) => (
                <tr key={worker._id}>
                  <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                    {worker?.displayName}
                  </td>

                  <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                    {worker?.email}
                  </td>

                  <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                    {worker?.photo_url}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                    {worker?.role}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                    {worker?.role}
                  </td>
                  <td className="px-4 py-4 text-sm whitespace-nowrap">
                    <p
                      onClick={handleRemove}
                      className="text-xl text-[#e74c3c] cursor-pointer hover:text-[#005fa3]"
                    >
                      <MdOutlineDoNotDisturb />
                    </p>
                  </td>
                  <td className="px-4 py-4 text-sm font-medium text-gray-00 whitespace-nowrap">
                    <div className="dropdown dropdown-end">
                      <div tabIndex={0} role="button" className="btn m-1">
                        Click
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[100] menu p-2 shadow bg-base-100 rounded-box w-52"
                      >
                        <li>
                          <a>Item 1</a>
                        </li>
                        <li>
                          <a>Item 2</a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}

      <section className="container px-4 mx-auto pt-24">
        <div className="flex items-center gap-x-3">
          <h2 className="text-lg font-medium text-gray-800 ">Worker&rsquo;s</h2>

          <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
            {workers?.length} worker&rsquo;s
          </span>
        </div>

        <div className="flex flex-col mt-6 min-h-[80vh]">
          <div className="-mx-4 -my-2 overflow-x-auto min-h-[50vh] sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className=" border border-gray-200  md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        <div className="flex items-center gap-x-3">
                          <span>Name</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        <span>Email</span>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        <button className="flex items-center gap-x-2">
                          <span>Photo</span>
                        </button>
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        <button className="flex items-center gap-x-2">
                          <span>Role</span>
                        </button>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        Coin
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        Remove
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        Update Role
                      </th>

                      {/* <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                      Actions
                    </th> */}
                    </tr>
                  </thead>
                  {workers.map((worker) => (
                    <tbody
                      key={worker._id}
                      className="bg-white divide-y divide-gray-200 "
                    >
                      <tr>
                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          {worker?.displayName}
                        </td>

                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          {worker?.email}
                        </td>

                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          {worker?.photoUR}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          {worker?.role}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          {worker?.role}
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <p
                            onClick={() => handleRemove(worker)}
                            className="text-xl text-[#e74c3c] cursor-pointer hover:text-[#005fa3]"
                          >
                            <MdOutlineDoNotDisturb />
                          </p>
                        </td>
                        {/* <p
                            onClick={() => handleRole()}
                            className="text-2xl text-[#e74c3c] cursor-pointer hover:text-[#c0392b]"
                          > */}
                        <td className="px-4 py-4 text-sm font-medium text-gray-00 whitespace-nowrap">
                          <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn m-1">
                              <IoIosArrowDown />
                            </div>
                            <ul
                              tabIndex={0}
                              className="dropdown-content z-[100] menu p-2 shadow bg-base-100 rounded-box w-52"
                            >
                              <li className="">
                                <Link
                                  onClick={() =>
                                    handleRole("TaskCreator", worker)
                                  }
                                >
                                  TaskCreator
                                </Link>
                              </li>
                              <li className="">
                                <Link
                                  onClick={() => handleRole("Admin", worker)}
                                >
                                  Admin
                                </Link>
                              </li>
                              {/* <select className="select w-full max-w-xs">
                            <option disabled selected>
                              <IoIosArrowDown />
                            </option>
                            <option>Homer</option>
                            <option>Marge</option>
                          </select> */}
                            </ul>
                          </div>
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

export default ManageUser;
