import React from "react";
import FlowButton from "./FlowButton";
import { BsGraphUpArrow } from "react-icons/bs";
import { CiCalendar } from "react-icons/ci";
import { PiBriefcaseThin } from "react-icons/pi";
import { VscGraphLine } from "react-icons/vsc";

const iconMap: any = {
  briefcase: PiBriefcaseThin,
  calendar: CiCalendar,
  graph: BsGraphUpArrow,
  chartPie: VscGraphLine,
};

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

export default function Success() {
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16 lg:pb-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="p-1 mb-2 text-xs font-semibold border border-[#B28C3D]/10 bg-[#B28C3D]/10 rounded-full w-fit  px-4 text-[#0A2B58] ">
            Step To Success
          </p>
          <h2 className="capitalize text-4xl text-center w-full  m-auto  font-bold text-[#0A2B58] mb-4">
            Transform Your Portfolio with Wealth1
          </h2>
        </div>
        <FlowButton>Schedule A Consultation</FlowButton>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 mb-8">
        {data.map((item, index) => {
          const IconComponent = iconMap[item.icon];
          return (
            <div
              key={index}
              className="group hover:shadow hover:scale-105  bg-white p-4 w-full h-auto m-auto flex flex-col items-start justify-start  hover:borde hover:border-t-[#B28C3D]/50 hover:border-r-[#0A2B58]/50 hover:border-b-[#B28C3D]/50 hover:border-l-[#0A2B58]/50 transition-colors ease-in-out duration-300 "
            >
              <div className=" mb-2 w-full h-16 flex items-center border-b border-gray-300 ">
                <div className=" w-1/5 h-full flex items-center justify-center">
                  {IconComponent && (
                    <IconComponent className="text-3xl text-[#B28C3D]" />
                  )}
                </div>
                <span className="text-xs text-[#0A2B58]">{`Step ${
                  index + 1
                }`}</span>
              </div>
              <div className="text-left w-full px-1">
                <h2 className="text-base text-[#0A2B58] mb-2 font-semibold">
                  {item.value}
                </h2>
                <p className="text-sm text-gray-500 ">{item.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
