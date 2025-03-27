'use client'
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Sidebar from "./MobileMenu";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

export default function Navbar() {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controls = useAnimation();

  const Navigation = [
    {
      label: "Product",
      link: "/",
    },
    {
      label: "Our Team",
      link: "/",
    },
  ];

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;

      // Detect scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollingDown(true);
      } else {
        setScrollingDown(false);
      }

      // Update last scroll position
      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    if (scrollingDown) {
      controls.start({ opacity: 0, transition: { duration: 0.3 } });
    } else {
      controls.start({ opacity: 1, transition: { duration: 0.3 } });
    }
  }, [scrollingDown, controls]);

  return (
    <motion.nav
      className="flex items-center justify-between bg-[#0000008c] z-[5000] text-green-50 w-11/12 m-auto p-4 rounded-xl fixed left-1/2 -translate-x-1/2 top-7"
      animate={controls}
    >
      <div className="w-1/2 lg:w-1/5 flex items-center justify-start">
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            width={150}
            height={70}
            unoptimized
            priority
            alt="PMS & AIF Investments"
            className="h-16 lg:h-auto filter invert"
          />
        </Link>
      </div>
      <div className="w-3/5 items-center justify-between gap-4 hidden lg:flex">
        <ul className="w-4/5 flex items-center justify-start gap-6">
          {Navigation?.map((data, index) => (
            <Link key={index} href={data?.link}>
              <li>{data?.label}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="w-1/2 lg:w-2/5 flex justify-end lg:justify-center items-center">
        <Link href={"/"} className="w-1/3 hidden lg:inline-block">
          Member Login
        </Link>

        <Link
          href={"/"}
          className="p-3 lg:px-8 font-bold text-center hidden lg:flex text-base border bg-gray-50 text-gray-800 rounded-full items-center justify-center"
        >
          Review my portfolio
          <IoIosArrowRoundForward className="text-2xl font-extrabold hidden lg:inline-block" />
        </Link>
        <Sidebar />
      </div>
    </motion.nav>
  );
}
