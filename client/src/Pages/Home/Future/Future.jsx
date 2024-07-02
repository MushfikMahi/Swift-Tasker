import React, { useEffect, useState } from "react";
import useAxiosCommon from "../../../Hooks/useAxiosCommon";
import { Link } from "react-router-dom";

const Future = () => {
  const axiosCommon = useAxiosCommon();
  const [futures, setFutures] = useState([]);

  useEffect(() => {
    axiosCommon("/future").then((result) => {
      setFutures(result.data);
    });
  }, []);

  return (
    <div className="py-20 container mx-auto">
      <h2 className="text-center text-3xl font-bold pb-5">All futures</h2>
      <div className="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {futures.map((future) => (
          <div
            key={future?._id}
            className="w-full max-w-sm px-4 py-3 bg-white rounded-md hover:scale-[1.05] transition-all"
          >
            <div className="flex items-center justify-center">
              <img
                src={future?.image}
                className="h-40 w-40 rounded-full"
                alt=""
              />
            </div>

            <div>
              <h1 className="mt-2 text-lg font-semibold text-center text-gray-800 ">
                {future?.title}
              </h1>

              <p className="mt-2 text-sm text-gray-600 text-center">
                {future?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Future;
