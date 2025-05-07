import React from "react";
import { GiHouse } from "react-icons/gi";
import { GoHeart } from "react-icons/go";
import { MdManageAccounts } from "react-icons/md";
import { RiShoppingBag4Line } from "react-icons/ri";
import { TbCategory } from "react-icons/tb";

const MobileFooter = () => {
  return (
    <div className="bg-primary  p-5 ">
      <div className="flex gap-5 items-center justify-between">
        <button className="flex flex-col items-center justify-center text-[#FE9900] font-semibold text-sm">
          <GiHouse size={20} />
          Home
        </button>
        <button className="flex flex-col items-center justify-center text-[#333B4E] dark:text-gray-200 font-semibold text-sm hover:text-[#FE9900] transition-all duration-200">
          <TbCategory size={20} />
          Categories
        </button>

        <button className="flex flex-col items-center justify-center text-[#333B4E] dark:text-gray-200 font-semibold text-sm hover:text-[#FE9900] transition-all duration-200">
            <RiShoppingBag4Line size={20} />
          Shop
        </button>
   
        <button className="flex flex-col items-center justify-center text-[#333B4E] dark:text-gray-200 font-semibold text-sm hover:text-[#FE9900] transition-all duration-200">
          <GoHeart size={20} />
          Wishlist
        </button>
        <button className="flex flex-col items-center justify-center text-[#333B4E] dark:text-gray-200 font-semibold text-sm hover:text-[#FE9900] transition-all duration-200">
          <MdManageAccounts size={22} />
          Profile
        </button>
      </div>
    </div>
  );
};

export default MobileFooter;
