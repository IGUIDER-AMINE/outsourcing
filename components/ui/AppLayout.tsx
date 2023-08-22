"use client";

import Providers from "@/utils/providers";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import SplashScreen from "./SplashScreen";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) return;
  }, [isLoading]);
  return (
    <>
      {isLoading && isHome ? (
        <SplashScreen finishingLoading={() => setIsLoading(false)} />
      ) : (
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      )}
    </>
  );
};

export default AppLayout;
