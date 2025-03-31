import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function CanHelp() {
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

  return (
    <div className="max-w-8xl m-auto my-16">
      <h2 className="text-5xl lg:text-7xl w-full lg:w-3/5 m-auto text-center text-gray-700 mb-16 font-semibold ">
        Comprehensive Investment Solutions
      </h2>

      <div className="w-full space-y-8 ">
        {sections.map((data: any, index: any) => (
          <div
            key={index}
            className="shadow-2xl border border-gray-300 rounded-2xl"
          >
            <div className=" bg-gray-50 rounded-3xl overflow-hidden p-4 lg:p-14">
              <div className="w-full lg:w-4/5 p-4 mb-6">
                <h3 className="text-3xl font-semibold text-[#4eb3a9] mb-6">
                  {data?.title}
                </h3>
                <p className="text-gray-900 text-4xl lg:text-6xl font-semibold">
                  {data?.description}
                </p>
              </div>
              <div className="flex flex-col lg:flex-row items-start justify-start ">
                <div className="w-full lg:w-1/2 space-y-4  p-10">
                  <ul className="text-2xl font-medium text-black w-full lg:w-3/4 mr-auto space-y-6 mb-16">
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
                  <div className="h-96 bg-gray-200 text-center lg:p-8 lg:px-16 border border-gray-300 rounded-4xl w-full">
                    <Image
                      src="/graph.svg"
                      width={800}
                      height={800}
                      alt=""
                      className="object-cover m-auto rounded-4xl w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
