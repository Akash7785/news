import React, { useState } from "react";

const FilterNews = () => {
  const [checkedValue, setChckedVlaue] = useState("publishedAt");
  const handleFilter = (value) => {
    console.log(value);
    setChckedVlaue(value);
  };
  return (
    <div className="w-[10%]">
      <h1 className="ml-40 text-xl font-bold w-full mt-2 p-2">Filter By</h1>
      <div className=" ml-40 bg-red-500">
        <div className="flex">
          <input
            type="radio"
            id=""
            name="filterBy"
            checked={checkedValue === "publishedAt"}
            onChange={() => handleFilter}
          />
          <label className="mx-2" htmlFor="publishedAt">
            PublishedAt
          </label>
        </div>
        <div className="flex">
          <input
            type="radio"
            id=""
            name="filterBy"
            checked={checkedValue === "relevancy"}
            onChange={() => handleFilter}
          />
          <label className="mx-2" htmlFor="relevancy">
            Relevancy
          </label>
        </div>
        <div className="flex my-2">
          <input
            type="radio"
            id=""
            name="filterBy"
            checked={checkedValue === "popularity"}
            onChange={() => handleFilter}
          />
          <label className="mx-2" htmlFor="popularity">
            Popularity
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterNews;
