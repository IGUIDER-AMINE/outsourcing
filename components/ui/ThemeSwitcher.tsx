"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { darkIcon, lightIcon } from "@/utils/assets";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = (theme: any) => {
    setTheme(theme);
  };

  return (
    <button
      className={`md:w-16 w-12 md:h-8 h-6  rounded-full bg-white flex items-center transition duration-300 focus:outline-none shadow-xl shadow-gray/10`}
      onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
    >
      <div
        className={`md:w-9 md:h-9 w-8 h-8 relative rounded-full transition duration-500 transform border-2 border-white ${
          theme === "dark"
            ? "bg-dark translate-x-full"
            : "bg-yellow -translate-x-2"
        } p-1 text-white`}
      >
        {theme === "dark" ? lightIcon : darkIcon}
      </div>
    </button>
  );
};

export default ThemeSwitch;
