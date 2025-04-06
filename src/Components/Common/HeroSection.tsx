"use client";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function HeroSection({
  subtitle,
  title,
  description,
  link,
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
      className="p-4 lg:p-16 lg:pt-40 max-w-7xl m-auto flex flex-col lg:flex-row justify-end items-start "
    >
      <motion.div style={{ opacity }} ref={textRef} className="w-full lg:w-1/2">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative p-1 mb-4 text-xs font-semibold border border-[#B28C3D]/10 bg-[#B28C3D]/10 rounded-full w-fit px-4 text-[#0A2B58] "
        >
          {subtitle || "Wealth1 - Your AIF & PMS Partner"}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0.5 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-2xl lg:text-4xl w-full lg:w-4/5 font-bold text-[#0A2B58] mb-6"
        >
          {title || "India's Premier Alternative Investments Platform"}
        </motion.h1>
        <p className="text-base w-full lg:w-4/5 font-semibold text-gray-600 mb-10">
          {description ||
            "Discover curated PMS and AIF opportunities with Wealth1 expert guidance in Portfolio Management Services and Alternative Investment Funds."}
        </p>
        <motion.div
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 5px 15px gray",
          }}
          whileTap={{ scale: 0.95 }}
          className="rounded-full w-2/3"
        >
          <Link
            href={link || "/"}
            className="p-3 lg:px-8 font-semibold text-center hidden lg:flex text-sm bg-[#B28C3D] text-gray-50 rounded-full items-center justify-center transition-all"
          >
            Explore Alternative Investments
            <IoIosArrowRoundForward className="text-2xl font-extrabold hidden lg:inline-block" />
          </Link>
        </motion.div>
      </motion.div>
      <div className="w-full lg:w-1/2">
        <Image
          src={image || "/property.png"}
          width={900}
          height={900}
          alt="Investment"
          className="object-contain w-2/3 m-auto"
        />
      </div>
    </div>
  );
}
