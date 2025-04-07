"use client";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import FlowButton from "../theam/components/FlowButton";

export default function HeroSection({
  subtitle,
  title,
  description,
  image,
}: {
  subtitle?: string;
  title?: string;
  description?: string;
  link?: string;
  image?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const isInView = useInView(textRef, { once: false, margin: "-50px" });

  return (
    <div
      ref={ref}
      className="p-4 lg:p-16 lg:pt-40 lg:pb-4 max-w-7xl m-auto flex flex-col lg:flex-row justify-end items-start "
    >
      <motion.div style={{ opacity }} ref={textRef} className="w-full text-center m-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative p-1 mb-4 text-xs m-auto font-semibold border border-[#B28C3D]/10 bg-[#B28C3D]/10 rounded-full w-fit px-4 text-[#0A2B58] "
        >
          {subtitle || "Wealth1 - Your AIF & PMS Partner"}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0.5 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-2xl lg:text-4xl w-full lg:w-4/5 m-auto font-bold text-[#0A2B58] mb-6"
        >
          {title || "India's Premier Alternative Investments Platform"}
        </motion.h1>
        <p className="text-base w-full lg:w-4/5 font-semibold m-auto text-gray-600 mb-10">
          {description ||
            "Discover curated PMS and AIF opportunities with Wealth1 expert guidance in Portfolio Management Services and Alternative Investment Funds."}
        </p>
        <motion.div
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 5px 15px gray",
          }}
          whileTap={{ scale: 0.95 }}
          className="rounded-full m-auto w-fit"
        >
          <FlowButton>Explore Alternative Investments</FlowButton>
        </motion.div>
      </motion.div>
      <div className="w-full lg:w-1/2 hidden">
        <Image
          src={image || "/property.png"}
          width={1680}
          height={900}
          alt="Investment"
          className="object-contain w-3/5 m-auto"
        />
      </div>
    </div>
  );
}
