import { banner } from "@/utils/assets";
import Image from "next/image";
import React from "react";
import Reveal from "@/components/ui/Reveal";


const Banner = () => {
  return (
    <div className="dark:bg-[#171717] bg-[#F7F7F7] lg:px-20 md:px-12 px-3 py-16">
      <Reveal>
        <h1 className="text-center dark:text-white text-dark font-semibold md:text-6xl text-4xl lg:px-36 md:px-10 tracking-wide md:leading-[65px] leading-[50px]">
          Supporting your business from <br /> the basic aspect
        </h1>
      </Reveal>

      <Reveal>
        <p className="text-center text-gray lg:px-48 md:px-10 mt-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries.
        </p>
      </Reveal>

      <Reveal>
        <div className="flex justify-center gap-3 w-full mt-10">
          <button className="btn btn-yellow">See Services</button>
          <button className="btn btn-outline">Contact Us</button>
        </div>
      </Reveal>

      <Reveal>
        <>
          <div className="relative w-full h-[500px] mt-20">
            <Image
              src={banner}
              fill
              alt="banner"
              className="h-[400px] object-cover"
            />
          </div>

          <div className="bg-brand flex md:flex-row gap-6 flex-col justify-between md:items-center items-start md:-translate-y-14 -translate-y-20 shadow-2xl shadow-gray/20 lg:px-20 md:px-12 px-3 py-10 lg:mx-20 md:mx-6 mx-3 md:mt-0 mt-6">
            <div className="flex items-center gap-4">
              <h2 className="text-yellow md:text-5xl text-3xl">13+</h2>
              <p className="text-yellow/60">
                years <br /> experience
              </p>
            </div>
            <div className="flex items-center gap-4">
              <h2 className="text-yellow md:text-5xl text-3xl">80+</h2>
              <p className="text-yellow/60">
                happy <br /> clients
              </p>
            </div>
            <div className="flex items-center gap-4">
              <h2 className="text-yellow md:text-5xl text-3xl">35K+</h2>
              <p className="text-yellow/60">
                expertise <br /> manpower
              </p>
            </div>
          </div>
        </>
      </Reveal>
    </div>
  );
};

export default Banner;
