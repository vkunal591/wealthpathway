import React from "react";
import { GoGraph } from "react-icons/go";
import { LuShieldHalf } from "react-icons/lu";
import { PiBriefcaseLight } from "react-icons/pi";

export default function FundInsight() {
  const data = [
    {
      icon: "briefcase",
      value: "Minimum Investment",
      value1: "₹5 Crores",
      label:
        "Stallion PMS follows a long-term investment strategy that focuses on companies with sustainable earnings momentum and industry dominance.",
    },
    {
      icon: "calendar",
      value: "Investment Horizon",
      value1: "3-5 Years",
      label:
        "The fund capitalizes on scalable businesses in high-growth industries, ensuring long-term wealth creation for investors.",
    },
  ];

  const iconMap: any = {
    briefcase: PiBriefcaseLight,
    calendar: LuShieldHalf,
    graph: GoGraph,
  };
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16">
      <div className="rounded-2xl m-auto shadow border-l-4 border-gray-300  border border-l-blue-900 p-6">
        <h3 className="text-3xl font-semibold text-blue-900 mb-4">
          Fund Manager&apos;s Insights
        </h3>
        <div>
          {data.map((item, index) => {
            const IconComponent = iconMap[item.icon];
            return (
              <div
                key={index}
                className="p-4 w-full h-auto flex items-center justify-start gap-4"
              >
                <div className="flex justify-start mb-2 p-2 rounded-full bg-blue-900/10">
                  {IconComponent && (
                    <IconComponent className="text-3xl text-blue-900" />
                  )}
                </div>
                <div className="text-left w-full">
                  <h2 className="text-lg text-blue-900 mb-2 font-semibold">
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
            <div className="flex justify-center items-center h-16 w-16 mb-2 p-2 text-blue-900 text-2xl  rounded-full bg-blue-900/10">
              AJ
            </div>
            <div className="text-left w-full">
              <h2 className="text-lg text-blue-900 mb-2 font-semibold">
                Amit Jeswani
              </h2>
              <p className="text-sm text-gray-500 w-full lg:w-4/5 ">
                Fund Manager, Stallion PMS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
