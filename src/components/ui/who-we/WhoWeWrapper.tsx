import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";
import we1 from "/public/weare/we1.jpg";
import we2 from "/public/weare/we2.jpg";
import Image from "next/image";
import { FaAppStore, FaCheckCircle, FaLaptopCode } from "react-icons/fa";
import { PiHeadCircuitFill } from "react-icons/pi";
import { BsMicrosoftTeams } from "react-icons/bs";
import { MdOutlineAccountTree } from "react-icons/md";
const WhoWeWrapper = () => {
  return (
    <MaxWidthWrapper>
      <div className="my-5 md:my-10">
        <h2 className="font-bold text-xl text-center md:text-4xl text-gray-700 uppercase">
          Who We Are
        </h2>
        <p className="h-[2px] bg-[#FAA61A] w-[100px] mt-2 flex mx-auto"></p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* who we are left  */}
          <div>
            <p className="text-base px-3 md:px-0 font-medium text-gray-600">
              Software Innovations provides custom software development and
              environmental consultancy services to government and commercial
              clients. Our full-stack software developers, specializing in
              Geographic Information System (GIS) applications, data analytics,
              database design and cloud integration, are committed to empowering
              clients to build a better environment for tomorrow. Streams Tech’s
              clients range from Fortune 500 companies and large non-government
              organizations to small firms on five continents.
            </p>
            {/* who we are left inside */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-12 mb-32">
              {/* card one */}
              <div className="relative px-3 md:px-0">
                <Image
                  src={we1}
                  alt="we"
                  width={300}
                  height={300}
                  className="w-full  h-full md:h-[200px] z-0"
                />

                <div className="bg-white p-5 absolute rounded-md w-[90%]  left-5 -bottom-20  ">
                  <FaCheckCircle
                    size={40}
                    className="border-3 absolute -top-3 left-[45%] rounded-full border-white text-[#FAA61A]"
                  />
                  <h3 className="text-4xl md:text-6xl font-bold text-gray-800 text-center mt-5">
                    05+
                  </h3>
                  <p className="text-lg md:text-2xl font-bold text-gray-500 text-center mt-2">
                    Projects Complete
                  </p>
                </div>
              </div>
              {/* card one end */}

              {/* card tow  */}

              <div className="relative mt-30 md:mt-0 px-3 md:px-0">
                <Image
                  src={we2}
                  alt="we"
                  width={300}
                  height={300}
                  className="w-full  h-full md:h-[200px] z-0"
                />

                <div className="bg-white p-5 absolute rounded-md w-[90%]  left-5 -bottom-20  ">
                  <PiHeadCircuitFill
                    size={40}
                    className="border-3 absolute -top-3 left-[45%] rounded-full border-white text-[#FAA61A]"
                  />
                  <h3 className="text-4xl md:text-6xl font-bold text-gray-800 text-center mt-5">
                    15+
                  </h3>
                  <p className="text-lg md:text-2xl font-bold text-gray-500 text-center mt-2">
                    Experienced Engineers
                  </p>
                </div>
              </div>
              {/* card tow end */}
            </div>
            {/* who we are left inside */}
          </div>
          {/* who we are left  end */}

          {/* who we are right  start */}

          <div className="flex flex-col justify-center items-start">
            <div className="grid grid-cols-2 ">
              <div className="flex flex-col justify-center items-center  p-5 md:p-16 border-r border-b border-gray-300">
                <FaLaptopCode size={70} className="text-[#FAA61A]" />
                <p className="mt-5 text-lg font-semibold text-gray-700">
                  High-Quality Code
                </p>
              </div>

              <div className= "p-5 md:p-16  flex flex-col justify-center items-center border-b border-gray-300">
                <FaAppStore size={70} className="text-[#FAA61A]" />
                <p className="mt-5 text-lg font-semibold text-gray-700">
                  Agile Approach
                </p>
              </div>
              <div className= "p-5 md:p-16 flex flex-col justify-center items-center  border-r border-gray-300">
                <BsMicrosoftTeams  size={70} className="text-[#FAA61A]" />
                <p className="mt-5 text-lg font-semibold text-gray-700">
                  Full-Stack Teams
                </p>
              </div>
              <div className= "p-5 md:p-16 flex flex-col justify-center items-center ">
                <MdOutlineAccountTree  size={70} className="text-[#FAA61A]" />
                <p className="mt-5 text-lg font-semibold text-gray-700">
                  Flexibility
                </p>
              </div>
            </div>
          </div>
          {/* who we are right  end */}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default WhoWeWrapper;
