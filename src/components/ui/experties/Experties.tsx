import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";

import { DiCodeBadge } from "react-icons/di";
import { FaMobileScreen } from "react-icons/fa6";
import { AiTwotoneBuild } from "react-icons/ai";
import { FaCloudversify, FaPhotoVideo } from "react-icons/fa";
import { IoServer } from "react-icons/io5";
import { IoLogoSass } from "react-icons/io";
import { SiRedhatopenshift } from "react-icons/si";

const Experties = () => {
  return (
    <div className="bg-[#767F8A] py-5 md:py-20">
      <MaxWidthWrapper>
        <h2 className="text-3xl  font-bold  uppercase text-center text-white">
          Our Expertise
        </h2>
        <p className="h-[2px] bg-[#FAA61A] w-[100px] mt-3 flex mx-auto"></p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {/* ------ */}
          <div>
            <div className="flex justify-center items-center">
              <button className="bg-[#54606E] p-5 rounded-md ">
                <DiCodeBadge size={50} className="text-[#FAA61A]" />
              </button>
            </div>

            <h2 className="text-white font-bold text-lg mt-10  md:text-2xl text-center">
              Web Applications
            </h2>
            <p className="h-[2px] bg-gray-400 w-[100px] mt-8 flex mx-auto"></p>
          </div>
          {/* ------ */}

          {/* ------ */}
          <div>
            <div className="flex justify-center items-center">
              <button className="bg-[#54606E] p-5 rounded-md ">
                <FaMobileScreen size={50} className="text-[#FAA61A]" />
              </button>
            </div>

            <h2 className="text-white font-bold text-lg mt-10  md:text-2xl text-center">
              Mobile Applications
            </h2>
            <p className="h-[2px] bg-gray-400 w-[100px] mt-8 flex mx-auto"></p>
          </div>
          {/* ------ */}

          {/* ------ */}
          <div>
            <div className="flex justify-center items-center">
              <button className="bg-[#54606E] p-5 rounded-md ">
                <AiTwotoneBuild size={50} className="text-[#FAA61A]" />
              </button>
            </div>

            <h2 className="text-white font-bold text-lg mt-10  md:text-2xl text-center">
              Custom UI/UX
            </h2>
            <p className="h-[2px] bg-gray-400 w-[100px] mt-8 flex mx-auto"></p>
          </div>
          {/* ------ */}

          {/* ------ */}
          <div>
            <div className="flex justify-center items-center">
              <button className="bg-[#54606E] p-5 rounded-md ">
                <FaPhotoVideo size={50} className="text-[#FAA61A]" />
              </button>
            </div>

            <h2 className="text-white font-bold text-lg mt-10  md:text-2xl text-center">
              Profesonal Video Edit
            </h2>
            <p className="h-[2px] bg-gray-400 w-[100px] mt-8 flex mx-auto"></p>
          </div>
          {/* ------ */}

            {/* ------ */}
            <div  className=" mt-16">
            <div className="flex justify-center items-center">
              <button className="bg-[#54606E] p-5 rounded-md ">
                <FaCloudversify  size={50} className="text-[#FAA61A]" />
              </button>
            </div>

            <h2 className="text-white font-bold text-lg mt-10  md:text-2xl text-center">
            Cloud Soluations
            </h2>
            <p className="h-[2px] bg-gray-400 w-[100px] mt-8 flex mx-auto"></p>
          </div>
          {/* ------ */}

            {/* ------ */}
            <div  className=" mt-16">
            <div className="flex justify-center items-center">
              <button className="bg-[#54606E] p-5 rounded-md ">
                <IoServer  size={50} className="text-[#FAA61A]" />
              </button>
            </div>

            <h2 className="text-white font-bold text-lg mt-10  md:text-2xl text-center">
            Server Soluations
            </h2>
            <p className="h-[2px] bg-gray-400 w-[100px] mt-8 flex mx-auto"></p>
          </div>
          {/* ------ */}

             {/* ------ */}
             <div  className=" mt-16">
            <div className="flex justify-center items-center">
              <button className="bg-[#54606E] p-5 rounded-md ">
                <IoLogoSass   size={50} className="text-[#FAA61A]" />
              </button>
            </div>

            <h2 className="text-white font-bold text-lg mt-10  md:text-2xl text-center">
          Sass Product
            </h2>
            <p className="h-[2px] bg-gray-400 w-[100px] mt-8 flex mx-auto"></p>
          </div>
          {/* ------ */}

  {/* ------ */}
  <div  className=" mt-16">
            <div className="flex justify-center items-center">
              <button className="bg-[#54606E] p-5 rounded-md ">
                <SiRedhatopenshift    size={50} className="text-[#FAA61A]" />
              </button>
            </div>

            <h2 className="text-white font-bold text-lg mt-10  md:text-2xl text-center">
            AI & Machine Learning
            </h2>
            <p className="h-[2px] bg-gray-400 w-[100px] mt-8 flex mx-auto"></p>
          </div>
          {/* ------ */}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Experties;
