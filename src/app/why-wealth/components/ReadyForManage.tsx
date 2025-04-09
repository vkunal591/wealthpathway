import FlowButton from "@/Components/theam/components/FlowButton";
import { motion } from "framer-motion";
import React from "react";

export default function ReadyForManage() {
  return (
    <div className="max-w-7xl m-auto p-4 ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-8"
      >
        <h2 className="capitalize text-5xl font-bold text-[#0A2B58] mb-4">
          Ready to Experience the Future of Wealth Management?
        </h2>
        <p className="text-base font-semibold  text-gray-500 w-full">
          Join Wealth1 today and discover how our AI-powered investment
          solutions can help you achieve your financial goals.
        </p>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.1, boxShadow: "0px 5px 15px gray" }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="rounded-full w-fit m-auto"
      >
        <FlowButton>Get Started Now</FlowButton>
      </motion.div>
    </div>
  );
}
