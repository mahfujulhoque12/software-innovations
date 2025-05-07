import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";
import { FaPeopleGroup } from "react-icons/fa6";

import { GrCloudComputer } from "react-icons/gr";
import { MdOutlineSettingsSuggest } from "react-icons/md";

const HomeServicesWrapper = () => {
  return (
    <div className="w-full h-full bg-gradient-to-r from-black/10 to-[#FAA61A]/15 py-5 md:py-20">
      <MaxWidthWrapper>
        <h2 className="text-3xl  font-bold  uppercase text-center">Services</h2>
        <p className="h-[2px] bg-[#FAA61A] w-[100px] mt-3 flex mx-auto"></p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <div>
            <div className="flex justify-center items-center">
              <button className="bg-white p-5 rounded-full ">
                <GrCloudComputer size={70} className="text-orange-400" />
              </button>
            </div>

            <h2 className="text-gray-900 font-bold text-lg mt-5  md:text-2xl text-center">
              Build From Scratch
            </h2>
            <p className="text-gray-700 font-medium text-base text-center mt-1">
              {" "}
              We offer full-cycle software development services, from concept to
              implementation
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center">
              <button className="bg-white p-5 rounded-full ">
                <MdOutlineSettingsSuggest  size={70} className="text-orange-400" />
              </button>
            </div>

            <h2 className="text-gray-900 font-bold text-lg mt-5  md:text-2xl text-center">
            Update Existing Systems
            </h2>
            <p className="text-gray-700 font-medium text-base text-center mt-1">
              {" "}
              We specialize in upgrading existing and legacy software
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center">
              <button className="bg-white p-5 rounded-full ">
                <FaPeopleGroup  size={70} className="text-orange-400" />
              </button>
            </div>

            <h2 className="text-gray-900 font-bold text-lg mt-5  md:text-2xl text-center">
            Augment Your Team
            </h2>
            <p className="text-gray-700 font-medium text-base text-center mt-1">
              {" "}
              We can augment your team’s capacity by providing the right mix of skills
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default HomeServicesWrapper;
