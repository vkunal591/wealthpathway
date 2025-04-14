"use client";
import FlowButton from "@/Components/theam/components/FlowButton";
import { motion } from "framer-motion";
import React from "react";

type ReadyToStartProps = {
  title?: string;
  description?: string;
  primaryCTA: {
    label: string;
  };
  secondaryCTA?: {
    label: string;
    visible?: boolean;
  };
  containerClass?: string;
};

export default function ReadyToStart({
  title = "Ready to Start Your Investment Journey?",
  description = "Start your investment journey in INVasset PMS with Wealth1 today! Our team of experts is ready to assist you.",
  primaryCTA,
  secondaryCTA,
  containerClass = "container mx-auto p-4 lg:p-16 lg:pt-0 space-y-4",
}: ReadyToStartProps) {
  return (
    <motion.div
      className={containerClass}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      <h2 className="text-3xl font-bold text-center capitalize text-[#0A2B58]">{title}</h2>
      <p className="mt-4 text-gray-600 text-center leading-relaxed mb-8">
        {description}
      </p>

      <div className="flex justify-center items-center m-auto gap-4">
        <motion.div
          whileHover={{ scale: 1.01, boxShadow: "0px 5px 15px gray" }}
          whileTap={{ scale: 0.95 }}
          className="rounded-full"
        >
          <FlowButton>
            {primaryCTA.label}
          </FlowButton>
        </motion.div>

        {secondaryCTA?.visible && (
          <motion.div
            whileHover={{ scale: 1.01, boxShadow: "0px 5px 15px gray" }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full"
          >
            <FlowButton>
              {secondaryCTA.label}
            </FlowButton>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
