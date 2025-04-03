"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function ReadyToStart() {
  return (
    <div className="container mx-auto px-6 lg:p-16 lg:pt-0 space-y-4 ">
      <h2 className="text-3xl font-bold text-center text-blue-900">
        Ready to Start Your Investment Journey?
      </h2>
      <p className="mt-4 text-gray-600 text-center leading-relaxed mb-8">
        Start your investment journey in Stallion PMS with Wealth1 today! Our
        team of experts is ready to assist you.
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
            Schedule a Consultation
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
            Download Brochure
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
