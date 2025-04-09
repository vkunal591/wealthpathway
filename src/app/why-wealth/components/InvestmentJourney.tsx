import Image from "next/image";
import React from "react";
import { GiBottomRight3dArrow } from "react-icons/gi";
import { motion } from "framer-motion";

export default function InvestmentJourney() {
  const content = [
    {
      title: "Selection",
      description: "Choose from curated investment options",
      image: "/assets/selection.png",
    },
    {
      title: "Consultation",
      description: "Get expert guidance from our team",
      image: "/assets/consultation.png",
    },
    {
      title: "Portfolio Tracking",
      description: "Monitor your investments in real-time",
      image: "/assets/protfoliotracking.png",
    },
    {
      title: "Ongoing Support",
      description: "Receive continuous assistance and updates",
      image: "/assets/support.png",
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
          Your Investment Journey <br /> With Us
        </h2>
        <p className="text-lg font-semibold text-gray-500">
          A streamlined process focused on your success
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {content.map((data, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            className="hover:shadow-xl text-center transition-all ease-in-out p-4 py-6 relative bg-white"
          >
            <Image
              src={data.image || `/icon${index}.png`}
              width={900}
              height={900}
              alt={data.title}
              className="w-10 h-10 m-auto mb-4 filter-gold"
            />
            <GiBottomRight3dArrow
              className={`absolute right-0 rotate-[-45deg] ${
                index === 3 ? "hidden" : ""
              }`}
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
