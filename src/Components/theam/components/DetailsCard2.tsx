"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { FiUserCheck } from "react-icons/fi";
import { GoGraph } from "react-icons/go";
import {  LuShieldHalf } from "react-icons/lu";
import { SlBadge } from "react-icons/sl";



const data = [
  {
    icon: "briefcase",
    value: "Diversification of portfolio",
    label: "Real-time analysis of 170+ parameters",
  },
  {
    icon: "calendar",
    value: "Potential for higher returns",
    label: "Drawdowns capped within 20%",
  },
  {
    icon: "graph",
    value: "Access to unique investment opportunities",
    label: "Shifts based on market phases",
  },
  {
    icon: "chartPie",
    value: " Reduced exposure to traditional markets",
    label: "30+ years of market wisdom",
  },
];



const iconMap: any = {
  briefcase: SlBadge,
  calendar: LuShieldHalf,
  graph: GoGraph,
  chartPie: FiUserCheck,
};


const sections = [
  {
    id: "Portfolio Management Services",
    title: "Portfolio Management Services",
    icon: "briefcase",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        <div className="self-start">
          <h2 className="text-2xl font-bold text-[#0A2B58]">
            Grow Your Wealth with Expert-Driven Investments
          </h2>
          <p className="mt-4 mb-4 text-gray-600 leading-relaxed">
            At Wealth1, our Portfolio Management Services (PMS) are designed for
            discerning investors who seek personalized and professional
            management of their wealth. With a team of experienced fund managers
            and financial experts, we craft strategies tailored to your
            financial goals, risk appetite, and investment horizon.
          </p>
        </div>
        <div className="self-start shadow p-6 rounded-md">
          <h2 className="text-xl font-semibold text-[#0A2B58]">
            Investment Focus
          </h2>
          <div className="mt-4 space-y-2 text-gray-600">
            <div className="flex items-center gap-2">
              <BsCheck2Circle className="text-[#B28C3D] text-2xl" />
              <div className="">
                Invest in carefully selected stocks across sectors to generate
                long-term wealth.
              </div>
            </div>
            <div className="flex items-center gap-2">
              <BsCheck2Circle className="text-[#B28C3D] text-2xl" />
              <div className="">
                Balanced portfodivos with a mix of debt and equity for stable
                and risk-adjusted returns.
              </div>
            </div>
            <div className="flex items-center gap-2">
              <BsCheck2Circle className="text-[#B28C3D] text-[27px]" />
              <div className="">
                Investment solutions built around specific themes divke ESG,
                technology, or global diversification.
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "Alternative Investment Funds",
    title: "Alternative Investment Funds",
    icon: "calendar",
    content: (
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-[#0A2B58]">
            Alternative Investment Funds
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed mb-4">
            Alternative Investment Funds (AIFs) provide an exciting opportunity
            for investors looking to diversify their portfolios. These funds
            offer non-traditional investment avenues, such as private equity,
            real estate, and hedge funds, making them a perfect choice for those
            seeking higher returns and reduced market volatility.
          </p>
        </div>
        <div className="shadow p-6 rounded-md">
          <h2 className="text-lg font-semibold text-primary mb-4">
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="mt-4 space-y-2 text-gray-600">
              {data.map((d, index) => (
                <div key={index} className="flex items-center gap-2">
                  <BsCheck2Circle className="text-[#B28C3D] text-2xl" />
                  <div className="">{d?.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "Risk Management",
    title: "Risk Management",
    icon: "calendar",
    content: (
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-[#0A2B58]">Risk Management</h2>
          <p className="mt-4 text-gray-600 leading-relaxed mb-4">
            Effective risk management is the key to ensuring long-term financial
            success. At Wealth1 PMS, we help you identify, assess, and mitigate
            various financial risks, so you can protect your investments and
            secure your future, even during volatile market conditions.
          </p>
        </div>
        <div className="shadow p-6 rounded-md">
          <h2 className="text-lg font-semibold text-primary">Key Benefits</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="mt-4 space-y-2 text-gray-600">
              {[
                " Identifying potential risks",
                " Mitigating financial exposure",
                " Protecting your investments",
                " Tailored risk management strategies",
              ].map((d, index) => (
                <div key={index} className="flex items-center gap-2">
                  <BsCheck2Circle className="text-[#B28C3D] text-2xl" />
                  <div className="">{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  //   {
  //     id: "Risk Management",
  //     title: "Risk Management",
  //     icon: "graph",
  //     content: (
  //       <div className="p-6 rounded-md">
  //         <h2 className="text-xl font-semibold text-[#0A2B58] mb-4">
  //           Key Features of INVasset PMS
  //         </h2>
  //         <div className="grid grid-cols-3 gap-4">
  //           {data2.map((item: any, index: any) => {
  //             const IconComponent = iconMap2[item.icon];
  //             return (
  //               <div
  //                 key={index}
  //                 className="border border-gray-300 shadow rounded-xl p-4 w-full h-auto flex flex-col items-center justify-start"
  //               >
  //                 <div className="w-full flex justify-start mb-2">
  //                   {IconComponent && (
  //                     <IconComponent className="text-3xl text-[#B28C3D]" />
  //                   )}
  //                 </div>
  //                 <div className="text-left w-full">
  //                   <h2 className="text-lg text-[#0A2B58] mb-2 font-semibold">
  //                     {item?.value}
  //                   </h2>
  //                   <p className="text-sm font-semibold text-gray-500 ">
  //                     {item?.value1}
  //                   </p>
  //                   <p className="text-xs text-gray-500 ">{item?.label}</p>

  //                   <p className="text-sm font-semibold text-gray-500 ">
  //                     {item?.value2}
  //                   </p>
  //                   <p className="text-xs text-gray-500 ">{item?.label1}</p>
  //                 </div>
  //               </div>
  //             );
  //           })}
  //         </div>
  //       </div>
  //     ),
  //   },
  {
    id: "Portfolio Review",
    title: "Portfolio Review",
    icon: "chartPie",
    content: (
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-[#0A2B58]">
            Portfolio Review
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed mb-4">
            A comprehensive portfolio review allows you to evaluate the
            performance and alignment of your investments with your financial
            goals. We analyze your holdings and recommend adjustments to ensure
            your portfolio is optimized for maximum returns, minimizing risks
            over time.
          </p>
        </div>
        <div className="shadow p-6 rounded-md">
          <h2 className="text-lg font-semibold text-primary mb-4">
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="mt-4 space-y-2 text-gray-600">
              {[
                "Assessing portfolio performance",
                "Identifying underperforming assets",
                "Aligning investments with financial goals",
                "Rebalancing for optimal returns",
              ].map((d, index) => (
                <div key={index} className="flex items-center gap-2">
                  <BsCheck2Circle className="text-[#B28C3D] text-2xl" />
                  <div className="">{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function DetailsCard2() {
  const [activeTab, setActiveTab] = useState("Portfolio Management Services");

  return (
    <div className="max-w-7xl m-auto p-4  text-[#0A2B58]">
      {/* Navigation Buttons */}
      <div className="flex space-x-6 pb-4">
        {sections.map((section) => {
          const IconComponent = iconMap[section.icon];

          return (
            <button
              key={section.id}
              onClick={() => setActiveTab(section.id)}
              className={`px-4 py-2 text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                activeTab === section.id
                  ? "border-b-[1.5px] boeder-[#B28C3D] text-[#B28C3D]"
                  : "border-[#0A2B58] text-[#0A2B58]"
                // ? "bg-gradient-to- from-[#B28C3D] via-[#B28C3D]/95 to-[#B28C3D]/50  text-gray-50 font-bold shadow-md"
                // : "bg-gradient-to- from-[#B28C3D]/20 via-[#B28C3D]/20 to-[#B28C3D]/10  border-gray-50 text-[#0A2B58]"
              }`}
            >
              {IconComponent && <IconComponent className="text-xl" />}{" "}
              {section.title}
            </button>
          );
        })}
      </div>

      {/* Dynamic Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="bg-transparent p-8 mt-4 "
        >
          {sections.find((section) => section.id === activeTab)?.content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
