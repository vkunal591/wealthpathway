import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function OurStandard() {
  const data = [
    {
      image: "/assets/transparent.png",
      value: "₹10,000 cr+",
      label: "India's Most Transparent PMS & AIF Marketplace",
    },
    {
      image: "/assets/aipower.png",
      value: "20.48% TWRR",
      label: "AI-Powered Investment Comparisons",
    },
    {
      image: "/assets/support.png",
      value: "0% Fixed Fee",
      label: "Human Advisory + Digital Simplicity",
    },
    {
      image: "/assets/dedicated.png",
      value: "0% Fixed Fee",
      label: "Seamless Onboarding & Dedicated Relationship Managers",
    },
  ];

  return (
    <div className="max-w-7xl m-auto p-4 lg:py-16 lg:pb-0 text-blue-900">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="capitalize text-4xl text-center font-semibold text-dark-primary mb-4"
      >
        Why Wealth1 Stands Apart
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full flex items-center justify-center"
      >
        <span className="bg-primary h-1 w-20 inline-block m-auto origin-left"></span>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 w-full lg:w-4/5 m-auto">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="hover:shadow-xl hover:scale-105 transition-all ease-in-out duration-300 rounded p-4 py-8 w-full h-auto flex flex-col items-center justify-center"
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
              <p className="text-base font-semibold text-[#0A2B58] mb-4">
                {item?.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-base font-semibold text-[#0A2B58] mb-8 text-center w-full lg:w-3/5 m-auto"
      >
        We are Wealth1&apos;s first AI-led PMS & AIF distribution platform built
        around investor convenience, confidence, and clarity.
      </motion.p>
    </div>
  );
}
