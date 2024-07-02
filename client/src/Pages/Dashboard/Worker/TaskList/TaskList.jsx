import { Link, useLoaderData } from "react-router-dom";

const TaskList = () => {
  const tasks = useLoaderData();
  // console.log(tasks);
  return (
    <div className="py-20 container mx-auto">
      <h2 className="text-center text-3xl font-bold pb-5">All tasks</h2>
      <div className="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {tasks.map((task) => (
          <div
            key={task?._id}
            className="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-light text-gray-800 ">
                Deadline: {new Date(task?.completion_date).toLocaleDateString()}
              </span>
              <span className="px-3 py-1 text-[8px] text-black uppercase font-bold bg-blue-200 rounded-full ">
                Quuantity: {task?.task_quantity}
              </span>
            </div>

            <div>
              <h1 className="mt-2 text-lg font-semibold text-gray-800 ">
                {task?.task_title}
              </h1>

              <p className="mt-2 text-sm text-gray-600 ">
                Creator: {task?.creator_name}
              </p>
              <p className="mt-2 text-sm font-bold text-gray-600 ">
                Payable Amount: ${task?.payable_amount}
              </p>
            </div>
            <hr className="my-5" />
            <div className="card-actions justify-center">
              <Link to={`task/${task?._id}`}>
                <button className="btn bg-[#008080] text-white">
                  View Detail
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
