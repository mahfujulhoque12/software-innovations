import React from "react";
import video from "/public/services/video.jpg";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";

const Video = () => {
  return (
    <MaxWidthWrapper>
      <div className="my-5 md:my-10 ">
        <h1 className="text-3xl font-bold uppercase text-center text-gray-700">
          Custom Video Make 
        </h1>
        <p className="h-[2px] bg-[#FAA61A] w-[200px] mt-2 flex mx-auto"></p>
        <p></p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div className="flex flex-col justify-center items-center ms-6">
  <h3 className="text-xl font-semibold capitalize text-gray-600">
    Video Editing Services at Software Innovations
  </h3>

  <div className="ms-5 space-y-4">
  

    {/* Fine Editing & Transitions */}
    <li className="mt-3 text-[#FAA61A] font-bold underline">
      Fine Editing & Transitions
    </li>
    <p className="text-base font-semibold text-gray-600">
      Smooth cuts, creative transitions, and pacing adjustments to keep viewers engaged from start to finish.
    </p>

    {/* Color Correction & Grading */}
    <li className="mt-3 text-[#FAA61A] font-bold underline">
      Color Correction & Grading
    </li>
    <p className="text-base font-semibold text-gray-600">
      Balance exposure and white levels, then apply cinematic color grading to set the perfect mood and style.
    </p>

    

    {/* Sound Design & Mixing */}
    <li className="mt-3 text-[#FAA61A] font-bold underline">
      Sound Design & Mixing
    </li>
    <p className="text-base font-semibold text-gray-600">
      Clean up dialogue, add sound effects, and mix background music for a polished, immersive audio experience.
    </p>

    {/* Export & Delivery */}
    <li className="mt-3 text-[#FAA61A] font-bold underline">
      Export & Delivery
    </li>
    <p className="text-base font-semibold text-gray-600">
      We provide optimized exports for web, social media, or broadcast standards in any format you need.
    </p>
  </div>
</div>

          <div>
            <Image
              src={video}
              alt="img"
              width={1000}
              height={800}
              className="rounded-tr-[150px] rounded-bl-[150px]"
            />
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Video;
