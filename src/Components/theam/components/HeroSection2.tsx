"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import FlowButton from "./FlowButton";
import Image from "next/image";

export default function HeroSection2() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fullText = "India's Premier Alternative Investments Platform";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    if (isInView) {
      let index = 0;
      const interval = setInterval(() => {
        setTypedText(fullText.slice(0, index + 1));
        index++;
        if (index === fullText.length) clearInterval(interval);
      }, 100); // typing speed
      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-r from-[#B28C3D]/10 via-[#B28C3D]/30 to-[#B28C3D]/40">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="relative z-30 max-w-7xl mx-auto min-h-screen flex flex-col items-center justify-center text-white px-4"
      >
        <div className="flex items-start gap-4 p-4 pt-32">
          <div className="w-full lg:w-1/2 h-full pb-10">
            <p className="p-1 mb-4 text-xl font-semibold border border-[#B28C3D]/10 bg-[#B28C3D]/10 rounded-full w-fit mr-auto px-4 text-[#0A2B58] bg-opacity-60 backdrop-blur-sm">
              Wealth1 - Your PMS and AIF Partner
            </p>
            <h2 className="capitalize text-5xl lg:w-5/6 text-left w-full mr-auto font-bold text-[#0A2B58] mb-4">
              {typedText}
              {/* <span className="animate-pulse inline-block w-1 h-7 bg-[#0A2B58] ml-1" /> */}
            </h2>
            <p className="text-base text-[#0A2B58] mb-4 text-justify w-full lg:w-4/5 mr-auto">
              Discover curated PMS and AIF opportunities with Wealth1&apos;s
              expert guidance in Portfolio Management Services and Alternative
              Investment Funds.
            </p>
            <div className="flex justify-start items-center mr-auto gap-4">
              <FlowButton className="text-base">
                Explore Alternative Investments
              </FlowButton>
            </div>
          </div>
          <div className="w-full lg:w-1/2 overflow-hidden rounded-md shadow-2xl">
            <Image
              src={"/assets/heronew.png"}
              alt=""
              width={1600}
              height={900}
              className="object-cover hover:scale-101 transition-all ease-in-out duration-300 object-center w-full h-full m-auto"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
