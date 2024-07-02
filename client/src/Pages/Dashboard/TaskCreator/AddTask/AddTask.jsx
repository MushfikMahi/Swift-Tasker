import toast from "react-hot-toast";
import useAuth from "../../../../Hooks/useAuth";
import { imageUpload } from "../../../../api/utils";
import DatePicker from "react-datepicker";
import useRole from "../../../../Hooks/useRole";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { axiosSecure } from "../../../../Hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
const AddTask = () => {
  const { user } = useAuth();
  const [data, refetch] = useRole();
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [showToast, setShowToast] = useState(false);
  const handleDateChange = (date) => {
    const today = new Date();
    const oneDayLater = new Date();
    oneDayLater.setDate(today.getDate() + 1);

    if (date < oneDayLater) {
      setShowToast(true);
    } else {
      setShowToast(false);
      setStartDate(date);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (showToast) {
      return toast.error(
        "You must select a date at least one day later than today."
      );
    } else {
      const form = e.target;
      const task_title = form.task_title.value;
      const submission_info = form.submission_info.value;
      const email = form.email.value;
      const completion_date = startDate;
      const task_quantity = parseFloat(form.task_quantity.value);
      const payable_amount = parseFloat(form.payable_amount.value);
      const task_detail = form.task_detail.value;
      const image = form.image.files[0];
      const currentTime = new Date().toISOString();
      const totalAmount = task_quantity * payable_amount;

      if (totalAmount < data.coin) {
        const task_image_url = await imageUpload(image);
        const task = {
          task_title,
          task_detail,
          task_quantity,
          payable_amount,
          completion_date,
          submission_info,
          task_image_url,
          task_creator: {
            email,
            name: user?.displayName,
          },
          created_at: currentTime,
        };
        const newCoin = data.coin - totalAmount;
        // console.log(task);
        try {
          const { data } = await axiosSecure.post("/task", task);
          // console.log(data);
          toast.success("Task Created Successfully!");
          await axiosSecure.patch(`/user/${user?.email}`, { newCoin });
          refetch();
          navigate("/mytask");
        } catch (err) {
          console.log(err);
        }
      } else return toast.error("Not available Coin. Purchase Coin");
    }
  };

  return (
    <div className="flex justify-center pt-24 items-center min-h-[calc(100vh-306px)] mb-12">
      <section className=" p-2 md:p-6 mx-auto bg-white rounded-md shadow-md ">
        <h2 className="text-lg font-semibold text-gray-700 capitalize ">
          Add A Task
        </h2>

        <form onSubmit={handleFormSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 " htmlFor="task_title">
                Task Title
              </label>
              <input
                id="task_title"
                name="task_title"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="emailAddress">
                Email Address
              </label>
              <input
                id="emailAddress"
                type="email"
                name="email"
                disabled
                defaultValue={user?.email}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700">Deadline</label>
              {/* Date Picker Input Field */}
              <DatePicker
                className="border p-2 rounded-md"
                selected={startDate}
                onChange={handleDateChange}
              />
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="task_quantity">
                Task Quantity
              </label>
              <input
                id="task_quantity"
                name="task_quantity"
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 " htmlFor="thumbnail_url">
                Task Image
              </label>
              <input
                required
                name="image"
                type="file"
                className="file-input w-full max-w-xs"
              />
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="payable_amount">
                Payable Amount
              </label>
              <input
                id="payable_amount"
                name="payable_amount"
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label className="text-gray-700 " htmlFor="task_detail">
              Task Detail
            </label>
            <textarea
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              name="task_detail"
              id="task_detail"
            ></textarea>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label className="text-gray-700 " htmlFor="submission_info">
              Submission Detail
            </label>
            <textarea
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              name="submission_info"
              id="submission_info"
            ></textarea>
          </div>
          <div className="flex justify-end mt-6">
            <button className="btn bg-[#007BA7] text-white leading-5 transition-colors duration-300 transhtmlForm ">
              Add Task
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddTask;
