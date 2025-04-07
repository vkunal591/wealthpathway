"use client";
import FlowButton from "@/Components/theam/components/FlowButton";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function ReadyToStart() {
  return (
    <div className="container mx-auto px-6 lg:p-16 lg:pt-0 space-y-4 ">
      <h2 className="text-3xl font-bold text-center text-[#0A2B58]">
        Ready to Start Your Investment Journey?
      </h2>
      <p className="mt-4 text-gray-600 text-center leading-relaxed mb-8">
        Start your investment journey in INVasset PMS with Wealth1 today! Our
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
          <FlowButton>Schedule a consultation with Wealth1</FlowButton>
        </motion.div>

        <motion.div
          whileHover={{
            scale: 1.01,
            boxShadow: "0px 5px 15px gray",
          }}
          whileTap={{ scale: 0.95 }}
          className="rounded-full hidden"
        >
          <FlowButton>Download Brochure</FlowButton>
        </motion.div>
      </div>
    </div>
  );
}
