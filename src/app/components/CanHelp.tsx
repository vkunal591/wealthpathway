"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";

const sections = [
  {
    id: "01",
    title: "Portfolio Management Services",
    description: "Expert-managed portfolios tailored to your goals",
    list: [
      "Customized investment strategies",
      "Active portfolio monitoring",
      "Optimized asset allocation",
    ],
    imageUrl: "/manage.png",
  },
  {
    id: "02",
    title: "Alternative Investment Funds",
    description: "Access to exclusive investment opportunities",
    list: [
      "Private equity and hedge funds",
      "Real estate and commodities",
      "Venture capital investments",
    ],
    imageUrl: "/fund.png",
  },
  {
    id: "03",
    title: "Risk Management",
    description: "Sophisticated risk assessment and mitigation",
    list: [
      "Comprehensive risk analysis",
      "Market volatility assessment",
      "Portfolio diversification strategies",
    ],
    imageUrl: "/risk.png",
  },
  {
    id: "04",
    title: "Portfolio Review",
    description:
      "In-depth analysis and optimization of your existing investments",
    list: [
      "Performance evaluation",
      "Investment strategy adjustments",
      "Fee and cost analysis",
    ],
    imageUrl: "/portfolio.png",
  },
];

export default function CanHelp() {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        const container: any = containerRef.current;
        if (!container) return;

        const sections = container.querySelectorAll("section");
        // let index = 0;
        sections.forEach((section: any) => {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            // index = i;
          }
        });
      });
    };

    const container: any = containerRef.current;
    container?.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4 lg:p-16" ref={containerRef}>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-sm text-gray-500 mb-2 font-semibold text-center"
      >
        Our Services
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl lg:text-4xl text-blue-900 w-full lg:w-3/5 font-semibold mx-auto text-center mb-4"
      >
        Comprehensive Investment Solutions
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-base text-gray-500 font-semibold text-center mb-4"
      >
        Discover our curated selection of alternative investment opportunities
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {sections.map((data, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="shadow-lg p-4 border border-gray-300 rounded-2xl bg-white"
          >
            <div className="rounded-2xl overflow-hidden flex flex-col">
              <div className="h-64 w-full relative">
                <Image
                  src={data.imageUrl}
                  alt=""
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-[#4eb3a9] mb-2">
                  {data.title}
                </h3>
                <p className="text-gray-900 text-2xl font-semibold">
                  {data.description}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-blue-900">
                  {data.list.map((li, i) => (
                    <li key={i}>{li}</li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link
                    href="/"
                    className="p-3 text-base font-bold flex items-center justify-center border bg-blue-950 text-white rounded-full transition hover:bg-gray-900"
                  >
                    Review my portfolio
                    <IoIosArrowRoundForward className="text-2xl ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
