"use client";

import { accordions } from "@/utils/data";
import React, { useState } from "react";
import Accordion from "./Accordion";
import Reveal from "@/components/ui/Reveal";

const Accordions = () => {
  const [showId, setShowId] = useState<number | boolean | null>(0);

  const handleShow = (id: number) => {
    if (showId === id) {
      return setShowId(null);
    }
    setShowId(id);
  };

  return (
    <section className="grid lg:grid-cols-2 md:grid-cols-1 gap-10 lg:px-20 md:px-12 px-3 pb-16 -mt-20">
      <div className="my-auto">
        <Reveal>
          <h1 className="dark:text-white text-dark text-5xl font-semibold mb-4">
            Have a <span className="text-yellow">Question?</span>
          </h1>
        </Reveal>

        <Reveal>
          <h1 className="dark:text-white text-dark text-5xl font-semibold">
            We Got You.
          </h1>
        </Reveal>

        <Reveal>
          <p className="text-gray mt-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </p>
        </Reveal>
      </div>

      <Reveal>
        <div className="w-full flex flex-col gap-0">
          {accordions.map((item, id) => {
            const { question, answer } = item;
            return (
              <div className="bg-darkcolor p-2 rounded-md" key={id}>
                <Accordion
                  question={question}
                  answer={answer}
                  id={id}
                  show={showId === id}
                  onShow={handleShow}
                ></Accordion>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
};

export default Accordions;
