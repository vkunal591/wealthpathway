"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function HeaderSection() {
  return (
    <div className="max-w-7xl m-auto h-[90vh] bg-white">
      <div className="w-full h-full pt-40 bg-gradient-to-r from-blue-900/10 via-blue-900/10 to-blue-50/10">
        <p className="p-1 mb-4 text-xs font-semibold border border-blue-900/10 bg-blue-950/10 rounded-full w-fit m-auto px-4 text-blue-900">
          Wealth1 Premium PMS
        </p>
          <h2 className="capitalize text-4xl text-center  font-bold text-blue-900 mb-4">
            Stallion PMS – A Comprehensive Investment Solution
          </h2>
          <p className="text-base text-gray-500 mb-4 font-semibold text-center w-full lg:w-4/5 m-auto">
            A high-growth Portfolio Management Service designed for investors
            seeking long-term wealth creation through a structured investment
            approach.
          </p>
        <div className="flex justify-center items-center m-auto gap-4 ">
          <motion.div
            whileHover={{
              scale: 1.01,
              boxShadow: "0px 5px 15px gray",
            }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full"
          >
            <Link
              href={"/"}
              className="p-3 lg:px-8 font-semibold text-center hidden lg:flex text-base bg-blue-950 text-gray-50 rounded-full items-center justify-center transition-all"
            >
              Start Investing
            </Link>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.01,
              boxShadow: "0px 5px 15px gray",
            }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full"
          >
            <Link
              href={"/"}
              className="p-3 lg:px-8 font-semibold text-center hidden lg:flex text-base bg-blue-950/10 text-blue-900 rounded-full items-center justify-center transition-all"
            >
              Download Factsheet
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
