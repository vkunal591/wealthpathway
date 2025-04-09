import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function OurPromise() {
  const data = [
    {
      image: "/assets/selection.png",
      value: "₹10,000 cr+",
      label: "100% Unbiased Selection Process",
    },
    {
      image: "/assets/aiana.png",
      value: "20.48% TWRR",
      label: "Rigorous Fund Analytics & Research",
    },
    {
      image: "/assets/protfoliotracking.png",
      value: "0% Fixed Fee",
      label: "Personalized Portfolio Matching",
    },
    {
      image: "/assets/support.png",
      value: "0% Fixed Fee",
      label: "Proactive Support Through Our Investor Desk",
    },
  ];

  return (
    <div className="max-w-7xl m-auto p-4 lg:py-16 lg:pb-0 text-blue-900">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="capitalize text-5xl text-center font-bold text-[#0A2B58] mb-4"
      >
        Our Promise
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-lg text-[#0A2B58] mb-4 font-semibold text-center w-full lg:w-4/5 m-auto"
      >
        <span className="text-primary">{"  Unbiased"}</span>,
        <span className="text-primary">{"  Uncompromised"}</span>,
        <span className="text-primary">{"  Unmatched"}</span>
      </motion.p>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full flex items-center justify-center mb-8 origin-left"
      >
        <span className="bg-primary h-1 w-20 inline-block m-auto "></span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-lg font-semibold text-gray-500 mb-4 text-center w-full lg:w-4/5 m-auto"
      >
        We are not here to push products. We are here to guide you through a sea
        of options and help you choose the ones truly aligned with your
        financial future.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full lg:w-4/5 m-auto">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            viewport={{ once: true }}
            className="border border-gray-300 group hover:shadow hover:scale-105 transition-all ease-in-out rounded p-4 py-8 w-full h-auto flex flex-col items-center justify-center"
          >
            <div className="w-full mb-4">
              <Image
                src={item?.image || "/logofinal.png"}
                width={900}
                height={900}
                alt=""
                className="object-contain m-auto w-12 h-12 filter-gold object-center"
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
