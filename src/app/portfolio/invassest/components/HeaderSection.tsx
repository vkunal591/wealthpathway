"use client";

import FlowButton from "@/Components/theam/components/FlowButton";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";

interface HeaderSectionProps {
  tagline?: string;
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  showFactsheet?: boolean;
  factsheetLink?: string;
  className?: string;
  containerClassName?: string;
  textClassName?: string;
}

export default function HeaderSection({
  tagline = "Wealth1 Premium PMS",
  title,
  subtitle = "A data-driven Portfolio Management Service combining market wisdom with advanced algorithms for consistent alpha generation and risk management.",
  buttonText = "Start Investing",
  buttonLink = "#",
  showFactsheet = false,
  factsheetLink = "/",
  className = "",
  containerClassName = "",
  textClassName = "",
}: HeaderSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <div className={`max-w-7xl m-auto h-auto flex flex-col items-center ${containerClassName}`}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`w-full h-full p-4 pt-40 pb-10 ${className}`}
      >
        {tagline && (
          <p className="p-1 mb-4 text-xs font-semibold border border-[#B28C3D]/10 bg-[#B28C3D]/10 rounded-full w-fit m-auto px-4 text-[#0A2B58]">
            {tagline}
          </p>
        )}

        <h2 className={`capitalize text-xl lg:text-4xl text-center font-bold text-[#0A2B58] mb-4 ${textClassName}`}>
          {title}
        </h2>

        {subtitle && (
          <p className="text-base text-gray-500 mb-4 font-semibold text-center w-full lg:w-4/5 m-auto">
            {subtitle}
          </p>
        )}

        <div className="flex justify-center items-center m-auto gap-4">
          <motion.div
            whileHover={{ scale: 1.01, boxShadow: "0px 5px 15px gray" }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full"
          >
            <Link href={buttonLink}>
              <FlowButton>{buttonText}</FlowButton>
            </Link>
          </motion.div>

          {showFactsheet && (
            <motion.div
              whileHover={{ scale: 1.01, boxShadow: "0px 5px 15px gray" }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full hidden lg:flex"
            >
              <Link
                href={factsheetLink}
                className="p-3 lg:px-8 font-semibold text-base bg-[#B28C3D]/10 text-[#B28C3D] rounded-full items-center justify-center transition-all"
              >
                Download Factsheet
              </Link>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
