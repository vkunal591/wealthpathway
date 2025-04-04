import React from "react";
import { GoGraph } from "react-icons/go";
import { LuShieldHalf } from "react-icons/lu";
import { PiBriefcaseLight } from "react-icons/pi";

export default function FundInsight() {
  const data = [
    {
      icon: "briefcase",
      value: "Investment Philosophy",
      value1: "₹5 Crores",
      label:
        "Avoid drawdowns. Stick to logic. Let the data lead. INVasset PMS prepares for market cycles in advance using real-time data, enabling the fund to enter, exit, and rotate positions without emotional overreaction.",
    },
    {
      icon: "calendar",
      value: "Selection Criteria",
      value1: "3-5 Years",
      label:
        "The fund applies 170+ algorithmic filters covering technical & momentum signals, fundamentals (ROE, ROCE, Debt-Equity), sentiment & behavioral analytics, and insider buying patterns to identify high-potential investment opportunities.",
    },
  ];

  const iconMap: any = {
    briefcase: PiBriefcaseLight,
    calendar: LuShieldHalf,
    graph: GoGraph,
  };
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16">
      <div className="rounded-2xl m-auto shadow border-l-4 border-gray-300  border border-l-[#B28C3D] p-6">
        <h3 className="text-3xl font-semibold text-[#0A2B58] mb-4">
          Fund Manager&apos;s Philosophy
        </h3>
        <div>
          {data.map((item, index) => {
            const IconComponent = iconMap[item.icon];
            return (
              <div
                key={index}
                className="p-4 w-full h-auto flex items-center justify-start gap-4"
              >
                <div className="flex justify-start mb-2 p-2 rounded-full bg-[#B28C3D]/10">
                  {IconComponent && (
                    <IconComponent className="text-3xl text-[#B28C3D]" />
                  )}
                </div>
                <div className="text-left w-full">
                  <h2 className="text-lg text-[#0A2B58] mb-2 font-semibold">
                    {item.value}
                  </h2>
                  <p className="text-sm text-gray-500 w-full lg:w-4/5 ">
                    {item.label}
                  </p>
                </div>
              </div>
            );
          })}

          <hr className="my-4 border-gray-300" />
          <div className="p-4 w-full h-auto flex items-center justify-start gap-4">
            <div className="flex justify-center items-center h-16 w-16 mb-2 p-2 text-[#B28C3D] text-2xl  rounded-full bg-[#B28C3D]/10">
              AG
            </div>
            <div className="text-left w-full">
              <h2 className="text-lg text-[#0A2B58] mb-2 font-semibold">
                Anirudh Garg
              </h2>
              <p className="text-sm text-gray-500 w-full lg:w-4/5 ">
                Fund Manager, INVasset PMS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
