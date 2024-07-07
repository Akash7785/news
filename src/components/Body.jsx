import React from "react";
import NewsCard from "./NewsCard";
import TopNews from "./TopNews";

const Body = () => {
  return (
    <div className="bg-[#F8F8F8] w-full ">
      <div className="w-1/2 p-2 m-auto max-sm:w-full max-sm:px-5">
        <h1 className="text-2xl font-bold">Top News</h1>
        <TopNews />
      </div>
    </div>
  );
};

export default Body;
