import React from "react";

const Shimmer = () => {
  return Array(10)
    .fill(0)
    .map((n, i) => (
      <div
        key={i}
        className="p-2  w-1/2 shadow-md hover:shadow-lg mt-5 max-sm:w-full"
      >
        <div className=" ">
          <img className="h-56 w-full min-h-56 max-h-56 object-cover  bg-gray-200" />
          <p className="bg-gray-300 w-full h-2 p-2 mt-2"></p>
          <p className="bg-gray-300 w-full h-20 p-2 mt-2"></p>
        </div>
      </div>
    ));
};

export default Shimmer;
