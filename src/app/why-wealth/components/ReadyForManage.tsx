import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function ReadyForManage() {
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16 ">
      <h2 className="capitalize text-4xl text-center  font-semibold text-[#0A2B58]  mb-8">
        Ready to Experience the Future of Wealth Management?
      </h2>
      <p className="text-base text-gray-500 mb-8 font-semibold text-center w-full">
        Join Wealth1 today and discover how our AI-powered investment solutions
        can help you achieve your financial goals.
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
          className="p-3 lg:px-8 w-full m-auto font-semibold text-center hidden lg:flex text-sm bg-[#B28C3D] text-gray-50 rounded-full items-center justify-center transition-all"
        >
          Explore Alternative Investments
          <IoIosArrowRoundForward className="text-2xl font-extrabold hidden lg:inline-block" />
        </Link>
      </motion.div>
    </div>
  );
}
