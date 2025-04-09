import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Advantage() {
  const content = [
    {
      title: "Risk Management",
      description: "Advanced risk assessment and proactive portfolio protection",
      image: "/assets/risk.png",
    },
    {
      title: "Cost Efficiency",
      description: "Transparent pricing with no hidden fees",
      image: "/assets/costefficiency.png",
    },
    {
      title: "Exclusive Access",
      description: "Premium investment opportunities and expert network",
      image: "/assets/exclusive.png",
    },
  ];

  return (
    <div className="max-w-7xl m-auto p-4  lg:pb-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-8"
      >
        <h2 className="capitalize text-5xl font-bold text-[#0A2B58] mb-4">
          The Wealth1 Advantage
        </h2>
        <p className="text-base text-gray-500">
          Comprehensive benefits designed for modern investors
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {content.map((data, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            className="hover:shadow-xl text-center transition-all ease-in-out p-4 py-6 bg-white"
          >
            <Image
              src={data.image || `/icon${index}.png`}
              width={900}
              height={900}
              alt={data.title}
              className="w-12 h-12 mb-4 m-auto filter-gold"
            />
            <h2 className="text-lg font-bold mb-3 text-[#0A2B58]">
              {data.title}
            </h2>
            <p className="text-base text-justify font-semibold text-gray-500">{data.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
