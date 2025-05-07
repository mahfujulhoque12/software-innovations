import React from "react";
import MobileFooter from "./atom/MobileFooter";
import DesktopFooter from "./atom/DesktopFooter";

const Footer = () => {
  return (
    <div>
      <div className="block sm:hidden">
        <MobileFooter />
      </div>
      <div className="hidden sm:block">
        <DesktopFooter />
      </div>
    </div>
  );
};

export default Footer;
