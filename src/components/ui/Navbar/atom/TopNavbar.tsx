"use client";

import React, { useState } from "react";
import Image from "next/image";
import img from "/public/navbar/logo.png";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io"; // for close icon
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SiHomeassistant } from "react-icons/si";
import { FaAccusoft, FaHandsHelping } from "react-icons/fa";
import { IoBook } from "react-icons/io5";
import { MdWifiCalling3 } from "react-icons/md";

const TopNavbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname=usePathname()

  return (
    <>
      {/* Top Nav */}
      <div className="mt-1">
        <div className="flex items-center justify-between px-3">
          <div>
          <Link href="/">
            <Image src={img} width={156} height={30} alt="logo" className="h-[70px] w-[100px] md:h-[80px] md:w-full"/>
          </Link>

          </div>

          <div className=" items-center gap-7 hidden md:flex">
            <Link href="/" className={`text-base font-semibold ${pathname === "/"?"border-b-[#FAA61A]   font-bold text-[#FAA61A]":"border-b-transparent text-gray-700"}  p-2  border-b-2  hover:text-[#FAA61A] transition-all duration-300`}>Home</Link>
            <Link href="/about-us" className={`text-base font-semibold ${pathname === "/about-us"?"border-b-[#FAA61A]   font-bold text-[#FAA61A]":"border-b-transparent text-gray-700"}  p-2  border-b-2  hover:text-[#FAA61A] transition-all duration-300`}>About us</Link>
            <Link href="/services" className={`text-base font-semibold ${pathname === "/services"?"border-b-[#FAA61A]   font-bold text-[#FAA61A]":"border-b-transparent text-gray-700"}  p-2  border-b-2  hover:text-[#FAA61A] transition-all duration-300`}>Services</Link>
            <Link href="/blog" className={`text-base font-semibold ${pathname === "/blog"?"border-b-[#FAA61A]   font-bold text-[#FAA61A]":"border-b-transparent text-gray-700"}  p-2  border-b-2  hover:text-[#FAA61A] transition-all duration-300`}>Blogs</Link>
            <Link href="/contact-us" className={`text-base font-semibold ${pathname === "/contact-us"?"border-b-[#FAA61A]   font-bold text-[#FAA61A]":"border-b-transparent text-gray-700"}  p-2  border-b-2  hover:text-[#FAA61A] transition-all duration-300`}>Contact Us</Link>


          </div>

          <div className="flex items-center gap-3">
             {/* <ThemeToggle /> */}
             <Link href="" className="text-sm font-normal px-2 py-1  md:text-base md:font-semibold text-white bg-[#F6881F] md:px-4 md:py-2 rounded-md">Sedule for Meeting</Link>
            <button  className="bg-gray-100 block md:hidden text-color-btn shadow-sm p-2 rounded-full" onClick={() => setIsDrawerOpen(true)}>
              <HiMiniBars3CenterLeft  size={20} className="text-[#333B4E]  rotate-180 " />
            </button> 

       
          </div>
        </div>
      </div>

      {/* Drawer Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      {/* Drawer Content */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-[#FAFAFA] shadow-lg z-50 transform transition-transform duration-300 ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-b-gray-200">
        <Link href="/">
            <Image src={img} width={156} height={30} alt="logo" className="h-[70px] w-[80px]"/>
          </Link>
          <button className="text-red-400 cursor-pointer" onClick={() => setIsDrawerOpen(false)}>
            <IoMdClose size={24} />
          </button>
        </div>

        <div className="p-4 ">
          <Link onClick={()=>setIsDrawerOpen(false)} href="/" className={`flex gap-2 items-center text-base font-semibold ${pathname === "/"?"font-bold text-[#FAA61A]":"text-gray-700"}  p-2   hover:text-[#FAA61A] transition-all duration-300`}>
          <SiHomeassistant />
            Home
          </Link>
          <Link href="/about-us" onClick={()=>setIsDrawerOpen(false)} className={`flex gap-2 items-center text-base font-semibold ${pathname === "/about-us"?"font-bold text-[#FAA61A]":"text-gray-700"}  p-2   hover:text-[#FAA61A] transition-all duration-300`}>
          <FaAccusoft size={20}/>
            About Us
          </Link>

         <Link href="/services" onClick={()=>setIsDrawerOpen(false)} className={`flex gap-2 items-center text-base font-semibold ${pathname === "/services"?"font-bold text-[#FAA61A]":"text-gray-700"}  p-2   hover:text-[#FAA61A] transition-all duration-300`}>
          <FaHandsHelping size={18}/>
            Services
          </Link>
          <Link href="/blog" onClick={()=>setIsDrawerOpen(false)} className={`flex gap-2 items-center text-base font-semibold ${pathname === "/blog"?"font-bold text-[#FAA61A]":"text-gray-700"}  p-2   hover:text-[#FAA61A] transition-all duration-300`}>
          <IoBook  size={16}/>
            Blogs
          </Link>

          <Link href="/contact-us" onClick={()=>setIsDrawerOpen(false)} className={`flex gap-2 items-center text-base font-semibold ${pathname === "/contact-us"?"font-bold text-[#FAA61A]":"text-gray-700"}  p-2   hover:text-[#FAA61A] transition-all duration-300`}>
          <MdWifiCalling3   size={20}/>
            Contact us
          </Link>
        </div>
      </div>
    </>
  );
};

export default TopNavbar;
