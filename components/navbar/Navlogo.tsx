import { darkLogo, lightLogo } from "@/utils/assets";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

const Navlogo = () => {
  const { theme } = useTheme();

  return (
    <Image
      src={theme === "dark" ? lightLogo : darkLogo}
      alt="logo"
      width={110}
      height={100}
    />
  );
};

export default Navlogo;
