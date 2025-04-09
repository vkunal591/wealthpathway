import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function OurMission() {
  const data = [
    {
      image: "/data.png",
      value: "₹10,000 cr+",
      label:
        "Deliver data-backed recommendations based on risk, goals, and time horizon.",
    },
    {
      image: "/key.png",
      value: "20.48% TWRR",
      label:
        "Provide direct access to India's top PMS & AIF providers with full transparency.",
    },
    {
      image: "/right.png",
      value: "0% Fixed Fee",
      label:
        "Empower every investor with the right information at the right time through AI-driven tools.",
    },
  ];

  return (
    <div className="max-w-7xl m-auto p-4 lg:py-16 lg:pb-0 text-[#0A2B58]">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="capitalize text-5xl text-center font-bold text-[#0A2B58] mb-4"
      >
        Our Mission
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-base text-[#0A2B58] mb-4 font-semibold text-center w-full lg:w-4/5 m-auto"
      >
        Elevating Investor Confidence Through
        <span className="text-primary">{"  Knowledge"}</span>, &amp;
        <span className="text-primary">{"  Access"}</span>
      </motion.p>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full flex items-center justify-center mb-8 origin-left"
      >
        <span className="bg-primary h-1 w-20 inline-block m-auto"></span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-lg font-semibold text-gray-500 text-center w-full lg:w-4/5 m-auto mb-8"
      >
        Our mission is to bridge the gap between great investment products and
        the investors who deserve them. We aim to
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            viewport={{ once: true }}
            className="border border-gray-300 hover:shadow hover:scale-105 transition-all ease-in-out rounded group p-4 w-full h-56 flex flex-col items-center justify-center"
          >
            <div className="w-full mb-4">
              <Image
                src={item?.image || "/logofinal.png"}
                width={900}
                height={900}
                alt=""
                className="object-contain m-auto w-14 h-14 filter-gold object-center"
              />
            </div>
            <div className="text-center">
              <p className="text-base text-justify font-semibold text-[#0A2B58] mb-4">
                {item?.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
