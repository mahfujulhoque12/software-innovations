import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";
import vission from '/public/vission/darts.png'
import Image from "next/image";

const VissionMission = () => {
  return (
    <div className="relative">

    <MaxWidthWrapper>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-16">
        <div className="py-10 px-3 md:px-0">
          {" "}
          <h3 className="text-3xl  font-bold  uppercase"> Vission</h3>
          <p className="h-[2px] bg-[#FAA61A] w-[100px] mt-2"></p>
          <p className="text-base font-medium text-gray-700 mt-10">
            To be a leading technology company, driving innovations and
            empowering organizations worldwide while promoting sustainability.
          </p>
        </div>
        <div className="py-10 px-3 md:px-0">
          {" "}
          <h3 className="text-3xl  font-bold  uppercase "> Mission</h3>
          <p className="h-[2px] bg-[#FAA61A] w-[100px] mt-2"></p>
          <p className="text-base font-medium text-gray-700 mt-10">
          To deliver state-of-the-art software development and engineering solutions to empower our clients with essential information management systems, meeting their specific requirements in the realms of business and the environment.
            </p>
        </div>
      </div>
    </MaxWidthWrapper>
    <div className="absolute right-0 top-20">
        <Image src={vission} alt="cs" width={300} height={300}/>
    </div>
    </div>

  );
};

export default VissionMission;
