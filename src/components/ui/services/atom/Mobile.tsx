import React from "react";
import mobile from "/public/services/mobile.jpg";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";

const Mobile = () => {
  return (
    <MaxWidthWrapper>
      <div className="my-5 md:my-10 ">
        <h1 className="text-3xl font-bold uppercase text-center text-gray-700">
          Mobile Application Development
        </h1>
        <p className="h-[2px] bg-[#FAA61A] w-[200px] mt-2 flex mx-auto"></p>
        <p></p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
       
        <div className="flex flex-col justify-center items-center ms-6">
  <h3 className="text-xl font-semibold capitalize text-gray-600">
    Mobile Application Development at Software Innovations
  </h3>

  <div className="ms-5 space-y-4">
    {/* Native Development */}
    <li className="mt-3 text-[#FAA61A] font-bold underline">
      iOS & Android Native
    </li>
    <p className="text-base font-semibold text-gray-600">
      We build high-performance apps in Swift (iOS) and Kotlin (Android) that leverage each platform’s unique capabilities.
    </p>

    {/* Cross-Platform */}
    <li className="mt-3 text-[#FAA61A] font-bold underline">
      Cross-Platform
    </li>
    <p className="text-base font-semibold text-gray-600">
      Reach both iOS and Android users fast with React Native or Flutter, sharing up to 90% of your codebase.
    </p>

    {/* Deployment & Maintenance */}
    <li className="mt-3 text-[#FAA61A] font-bold underline">
      App Store Deployment & Maintenance
    </li>
    <p className="text-base font-semibold text-gray-600">
      We handle app store submissions, certificates, and ongoing updates so your app stays compliant and up-to-date.
    </p>

    {/* Performance & Optimization */}
    <li className="mt-3 text-[#FAA61A] font-bold underline">
      Performance & Optimization
    </li>
    <p className="text-base font-semibold text-gray-600">
      From code-splitting to lazy loading, we fine-tune your app for instant load times and smooth animations.
    </p>

   

 
  </div>
</div>

          <div>
            <Image
              src={mobile}
              alt="img"
              width={800}
              height={500}
              className="rounded-tr-[150px] rounded-bl-[150px]"
            />
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Mobile;
