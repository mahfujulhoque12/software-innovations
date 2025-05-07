import React from "react";
import TopNavbar from "./atom/TopNavbar";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const Navbar = () => {
  return (
    <div className="bg-[#eff3f8] sticky top-0 left-0 z-50">

    <MaxWidthWrapper className=" ">
      <div className="bg-[#eff3f8]">
        <TopNavbar />

      </div>
    </MaxWidthWrapper>
    </div>
  );
};

export default Navbar;
