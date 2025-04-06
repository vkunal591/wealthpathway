import FlowButton from "@/Components/theam/components/FlowButton";
import { motion } from "framer-motion";
import React from "react";


export default function ReadyForManage() {
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16 ">
      <h2 className="capitalize text-4xl text-center  font-semibold text-[#0A2B58]  mb-8">
        Ready to Experience the Future of Wealth Management?
      </h2>
      <p className="text-base font-[manrope] text-gray-500 mb-8 font-semibold text-center w-full">
        Join Wealth1 today and discover how our AI-powered investment solutions
        can help you achieve your financial goals.
      </p>

      <motion.div
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 5px 15px gray",
        }}
        whileTap={{ scale: 0.95 }}
        className="rounded-full w-fit m-auto"
      >
        <FlowButton>Get Strarted Now</FlowButton>
      </motion.div>
    </div>
  );
}
