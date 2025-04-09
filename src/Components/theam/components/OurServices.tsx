import React from "react";
import { motion } from "framer-motion";
import DetailsCard2 from "./DetailsCard2";

export default function OurServices() {
  return (
    <div className="max-w-7xl m-auto p-4 lg:py-16 lg:pb-4">
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="p-1 mb-2 text-xl font-semibold m-auto border border-[#B28C3D]/10 bg-[#B28C3D]/10 rounded-full w-fit px-4 text-[#0A2B58]">
            Wealth1 Premium PMS
          </p>
          <h2 className="capitalize text-4xl text-center w-full m-auto font-bold text-[#0A2B58] mb-4">
            Comprehensive Investment Solutions
          </h2>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <DetailsCard2 />
      </motion.div>
    </div>
  );
}
