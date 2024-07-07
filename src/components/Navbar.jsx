import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const handleSearchText = (e) => {
    setSearchText(e.target.value);
  };
  const handleSearch = () => {
    navigate(`/search/${searchText}`);
  };
  const handleChnage = (e) => {
    const category = e.target.value;
    navigate(`/category/${category}`);
    console.log(category);
  };

  return (
    <div className="bg-[#002765] sticky top-0  text-white p-5 flex items-center max-sm:p-2 max-sm: ">
      <Link to={"/"}>
        <img
          className="w-20 bg-blue-300 rounded-sm p-2 max-sm:hidden"
          src={logo}
          alt="logo"
        />
      </Link>
      <nav>
        <Link className="mx-10 max-sm:mx-2" to="/">
          Home
        </Link>
        <Link className="mx-10 max-sm:mx-2" to="/about">
          About
        </Link>
        <select
          className="text-black rounded-md p-2 mx-6 max-sm:mt-3 max-sm:mx-2"
          name="category"
          id=""
          onChange={handleChnage}
        >
          <option value="sports">Sports</option>
          <option value="business">Business</option>
          <option value="technology">Technology</option>
          <option value="entertainment">Entertainment</option>
          <option value="general" selected>
            General
          </option>
          <option value="science">Science</option>
          <option value="health">Health</option>
        </select>
      </nav>
      <div className=" max-sm:flex max-sm:mx-2">
        <input
          className="w-96 p-2 text-black outline-none max-sm:w-32 max-sm:mt-9"
          type="text"
          name=""
          id=""
          placeholder="Search News"
          value={searchText}
          onChange={handleSearchText}
        />
        <button onClick={handleSearch} className="bg-blue-900 p-2 max-sm:mt-9 ">
          Search
        </button>
      </div>
    </div>
  );
};

export default Navbar;
