import React from "react";
import web from "/public/services/web.jpg";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";

const Web = () => {
  return (
    <MaxWidthWrapper>
      <div className="my-5 md:my-10 ">
        <h1 className="text-xl md:text-3xl font-bold uppercase text-center text-gray-700">
          Web Application Development
        </h1>
        <p className="h-[2px] bg-[#FAA61A] w-[200px] mt-2 flex mx-auto"></p>
        <p></p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div>
            <Image
              src={web}
              alt="img"
              width={800}
              height={500}
              className="rounded-tr-[150px] rounded-bl-[150px] px-3 md:px-0"
            />
          </div>
          <div className="flex flex-col justify-center items-center ms-6">
  <h3 className="text-xl font-semibold capitalize text-gray-600">
    For Web Application at Software Innovations we use all of Modern Technology
  </h3>

  <div className="ms-5 space-y-4">
    {/* Front End */}
    <li className="mt-3 text-[#FAA61A] font-bold underline">
      Front End
    </li>
    <p className="text-base font-semibold text-gray-600">
      HTML, CSS, Bootstrap, JavaScript, Tailwind, TypeScript, React & Next.js (Redux, RTK Query, React Hook Form, Zod)
    </p>

    {/* Back End */}
    <li className="mt-3 text-[#FAA61A] font-bold underline">
      Back End
    </li>
    <p className="text-base font-semibold text-gray-600">
      PHP, Node.js & Go
    </p>

    {/* Database */}
    <li className="mt-3 text-[#FAA61A] font-bold underline">
      Database
    </li>
    <p className="text-base font-semibold text-gray-600">
      MySQL, PostgreSQL & MongoDB
    </p>

    {/* API & Integrations */}
    <li className="mt-3 text-[#FAA61A] font-bold underline">
      API & Integrations
    </li>
    <p className="text-base font-semibold text-gray-600">
      RESTful & GraphQL APIs, third-party services (Payment Gateways, Social Logins, Analytics)
    </p>

    {/* Testing & QA */}
    <li className="mt-3 text-[#FAA61A] font-bold underline">
      Testing & QA
    </li>
    <p className="text-base font-semibold text-gray-600">
      Unit, integration & end-to-end testing with Jest, Cypress & Playwright
    </p>

  </div>
</div>

        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Web;
