"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Footer from "@/Components/Common/Footer";

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
    imageUrl: "/graph.svg",
    imageAlt: "Graph Image",
    bgColor: "bg-gray-50",
    textColor: "text-black",
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
    imageUrl: "/graph.svg",
    imageAlt: "Another Graph Image",
    bgColor: "bg-[#121212]",
    textColor: "text-gray-800",
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
    imageUrl: "/graph.svg",
    imageAlt: "Graph Image",
    bgColor: "bg-gray-50",
    textColor: "text-black",
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
    imageUrl: "/graph.svg",
    imageAlt: "Another Graph Image",
    bgColor: "bg-[#121212]",
    textColor: "text-gray-800",
  },
];

export default function CanHelp() {
  const [, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling.current) return;

      const container = containerRef.current;
      if (!container) return;

      const sectionElements = container.querySelectorAll("section");
      let index = 0;
      sectionElements.forEach((section, i) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2) {
          index = i;
        }
      });

      setActiveIndex(index);
    };

    const container = containerRef.current;
    container?.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="max-w-8xl m-auto">
      <p className="text-sm text-gray-500 mb-2 font-semibold text-center ">
        Our Services
      </p>
      <h2 className="text-3xl lg:text-4xl text-gray-800 w-full lg:w-3/5 font-semibold m-auto text-center mb-4">
        Comprehensive Investment Solutions
      </h2>
      <p className="text-base text-gray-500 font-semibold text-center mb-2">
        Discover our curated selection of alternative investment opportunities
      </p>
      <div className="relative w-full h-[75vh] flex flex-col items-center">
        <div
          ref={containerRef}
          className="relative w-full h-full overflow-y-auto snap-y snap-mandatory scroll-smooth   no-scrollbar"
        >
          {sections.map((data: any, index: any) => (
            <div
              key={index}
              className="shadow-2xl p-4 lg:w-4/5 m-auto border border-gray-300 rounded-2xl mb-8"
            >
              <div className=" bg-gray-50 rounded-2xl overflow-hidden p-4 lg:p-14">
                <div className="w-full lg:w-3/5 p-4 mb-6">
                  <h3 className="text-xl lg:text-2xl font-semibold text-[#4eb3a9] mb-6">
                    {data?.title}
                  </h3>
                  <p className="text-gray-900 text-3xl lg:text-4xl font-semibold">
                    {data?.description}
                  </p>
                </div>
                <div className="flex flex-col lg:flex-row items-start justify-start ">
                  <div className="w-full lg:w-1/2 space-y-4  p-4">
                    <ul className="text-2xl font-medium text-black w-full lg:w-3/4 mr-auto space-y-6 mb-10">
                      {data?.list?.map((li: any, index: any) => (
                        <li
                          key={index}
                          className="text-gray-800 text-2xl font-medium text
                      "
                        >
                          {li}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={"/"}
                      className="p-3.5 lg:px-4 font-bold text-center hidden lg:flex text-base border bg-gray-800 text-gray-100   w-1/2 rounded-full items-center justify-center"
                    >
                      Review my portfolio
                      <IoIosArrowRoundForward className="text-2xl font-extrabold hidden lg:inline-block" />
                    </Link>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <div className="h-72 bg-gray-200 text-center lg:p-8 border border-gray-300 rounded-4xl w-full">
                      <Image
                        src="/aiana.png"
                        width={800}
                        height={800}
                        alt=""
                        className="object-contain m-auto rounded-4xl w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <Footer />
        </div>
      </div>
    </div>
  );
}