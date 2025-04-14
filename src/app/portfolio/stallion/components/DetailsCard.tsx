"use client";
import React, { useState } from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { FiDollarSign, FiUserCheck } from "react-icons/fi";
import { GoGraph } from "react-icons/go";
import { IoTimerOutline } from "react-icons/io5";
import { LuShieldHalf } from "react-icons/lu";
import { SlBadge } from "react-icons/sl";

const data = [
  {
    icon: "briefcase",
    value: "Consistent Performance",
    label: "Strong track record of returns",
  },
  {
    icon: "calendar",
    value: "Risk Management",
    label: "Structured approach to managing volatility",
  },
  {
    icon: "graph",
    value: "Growth Focus",
    label: "Emphasis on scalable businesses",
  },
  {
    icon: "chartPie",
    value: "Expert Management",
    label: "Led by seasoned fund manager",
  },
];

const data2 = [
  {
    icon: "briefcase",
    value: "Minimum Investment",
    value1: "₹5 Crores",
    label: "Effective January 10, 2025",
  },
  {
    icon: "calendar",
    value: "Investment Horizon",
    value1: "3-5 Years",
    label: "Recommended minimum period",
  },
  {
    icon: "graph",
    value: "Fee Structure",
    value1: "Plan A:",
    label: "1.5% Fixed Fee + 15% Profit Sharing over 10% Hurdle Rate",
    value2: "Plan B:",
    label1: "2.5% Fixed Fee",
  },
];

const data3 = {
  title: "Performance Of Stallion PMS",
  description:
    "  Stallion PMS has consistently delivered superior returns compared to traditional investment options. Below is the historical performance as of December 31, 2024.",
  label: " Stallion PMS Returns",
  content: [
    {
      label: "Since Inception (CAGR)",
      value: "30.84%",
    },
    {
      label: "1-Year Return",
      value: "42.06%",
    },
    {
      label: "2-Year Return	",
      value: "32.75%",
    },
    {
      label: "1-Year Return	",
      value: "32.39%",
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
  briefcase: FiDollarSign,
  calendar: IoTimerOutline,
  graph: GoGraph,
};

const sections = [
  {
    id: "overview",
    title: "Overview",
    content: (
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-blue-900">
            Overview of Stallion PMS
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Stallion PMS is a high-growth Portfolio Management Service designed
            for investors seeking long-term wealth creation through a structured
            investment approach. Managed by{" "}
            <span className="font-bold">Amit Jeswani</span>, it focuses on
            identifying market leaders and emerging monopolies.
          </p>
          <p className="mt-2 text-gray-600">
            The fund follows a growth-oriented strategy emphasizing scalability
            and sustainability, primarily focusing on sectors like{" "}
            <span className="font-bold text-gray-600">
              Financials, Consumer Tech, Consumer, and Pharma
            </span>
            .
          </p>
          <button className="mt-6 px-6 py-3 bg-gold text-gray-50 rounded-full bg-gradient-to-r from-blue-900 via-blue-900/95 to-blue-900/50 font-semibold shadow-md">
            Learn More
          </button>
        </div>
        <div className="shadow p-6 rounded-md">
          <h2 className="text-xl font-semibold text-gray-900">
            Investment Focus
          </h2>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li className="flex items-center gap-2">
              <BsCheck2Circle className="text-blue-900" /> Scalability and
              sustainability in stock selection
            </li>
            <li className="flex items-center gap-2">
              <BsCheck2Circle className="text-blue-900" /> Emerging monopolies
              with scalable business models
            </li>
            <li className="flex items-center gap-2">
              <BsCheck2Circle className="text-blue-900" />
              Sustainable competitive advantages
            </li>
            <li className="flex items-center gap-2">
              <BsCheck2Circle className="text-blue-900" /> Strong growth
              potential with manageable risk
            </li>
            <li className="flex items-center gap-2">
              <BsCheck2Circle className="text-blue-900" />
              Companies with proven management track records
            </li>
            <li className="flex items-center gap-2">
              <BsCheck2Circle className="text-blue-900" />
              Businesses with long-term structural growth drivers
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "why-choose",
    title: "Why Choose Stallion",
    content: (
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-blue-900">
            Why Choose Stallion PMS?
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed mb-4">
            Stallion PMS stands out in the PMS industry by adopting a scalable
            investment strategy that targets proven and emerging monopolies. The
            fund strategically invests in high-growth businesses to maximize
            long-term wealth creation.
          </p>
          <div className="rounded-2xl bg-blue-200/50 p-4">
            <h3 className="text-xl font-bold text-blue-900">
              Stallion&apos;s Strategic Edge
            </h3>
            <p className="mt-2 text-gray-600">
              We identify businesses with sustainable competitive advantages
              that can deliver consistent growth over extended periods, focusing
              on quality management and scalable operations. .
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
                      <IconComponent className="text-3xl text-blue-900" />
                    )}
                  </div>
                  <div className="text-left w-full">
                    <h2 className="text-sm text-blue-900 mb-2 font-semibold">
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
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Investment Focus
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {data2.map((item, index) => {
            const IconComponent = iconMap2[item.icon];
            return (
              <div
                key={index}
                className="border border-gray-300 shadow rounded-xl p-4 w-full h-auto flex flex-col items-center justify-start"
              >
                <div className="w-full flex justify-start mb-2">
                  {IconComponent && (
                    <IconComponent className="text-3xl text-blue-900" />
                  )}
                </div>
                <div className="text-left w-full">
                  <h2 className="text-lg text-blue-900 mb-2 font-semibold">
                    {item?.value}
                  </h2>
                  <p className="text-sm font-semibold text-gray-500 ">
                    {item?.value1}
                  </p>
                  <p className="text-xs text-gray-500 ">{item?.label}</p>

                  <p className="text-sm font-semibold text-gray-500 ">
                    {item.value2}
                  </p>
                  <p className="text-xs text-gray-500 ">{item?.label1}</p>
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
          <h2 className="text-3xl font-bold text-gray-900">{data3?.title}</h2>
          <p className="mt-4 w-4/5 m-auto text-gray-600 leading-relaxed">
            {data3?.description}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 ">
          <div className="rounded-2xl shadow-lg overflow-hidden">
            <h2 className="bg-blue-900  text-white p-4 text-left">
              {data3?.label}
            </h2>
            {data3?.content?.map((content: any, index: any) => (
              <p
                key={index}
                className="flex justify-between items-center text-sm text-gray-900 p-4 border-b border-gray-100"
              >
                <span>{content?.label} </span>
                <span className="text-blue-900">{content?.value}</span>
              </p>
            ))}
          </div>
          <div className="rounded-2xl shadow-lg overflow-hidden">
            <h2 className="bg-blue-900  text-white p-4 text-left">
              {" "}
              Risk Measures
            </h2>
            <div className="p-4">
              <p className="text-xs mb-2">Alpha (1Y)</p>
              <p className="text-2xl font-bold mb-2">-8.79%</p>
              <p className="text-sm font-semibold text-gray-800 mb-2">
                Risk Management Approach
              </p>
              <p className="text-sm text-gray-600">
                Stallion PMS follows a structured risk management approach to
                optimize returns while managing volatility, focusing on quality
                businesses with sustainable competitive advantages.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function DetailsCard() {
  const [activeSection, setActiveSection] = useState("overview");

  return (
    <div className="max-w-7xl m-auto p-14 lg:p-16 text-blue-900">
      {/* Navigation Buttons */}
      <div className="flex space-x-6 pb-4">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 outline-0  hover:from-[#024CAA]/90 hover:via-[#024CAA]/80 hover:to-blue-900/90 hover:text-white transition-color ease-in-out ${
              activeSection === section.id
                ? "bg-gradient-to-r from-blue-900 via-blue-900/95 to-blue-900/50  text-gray-50 font-bold shadow-md"
                : "bg-gradient-to-r from-[#024CAA]/10 via-[#024CAA]-50 to-blue-50  border-gray-50 text-blue-900"
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
