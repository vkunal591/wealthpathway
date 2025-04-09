"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import FlowButton from "./FlowButton";
import ChangeTextColor from "@/app/components/ChangeTextColor";

export default function WeAre() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="max-w-7xl m-auto p-4 lg:py-16 lg:pb-4">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="grid grid-cols-1 gap-4 items-start"
      >
        <div className="text-center">
          <p className="p-1 mb-2 text-xl font-semibold m-auto border border-[#B28C3D]/10 bg-[#B28C3D]/10 rounded-full w-fit px-4 text-[#0A2B58]">
            Wealth1 Premium PM
          </p>
          <h2 className="text-5xl mb-6 font-bold text-[#0A2B58]">
            Unlocking Alpha Through PMS & AIF
          </h2>

          <ChangeTextColor
            className="text-xl text-center m-auto mb-4"
            text=" Wealth1 leads India's Alternative Investments revolution, guiding discerning investors through their wealth creation journey with PMS and AIF solutions. <br> Our expertise in Portfolio Management Services (PMS) and Alternative Investment Funds (AIF) combines deep market insights with AI-driven strategies. <br> At Wealth1, we remain committed to delivering exceptional Alternative Investment solutions that preserve and grow wealth across generations."
          />

          <FlowButton>Learn More</FlowButton>
        </div>
      </motion.div>
    </div>
  );
}
