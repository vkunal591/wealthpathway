import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion, useAnimation } from "framer-motion";

export default function HeroSection() {
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
    <div className="p-4 lg:p-16 max-w-7xl m-auto flex flex-col justify-end items-start h-[70vh] sm:h-[50vh] lg:h-screen">
      <motion.h1
        className="text-4xl lg:text-7xl w-full lg:w-4/5 font-semibold text-gray-800 mb-10"
        initial={{ opacity: 0, y: -50 }} // Initially off-screen and invisible
        animate={controls} // Control animation with framer-motion controls
        transition={{ duration: 1.5 }} // Smooth transition
      >
        PMS & AIF Investments
      </motion.h1>
      <motion.div
        className="border-[2px] border-gray-50 rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Link
          href={"/"}
          className="p-3.5 px-6 font-bold text-lg border border-gray-900 bg-gray-50 text-gray-800 rounded-full flex items-center justify-center"
        >
          Start your journey
          <IoIosArrowRoundForward className="text-3xl font-extrabold" />
        </Link>
      </motion.div>
    </div>
  );
}
