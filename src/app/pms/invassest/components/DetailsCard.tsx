"use client";
import React, { useState } from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { FiUserCheck } from "react-icons/fi";
import { GoGraph } from "react-icons/go";
import { IoTimerOutline } from "react-icons/io5";
import { LuShieldHalf } from "react-icons/lu";
import { MdCurrencyRupee } from "react-icons/md";
import { SlBadge } from "react-icons/sl";

const data = [
  {
    icon: "briefcase",
    value: "Consistent Performance",
    label: "Real-time analysis of 170+ parameters",
  },
  {
    icon: "calendar",
    value: "Risk Management",
    label: "Drawdowns capped within 20%",
  },
  {
    icon: "graph",
    value: "Growth Focus",
    label: "Shifts based on market phases",
  },
  {
    icon: "chartPie",
    value: "Expert Management",
    label: "30+ years of market wisdom",
  },
];

const data2 = [
  {
    icon: "briefcase",
    value: "Minimum Investment",
    value1: "₹50 L",
    label: "As per SEBI regulations",
  },
  {
    icon: "calendar",
    value: "Investment Horizon",
    value1: "3-5 Years",
    label: "Recommended minimum period",
  },
  {
    icon: "graph",
    value: "Expected CAGR",
    label: "Expected over long term",
    value1: "18-28% CAGR",
    label2: "Plan A:",
    value2: "1.5% Fixed Fee + 15% Profit Sharing over 10% Hurdle Rate",
    label3: "Plan B:",
    value3: "2.5% Fixed Fee",
  },
];

const data3 = {
  title: "Performance of INVasset PMS",
  description:
    "INVasset PMS aims to deliver consistent returns through a data-driven approach while actively managing risk. Performance metrics are updated monthly.",
  label: " Performance Metrics",
  content: [
    {
      label: "1 Month	",
      value: "-10.1",
      value2: "-7.7",
    },
    {
      label: "3 Months	",
      value: "-18.9",
      value2: "-12.1",
    },
    {
      label: "6 Months	",
      value: "-15.5",
      value2: "-16.1",
    },
    {
      label: "1 Year	",
      value: "6.2",
      value2: "-0.4",
    },
    {
      label: "2 Years ",
      value: "28.4",
      value2: "17.8",
    },
    {
      label: "3 Years	",
      value: "18.7",
      value2: "12.7",
    },
    {
      label: "Since Inception ",
      value: "30.3",
      value2: "19.0",
    },
  ],
};

const iconMap: any = {
  briefcase: SlBadge,
  calendar: LuShieldHalf,
  graph: GoGraph,
  chartPie: FiUserCheck,
};

const iconMap2: any = {
  briefcase: MdCurrencyRupee,
  calendar: IoTimerOutline,
  graph: GoGraph,
};

const sections = [
  {
    id: "overview",
    title: "Overview",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        <div className="self-start">
          <h2 className="text-2xl font-bold text-[#0A2B58]">
            INVasset Growth Fund PMS is an Award-Winning, SEBI-registered
            Quant-based Portfolio Management Service for HNIs & NRIs.
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            With ₹800 Crores+ AUM and 100% Skin in the game, their portfolio
            strategy is the culmination of 32 years of market experience, now
            coded into a proprietary algorithm that analyses over 1,500 listed
            companies across 170+ financial and technical parameters in
            real-time. It’s not a black box. It’s a clear, rules-based system
            developed by experts with decades of skin in the game.
          </p>
          <p className="mt-2 text-gray-600">
            What sets INVasset apart is their quant-based, algorithm-driven
            investment strategy. They don’t guess, they calculate. They don’t
            time the market— they trust their time-tested model. Their decisions
            are powered by data, not driven by emotions.
          </p>
          <button className="mt-6 px-6 py-3 bg-gold text-gray-50 rounded-full bg-gradient-to-r from-[#B28C3D] via-[#B28C3D]/95 to-[#B28C3D]/50 font-semibold shadow-md">
            Learn More
          </button>
        </div>
        <div className="self-start shadow p-6 rounded-md">
          <h2 className="text-xl font-semibold text-[#0A2B58]">
            Investment Focus
          </h2>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li className="flex items-center gap-2">
              <BsCheck2Circle className="text-[#B28C3D] text-2xl" />
              Adapts dynamically to market phases—shifting from value to
              quality, from growth to safety
            </li>
            <li className="flex items-center gap-2">
              <BsCheck2Circle className="text-[#B28C3D]" />
              Focuses on scalable businesses with strong capital efficiency
            </li>
            <li className="flex items-center gap-2">
              <BsCheck2Circle className="text-[#B28C3D]" />
              Holds 15–25 high-conviction stocks with low churn ratio
            </li>
            <li className="hidden items-center gap-2">
              <BsCheck2Circle className="text-[#B28C3D]" />
              Includes capital protection protocols for market downturns
            </li>
            <li className="hidden items-center gap-2">
              <BsCheck2Circle className="text-[#B28C3D]" />
              Aims to keep drawdowns under 20% during corrections
            </li>
            <li className="flex items-center gap-2">
              <BsCheck2Circle className="text-[#B28C3D]" />
              Combines fundamental analysis with advanced quantitative
              techniques
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "why-choose",
    title: "Why choose Invasset",
    content: (
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-[#0A2B58]">
            Why Choose INVasset PMS?
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed mb-4">
            INVasset PMS takes a unique approach to portfolio management by
            combining the wisdom of experienced market professionals with
            cutting-edge algorithmic decision-making. The strategy focuses on
            consistent performance with active risk management across all market
            conditions.
          </p>
          <div className="rounded-2xl bg-[#B28C3D]/30 p-4">
            <h3 className="text-xl font-bold text-[#0A2B58]">
              INVasset&apos;s Strategic Edge
            </h3>
            <p className="mt-2 text-gray-600">
              The proprietary AAID (Advanced Algorithms for Investment
              Decisions) system continuously analyzes over 1,500 companies
              across 170+ parameters. This data-driven approach removes
              emotional biases from investment decisions, allowing the portfolio
              to adapt dynamically to changing market conditions and capture
              opportunities across market cycles.
            </p>
          </div>
        </div>
        <div className="shadow p-6 rounded-md">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Investment Focus
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {data.map((item, index) => {
              const IconComponent = iconMap[item.icon];
              return (
                <div
                  key={index}
                  className="border border-gray-300 shadow rounded-xl p-4 w-full h-auto flex flex-col items-center justify-start"
                >
                  <div className="w-full flex justify-start mb-2">
                    {IconComponent && (
                      <IconComponent className="text-3xl text-[#B28C3D]" />
                    )}
                  </div>
                  <div className="text-left w-full">
                    <h2 className="text-sm text-[#0A2B58] mb-2 font-semibold">
                      {item.value}
                    </h2>
                    <p className="text-xs text-gray-500 ">{item.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "key-features",
    title: "Key Features",
    content: (
      <div className="p-6 rounded-md">
        <h2 className="text-xl font-semibold text-[#0A2B58] mb-4">
          Key Features of INVasset PMS
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {data2.map((item: any, index: any) => {
            const IconComponent = iconMap2[item.icon];
            return (
              <div
                key={index}
                className="border border-gray-300 shadow rounded-xl p-4 w-full h-auto flex flex-col items-center justify-start"
              >
                <div className="w-full flex justify-start mb-2">
                  {IconComponent && (
                    <IconComponent className="text-3xl text-[#B28C3D]" />
                  )}
                </div>
                <div className="text-left w-full">
                  <h2 className="text-lg text-[#0A2B58] mb-2 font-semibold">
                    {item?.value}
                  </h2>
                  <p
                    className={` font-bold text-[#0A2B58] ${
                      index === 2 ? "text-sm" : " text-2xl"
                    } `}
                  >
                    {item?.value1}
                  </p>
                  <p className="text-xs text-gray-500 ">{item?.label}</p>

                  <p className="text-sm font-semibold text-gray-500 ">
                    {item?.label2}
                  </p>
                  <p className="text-xs text-gray-500 ">{item?.value2}</p>
                  <p className="text-sm font-semibold text-gray-500 ">
                    {item?.label3}
                  </p>
                  <p className="text-xs text-gray-500 ">{item?.value3}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    ),
  },
  {
    id: "performance",
    title: "Performance",
    content: (
      <div>
        <div className="mb-5 text-center">
          <h2 className="text-3xl font-bold text-[#0A2B58]">{data3?.title}</h2>
          <p className="mt-4 w-4/5 m-auto text-gray-600 leading-relaxed">
            {data3?.description}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 mb-4 ">
          <div className="rounded-2xl shadow-lg overflow-hidden">
            <h2 className="bg-[#B28C3D]  text-white p-4 text-left">
              {data3?.label}
            </h2>
            <p className="grid grid-cols-3 gap-2 text-sm text-gray-900 p-4 border-b border-gray-100">
              <span>{"Period"} </span>
              <span className="text-[#0A2B58]">{"Portfolio"}</span>
              <span className="text-[#0A2B58]">{"BSE 500 TRI"}</span>
            </p>
            {data3?.content?.map((content: any, index: any) => (
              <p
                key={index}
                className="grid grid-cols-3 gap-2 text-sm text-gray-900 p-4 border-b border-gray-200"
              >
                <span className="font-semibold">{content?.label} </span>
                <span
                  className={`${
                    Number(content?.value) > 0
                      ? "text-[#B28C3D]"
                      : "text-[#0A2B58]"
                  }`}
                >
                  {Number(content?.value).toFixed(1)} %
                </span>

                <span
                  className={`${
                    Number(content.value2) > 0
                      ? "text-[#B28C3D]"
                      : "text-[#0A2B58]"
                  }`}
                >
                  {content?.value2}
                  {" %"}
                </span>
              </p>
            ))}
          </div>
        </div>
        <p className="text-left text-xs text-gray-500 ml-5 w-full">
          Disclaimer *
        </p>
        <p className="text-left text-xs text-gray-500 ml-5 w-full">
          Returns Up To one year are absolute and above one year are CAGR
        </p>
        <p className="text-left text-xs text-gray-500 ml-5 w-full">
          Data as pulled from SEBI. Data as of Feb 2025.
        </p>
      </div>
    ),
  },
];

export default function DetailsCard() {
  const [activeSection, setActiveSection] = useState("overview");

  return (
    <div className="max-w-7xl m-auto p-14 lg:p-16 lg:pb-0 text-[#0A2B58]">
      {/* Navigation Buttons */}
      <div className="flex space-x-6 pb-4">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 outline-0  hover:from-[#B28C3D]/90 hover:via-[#B28C3D]/80 hover:to-[#B28C3D]/90 hover:text-white transition-color ease-in-out ${
              activeSection === section.id
                ? "bg-gradient-to-r from-[#B28C3D] via-[#B28C3D]/95 to-[#B28C3D]/50  text-gray-50 font-bold shadow-md"
                : "bg-gradient-to-r from-[#B28C3D]/20 via-[#B28C3D]/20 to-[#B28C3D]/10  border-gray-50 text-[#0A2B58]"
            }`}
            onClick={() => setActiveSection(section.id)}
          >
            {section.title}
          </button>
        ))}
      </div>

      {/* Dynamic Content */}
      <div className="bg-transparent p-8 mt-4 ">
        {sections.find((section) => section.id === activeSection)?.content}
      </div>
    </div>
  );
}
