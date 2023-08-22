"use client";

import { testimonail } from "@/utils/assets";
import Image from "next/image";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useRef } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Reveal from "@/components/ui/Reveal";

const Testimonials = () => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  return (
    <div className="">
      <div className="bg-brand lg:px-20 md:px-12 px-3 pt-16 pb-80">
        <div className="mb-8">
          <Reveal>
            <h1 className="md:text-4xl text-3xl lg:text-start text-center text-white font-medium leading-tight">
              Loved by the business
            </h1>
          </Reveal>
          <Reveal>
            <h1 className="md:text-4xl text-3xl lg:text-start text-center text-white font-medium leading-tight">
              leader everywhere
            </h1>
          </Reveal>
        </div>

        <Reveal>
          <Swiper
            spaceBetween={8}
            slidesPerView={1}
            loop
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{ clickable: true }}
            onBeforeInit={(swiper) => {
              // @ts-ignore
              // eslint-disable-next-line no-param-reassign
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
              // eslint-disable-next-line no-param-reassign
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.update();
            }}
            className="w-full"
            style={{ padding: "30px 0px" }}
          >
            {/* {categories?.map((category) => ( */}
            <SwiperSlide>
              <div className="flex lg:flex-row flex-col items-center justify-between gap-16">
                <Image
                  src={testimonail}
                  width={400}
                  height={200}
                  alt="testimoniale"
                />
                <div>
                  <div className="w-12 h-12 rounded-full bg-yellow/20 flex justify-center items-center">
                    <BiSolidQuoteAltLeft color="#F0DDAB" size={22} />
                  </div>

                  <p className="text-white/70 text-[16px] font-light mt-6">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets.
                  </p>

                  <div className="mt-10">
                    <p className="text-yellow font-medium">Adrian Lopez</p>
                    <p className="text-white/70 text-sm">
                      Founder of Company X
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex lg:flex-row flex-col items-center justify-between gap-16">
                <Image
                  src={testimonail}
                  width={400}
                  height={200}
                  alt="testimoniale"
                />
                <div>
                  <div className="w-12 h-12 rounded-full bg-yellow/20 flex justify-center items-center">
                    <BiSolidQuoteAltLeft color="#F0DDAB" size={22} />
                  </div>

                  <p className="text-white/70 text-[16px] font-light mt-6">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets.
                  </p>

                  <div className="mt-10">
                    <p className="text-yellow font-medium">Adrian Lopez</p>
                    <p className="text-white/70 text-sm">
                      Founder of Company X
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* ))} */}
          </Swiper>
        </Reveal>

        <Reveal>
          <div className="flex gap-3 items-center mt-4">
            <div ref={prevRef} className="cursor-pointer">
              <BsArrowLeft className="text-yellow/30 text-xl" />
            </div>
            <div ref={nextRef} className="cursor-pointer">
              <BsArrowRight className="text-yellow text-xl" />
            </div>
          </div>
        </Reveal>
      </div>

      <div className="lg:mx-20 md:mx-12 mx-3 py-16 bg-yellow -translate-y-56 shadow-2xl shadow-gray/20">
        <div className="lg:px-20 md:px-12 px-3 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <Reveal>
            <h1 className="md:text-4xl text-2xl text-black font-medium leading-tight">
              Our expertise manpower will fulfil your business needs
            </h1>
          </Reveal>
          <div>
            <Reveal>
              <p className="text-[18px] text-gray">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s.
              </p>
            </Reveal>
            <Reveal>
              <button className="btn btn-green mt-4">Contact Us</button>
            </Reveal>
          </div>
        </div>

        <div className="lg:px-20 md:px-12 px-3 grid grid-cols-1 lg:grid-cols-3 gap-3 mt-14">
          <Reveal>
            <div className="flex items-start gap-4 p-5 bg-white">
              <p className="text-dark font-semibold text-lg relative before:absolute before:bg-yellow before:bottom-0 before:right-0 before:h-[3px] before:w-4">
                01
              </p>
              <div className="">
                <p className="text-dark font-medium text-lg md:mr-28 mr-6">
                  Tell us about your manpower needs
                </p>{" "}
                <p className="text-[16px] text-gray mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="flex items-start gap-4 p-5 bg-white">
              <p className="text-dark font-semibold text-lg relative before:absolute before:bg-yellow before:bottom-0 before:right-0 before:h-[3px] before:w-4">
                02
              </p>
              <div className="">
                <p className="text-dark font-medium text-lg md:mr-28 mr-6">
                  Tell us about your manpower needs
                </p>{" "}
                <p className="text-[16px] text-gray mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="flex items-start gap-4 p-5 bg-white">
              <p className="text-dark font-semibold text-lg relative before:absolute before:bg-yellow before:bottom-0 before:right-0 before:h-[3px] before:w-4">
                03
              </p>
              <div className="">
                <p className="text-dark font-medium text-lg md:mr-28 mr-6">
                  Tell us about your manpower needs
                </p>{" "}
                <p className="text-[16px] text-gray mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
