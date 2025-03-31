"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function HeroSection({
  subtitle,
  title,
  description,
  link,
  image,
}: any) {
  return (
    <div className="p-4 lg:p-16 lg:pt-40 max-w-7xl m-auto flex flex-col lg:flex-row justify-end items-start h-screen">
      <div className="w-full lg:w-1/2">
        <p className="text-sm text-gray-500 mb-2 font-semibold relative">
          {subtitle || "Wealth1 - Your AIF & PMS Partner"}
        </p>
        <h1 className="text-2xl lg:text-4xl w-full lg:w-4/5 font-bold text-gray-800 mb-6">
          {title || "India&apos;s Premier Alternative Investments Platform"}
        </h1>
        <p className="text-base w-full lg:w-4/5 font-semibold text-gray-600 mb-10">
          {description ||
            "Discover curated PMS and AIF opportunities with Wealth1&apos;s expert guidance in Portfolio Management Services and Alternative Investment Funds."}
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
            className="p-3 lg:px-8 font-semibold text-center hidden lg:flex text-sm bg-gray-800 text-gray-50 rounded-full items-center justify-center transition-all"
          >
            Explore Alternative Investments
            <IoIosArrowRoundForward className="text-2xl font-extrabold hidden lg:inline-block" />
          </Link>
        </motion.div>
      </div>
      <div className="w-full lg:w-1/2">
        <Image
          src={image || "/property.png"}
          width={900}
          height={900}
          alt="Inversment"
          className="object-contain w-2/3 m-auto"
        />
      </div>
    </div>
  );
}
