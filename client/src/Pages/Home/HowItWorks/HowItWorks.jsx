import React from "react";
import { IoMdPersonAdd } from "react-icons/io";
import { FaTasks } from "react-icons/fa";
import { BsCoin } from "react-icons/bs";
const HowItWorks = () => {
  return (
    <div className="py-20 container mx-auto">
      <h2 className="text-center text-3xl font-bold pb-20">How It Works</h2>
      <div className="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="relative w-full max-w-sm px-4 py-3 space-y-5 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all">
          <h1 className="text-2xl absolute left-[45%] -top-10 font-bold bg-[#008080] text-white btn-circle flex items-center justify-center">
            1
          </h1>
          <div>
            <IoMdPersonAdd className="text-6xl text-[#008080]" />
          </div>

          <div>
            <h1 className="mt-2 text-lg font-semibold text-gray-800">
              Register
            </h1>

            <p className="mt-2 text-sm text-gray-600 ">
              Sign up easily to start your journey. Create an account with just
              a few clicks and join our platform to begin completing tasks and
              earning rewards.
            </p>
          </div>
        </div>
        <div className="relative w-full max-w-sm px-4 py-3 space-y-5 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all">
          <h1 className="text-2xl absolute left-[50%] -top-10 font-bold bg-[#008080] text-white btn-circle flex items-center justify-center">
            2
          </h1>
          <div>
            <FaTasks className="text-6xl text-[#008080]" />
          </div>

          <div>
            <h1 className="mt-2 text-lg font-semibold text-gray-800 ">
              Complete Tasks
            </h1>

            <p className="mt-2 text-sm text-gray-600 ">
              Browse through a variety of available tasks. Choose the ones that
              interest you, complete them, and track your progress as you go.
            </p>
          </div>
        </div>
        <div className="relative w-full max-w-sm px-4 py-3 space-y-5 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all">
          <h1 className="text-2xl absolute left-[50%] -top-10 font-bold bg-[#008080] text-white btn-circle flex items-center justify-center">
            3
          </h1>
          <div>
            <BsCoin className="text-6xl text-[#008080]" />
          </div>

          <div>
            <h1 className="mt-2 text-lg font-semibold text-gray-800 ">
              Earn Rewards
            </h1>

            <p className="mt-2 text-sm text-gray-600 ">
              Get rewarded for your hard work! Accumulate coins and exchange
              them for exciting rewards. The more tasks you complete, the more
              you earn.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
