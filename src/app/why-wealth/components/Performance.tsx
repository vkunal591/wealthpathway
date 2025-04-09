import React from "react";
import { motion } from "framer-motion";
import ChartComponent from "./ChartComponent";

export default function Performance() {
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
          Superior Performance
        </h2>
        <p className="text-base font-semibold text-gray-500 w-full">
          Data-driven strategies that consistently outperform traditional approaches
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="w-full"
      >
        <ChartComponent />
      </motion.div>
    </div>
  );
}
