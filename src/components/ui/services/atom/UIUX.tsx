import React from "react";
import ui from "/public/services/ui.jpg";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";

const UIUX = () => {
  return (
    <MaxWidthWrapper>
      <div className="my-5 md:my-10 ">
        <h1 className="text-3xl font-bold uppercase text-center text-gray-700">
          Custom UIUX  Design
        </h1>
        <p className="h-[2px] bg-[#FAA61A] w-[200px] mt-2 flex mx-auto"></p>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">

        <div>
            <Image
              src={ui}
              alt="img"
              width={600}
              height={300}
              className="rounded-tr-[150px] rounded-bl-[150px]"
            />
          </div> 

       
          <div className="flex flex-col justify-center items-center ms-6">
  <h3 className="text-xl font-semibold capitalize text-gray-600">
    Custom UI/UX Design at Software Innovations
  </h3>

  <div className="ms-5 space-y-4">
    {/* User Research */}
    <li className="mt-3 text-[#FAA61A] font-bold underline">
      User Research & Discovery
    </li>
    <p className="text-base font-semibold text-gray-600">
      We dive deep into your users’ needs through interviews, surveys, and analytics to inform every design decision.
    </p>

    {/* Wireframing & Prototyping */}
    <li className="mt-3 text-[#FAA61A] font-bold underline">
      Wireframing & Interactive Prototypes
    </li>
    <p className="text-base font-semibold text-gray-600">
      Low- and high-fidelity wireframes turn ideas into clickable prototypes, so you can validate flows before development.
    </p>

    {/* Visual & Interaction Design */}
    <li className="mt-3 text-[#FAA61A] font-bold underline">
      Visual & Interaction Design
    </li>
    <p className="text-base font-semibold text-gray-600">
      Pixel-perfect UI mockups, design systems, and micro-interactions ensure your product is both beautiful and intuitive.
    </p>

    {/* Usability Testing */}
    <li className="mt-3 text-[#FAA61A] font-bold underline">
      Usability Testing & Iteration
    </li>
    <p className="text-base font-semibold text-gray-600">
      We conduct moderated and unmoderated tests to uncover friction points, then refine your UX for maximum engagement.
    </p>
  </div>
</div>

        
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default UIUX;
