import React from "react";
import { motion } from "framer-motion";

export default function OurVision() {
  return (
    <div className="max-w-7xl m-auto p-4 lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full bg-[#B28C3D]/10 p-10 rounded-2xl m-auto"
      >
        <h2 className="capitalize text-5xl text-center font-bold text-[#0A2B58] mb-4">
          The Wealth1 Vision
        </h2>
        <p className="text-base font-semibold text-[#0A2B58] mb-8 text-center w-full lg:w-4/5 m-auto">
          To be India&apos;s most trusted platform for alternative investments,
          enabling financial growth that is informed, inclusive, and
          intelligent.
        </p>
      </motion.div>
    </div>
  );
}
