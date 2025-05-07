import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoMicOutline } from "react-icons/io5";
import { LuListCollapse } from "react-icons/lu";

const BottomNavbar = () => {
  return (
    <div className="flex items-center gap-3 justify-center mt-5">
      <div className="px-3 flex items-center  rounded-md bg-[#fff] dark:bg-[#111827] border border-[#E6EBEE] p-3.5 gap-2 w-full dark:border-gray-800">
        <CiSearch size={20} className="text-[#333B4E] dark:text-gray-100" />
        <input
          type="text"
          placeholder="search..."
          className="placeholder:text-[#8391A1] placeholder:text-sm placeholder:font-normal w-full focus:outline-none dark:placeholder:text-gray-100"
        />
        <IoMicOutline color="#8391A1" size={30} />
      </div>
      <button className="bg-[#FE9900] p-2 rounded-md text-white">
        <LuListCollapse
          size={38}
          className="text-[#333B4E] dark:text-gray-100"
        />
      </button>
    </div>
  );
};

export default BottomNavbar;
