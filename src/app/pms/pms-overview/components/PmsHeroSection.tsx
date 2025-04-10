"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function PmsOverviewSection() {
  return (
    <div className="max-w-7xl m-auto p-4 lg:px-16 lg:pt-40 lg:pb-20 ">
      <h2 className="capitalize text-4xl text-center  font-semibold text-[#0A2B58]  mb-4">
        Portfolio Management Services in India
      </h2>
      <p className="text-base text-[#0A2B58] mb-8 font-semibold text-center w-full lg:w-4/5 m-auto">
        Tailored investment solutions designed to meet the unique financial
        objectives of individual and institutional investors.
      </p>
      <motion.div
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 5px 15px gray",
        }}
        whileTap={{ scale: 0.95 }}
        className="rounded-full w-1/3 m-auto"
      >
        <Link
          href={"/"}
          className="p-3 lg:px-8 font-semibold text-center hidden lg:flex text-sm bg-[#B28C3D] text-gray-50 rounded-full items-center justify-center transition-all"
        >
          Explore Alternative Investments
          <IoIosArrowRoundForward className="text-2xl font-extrabold hidden lg:inline-block" />
        </Link>
      </motion.div>
    </div>
  );
}
