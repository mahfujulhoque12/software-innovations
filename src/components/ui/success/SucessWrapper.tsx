import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";
import s1 from '/public/success/s1.png';
import s2 from '/public/success/s2.png';
import s3 from '/public/success/s3.png';
import Image from "next/image";


const SucessWrapper = () => {
  return (
    <MaxWidthWrapper>
      <div className="md:py-20 py-5">
        <h2 className="text-xl  md:text-3xl  font-bold  uppercase text-center text-gray-900">
          Success Stories
        </h2>
        <p className="h-[2px] bg-[#FAA61A] w-[100px] mt-3 flex mx-auto"></p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="bg-white p-5 shadow-md">
            <Image src={s1} alt="img" width={500} height={400} className="p-5 border border-gray-200"/>
            <h2 className="mt-4 font-semibold text-gray-700 text-lg md:text-2xl">Travel Agency Admin</h2>
            <p className="text-gray-600 font-medium text-base mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus est, reiciendis </p>
          </div>
          <div className="bg-white p-5 shadow-md">
            <Image src={s2} alt="img" width={500} height={400} className="p-5 border border-gray-200"/>
            <h2 className="mt-4 font-semibold text-gray-700 text-lg md:text-2xl">Architucher Web Application</h2>
            <p className="text-gray-600 font-medium text-base mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus est, reiciendis </p>
          </div>
          <div className="bg-white p-5 shadow-md">
            <Image src={s3} alt="img" width={500} height={400} className="p-5 border border-gray-200"/>
            <h2 className="mt-4 font-semibold text-gray-700 text-lg md:text-2xl">Travel Agency Search panel</h2>
            <p className="text-gray-600 font-medium text-base mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus est, reiciendis </p>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default SucessWrapper;
