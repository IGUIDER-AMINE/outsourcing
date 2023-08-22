"use client";

import Image from "next/image";
import { about1, about2, about3, about4 } from "@/utils/assets";
import { BsPlayFill } from "react-icons/bs";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

const About = () => {
  return (
    <section className="dark:bg-[#171717] bg-[#F7F7F7] lg:px-20 md:px-12 px-3 py-16">
      <Reveal>
        <div className="grid md:grid-cols-2 grid-cols-1  md:gap-0 gap-4 mb-24">
          <h1 className="lg:text-4xl text-3xl dark:text-white text-black font-medium leading-tight">
            Creating value for <br /> your business.
          </h1>
          <div>
            <p className="text-[18px] text-gray">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="bg-video mb-24">
          <button className="absolute bg-dark/70 top-[50%] left-0 right-0 translate-y-[-50%] m-auto w-14 h-14 rounded-full flex justify-center items-center">
            <BsPlayFill color="#ffffff" size={25} />
          </button>
        </div>
      </Reveal>

      <Reveal>
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-4 mb-24">
          <h1 className="lg:text-4xl text-3xl dark:text-white text-black font-medium leading-tight">
            What we will provide <br /> for your business.
          </h1>
          <div>
            <p className="text-[18px] text-gray">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-16 grid md:grid-cols-3 grid-cols-1 gap-6 mb-24">
          <Image
            src={about1}
            alt="about"
            width={900}
            height={100}
            style={{ height: "300px" }}
            className="object-cover"
          />

          <Image
            src={about2}
            alt="about"
            width={900}
            height={100}
            style={{ height: "300px" }}
            className="md:col-span-2 object-cover"
          />

          <div className="md:col-span-2 relative w-full h-full">
            <div className="before:absolute before:bg-dark/60 top-0 before:left-0 before:w-full before:h-full"></div>
            <div className="absolute top-[50%] left-0 right-0 translate-y-[-50%] flex flex-col justify-center items-center">
              <p className="text-white text-xl">Custome Service People</p>
              <Link
                href="/"
                className="text-yellow mt-5 underline underline-offset-8"
              >
                Learn More
              </Link>
            </div>
            <Image
              src={about4}
              alt="about"
              width={900}
              height={100}
              style={{ height: "300px" }}
              className="object-cover"
            />
          </div>

          <Image
            src={about3}
            alt="about"
            width={900}
            height={100}
            style={{ height: "300px" }}
            className="object-cover"
          />
        </div>
      </Reveal>
    </section>
  );
};

export default About;
