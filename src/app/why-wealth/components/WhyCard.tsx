"use client"

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const content = [
  {
    name: "Investor-First Approach",
    desc: "Experience personalized support and guidance throughout your investment journey with our dedicated relationship managers.",
    image: "/assets/aproach.png",
  },
  {
    name: "AI-Powered Analytics",
    desc: "Leverage cutting-edge artificial intelligence for real-time market analysis and portfolio optimization.",
    image: "/assets/aiana.png",
  },
  {
    name: "Data-Driven Performance",
    desc: "Make informed decisions backed by sophisticated analytics and comprehensive market insights.",
    image: "/assets/datadriven.png",
  },
];

export default function WhyCard() {
  return (
    <div className="max-w-7xl m-auto p-4  lg:pb-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {content.map((data, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            className="border border-gray-300 group text-center shadow transition-all ease-in-out duration-300 hover:shadow-2xl p-4 py-6"
          >
            <Image
              src={data.image || "/icon1.png"}
              width={900}
              height={900}
              alt={data.name}
              className="w-12 h-12 mb-4 m-auto filter-gold"
            />
            <h2 className="text-lg font-bold mb-3 text-[#0A2B58]">
              {data.name}
            </h2>
            <p className="text-base text-justify text-gray-500">{data.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
