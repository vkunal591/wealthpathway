"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion, useAnimation } from "framer-motion";

export default function HeroSection2() {
  const [, setScrolling] = useState(false);
  const controls = useAnimation();

  // Trigger bounce animation on page load
  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0, // Bounce-in when page loads
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 25,
        delay: 0.5, // Delay slightly for smoother entrance
      },
    });
  }, [controls]);

  // Handle scroll event for bounce-out and bounce-in
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
        controls.start({
          opacity: 0, // Fade out
          y: 50, // Bounce out
          transition: {
            type: "spring",
            stiffness: 200,
            damping: 25,
          },
        });
      } else {
        setScrolling(false);
        controls.start({
          opacity: 1, // Fade in
          y: 0, // Bounce in
          transition: {
            type: "spring",
            stiffness: 200,
            damping: 25,
          },
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <div className="p-4 lg:p-16 max-w-7xl m-auto  flex flex-col justify-end items-start h-[60vh] sm:h-[50vh] lg:h-screen">
      <motion.h1
        className="text-5xl lg:text-7xl w-full text-center font-semibold text-blue-900 mb-10"
        initial={{ opacity: 0, y: -50 }} // Initially off-screen and invisible
        animate={controls} // Control animation with framer-motion controls
        transition={{ duration: 1.5 }} // Smooth transition
      >
        Why Choose Wealth1 for Your Investment Journey?
      </motion.h1>
      <motion.p
        className="text-lg lg:text-lg w-full text-center font-medium text-blue-900 mb-10"
        initial={{ opacity: 0, y: -50 }} // Initially off-screen and invisible
        animate={controls} // Control animation with framer-motion controls
        transition={{ duration: 1.5 }} // Smooth transition
      >
        Experience the perfect blend of human expertise and artificial
        intelligence, delivering superior investment solutions tailored to your
        needs.
      </motion.p>
      <motion.div
        className="border-[2px] border-gray-50 w-full text-center flex justify-center items-center rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Link
          href={"/"}
          className="p-3.5 px-6 m-auto font-bold text-lg border border-gray-900 shadow-xl bg-gray-50 text-blue-900 rounded-full flex items-center justify-center"
        >
          Start your journey
          <IoIosArrowRoundForward className="text-3xl font-extrabold" />
        </Link>
      </motion.div>
    </div>
  );
}
