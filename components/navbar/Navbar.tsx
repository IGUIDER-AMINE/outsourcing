"use client";

import Navlinks from "@/components/navbar/Navlinks";
import Navlang from "@/components/navbar/Navlang";
import Navlogo from "@/components/navbar/Navlogo";

import { useState } from "react";
import ResponsiveNavbar from "./ResponsiveNavbar";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handelNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <nav className="sticky top-0 z-20 flex justify-between items-center lg:px-20 md:px-12 px-3 py-6 dark:bg-[#171717] bg-[#F7F7F7] border-b border-gray/10">
        <Navlogo />
        <Navlinks />
        <Navlang handelNav={handelNav} />
      </nav>

      {/* Responsive navbar */}
      <ResponsiveNavbar nav={nav} handelNav={handelNav} />
    </>
  );
};

export default Navbar;
