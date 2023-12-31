import { useState, useEffect, FC } from "react";
import anime from "animejs";
import Image from "next/image";
import { lightLogo } from "@/utils/assets";

interface SplashScreenProps {
  finishingLoading: any;
}

const SplashScreen: FC<SplashScreenProps> = ({ finishingLoading }) => {
  const [isMounted, setIsMounted] = useState(false);

  const animate = () => {
    const loader = anime.timeline({
      complete: finishingLoading(),
    });

    loader
      .add({
        targets: "#logo",
        delay: 0,
        scale: 1,
        duration: 500,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#logo",
        delay: 0,
        scale: 1.25,
        duration: 500,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#logo",
        delay: 0,
        scale: 1,
        duration: 500,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#logo",
        delay: 0,
        scale: 1.25,
        duration: 500,
        easing: "easeInOutExpo",
      });
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div
      // isMounted={isMounted}
      className="flex h-screen items-center justify-center bg-brand"
    >
      {/* SplashScreen */}
      <Image id="logo" src={lightLogo} alt="logo" width={300} height={100} />
    </div>
  );
};

export default SplashScreen;
