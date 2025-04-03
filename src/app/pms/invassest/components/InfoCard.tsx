import React from "react";
import { CiCalendar } from "react-icons/ci";
import { BsGraphUpArrow } from "react-icons/bs";
import { PiBriefcaseThin } from "react-icons/pi";
import { VscGraphLine } from "react-icons/vsc";

const iconMap: any = {
  briefcase: PiBriefcaseThin,
  calendar: CiCalendar,
  graph: BsGraphUpArrow,
  chartPie: VscGraphLine,
};

export default function InfoCard() {
  const data = [
    {
      icon: "briefcase",
      value: "Anirudh Garg",
      label: "Fund Manager",
    },
    {
      icon: "calendar",
      value: "April 2022",
      label: "Inception Date",
    },
    {
      icon: "graph",
      value: "Quant-driven Multicap",
      label: "Strategy",
    },
    {
      icon: "chartPie",
      value: "S&P BSE 500 TRI",
      label: "Benchmark",
    },
  ];
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16 text-blue-900">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
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
                <p className="text-sm text-gray-500 ">{item.label}</p>
                <h2 className="text-lg text-[#0A2B58] mb-2 font-semibold">
                  {item.value}
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
