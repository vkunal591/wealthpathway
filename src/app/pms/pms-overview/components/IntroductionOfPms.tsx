import React from "react";
import { FiBriefcase, FiUserCheck } from "react-icons/fi";
import { GoGraph } from "react-icons/go";
import { RxTarget } from "react-icons/rx";

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

const iconMap: any = {
  briefcase: FiBriefcase,
  calendar: RxTarget,
  graph: GoGraph,
  chartPie: FiUserCheck,
};

export default function IntroductionOfPms() {
  return (
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
            The proprietary AAID (Advanced Algorithms for Investment Decisions)
            system continuously analyzes over 1,500 companies across 170+
            parameters. This data-driven approach removes emotional biases from
            investment decisions, allowing the portfolio to adapt dynamically to
            changing market conditions and capture opportunities across market
            cycles.
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
  );
}
