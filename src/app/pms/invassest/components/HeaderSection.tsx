"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function HeaderSection() {
  return (
    <div className="max-w-7xl m-auto h-auto flex flex-col items-center">
      <div className="w-full h-full pt-40  pb-10">
        <p className="p-1 mb-4 text-xs font-semibold border border-[#B28C3D]/10 bg-[#B28C3D]/10 rounded-full w-fit m-auto px-4 text-[#0A2B58] ">
          Wealth1 Premium PMS
        </p>
        <h2 className="capitalize text-4xl text-center  font-bold text-[#0A2B58] mb-4">
        INVasset Growth Fund PMS – Quant Derive Portfolio Management Strategy
        </h2>
        <p className="text-base text-gray-500 mb-4 font-semibold text-center w-full lg:w-4/5 m-auto">
          A data-driven Portfolio Management Service combining market wisdom
          with advanced algorithms for consistent alpha generation and risk
          management.
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
              className="p-3 lg:px-8 font-semibold text-center hidden lg:flex text-base bg-[#B28C3D] text-gray-50 rounded-full items-center justify-center transition-all"
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
            className="rounded-full hidden"
          >
            <Link
              href={"/"}
              className="p-3 lg:px-8 font-semibold text-center hidden lg:flex text-base bg-[#B28C3D]/10 text-[#B28C3D] rounded-full items-center justify-center transition-all"
            >
              Download Factsheet
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
