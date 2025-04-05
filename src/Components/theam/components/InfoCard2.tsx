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

export default function InfoCard2() {
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
    <div className="max-w-7xl m-auto p-4 lg:p-16 lg:pb-0  text-blue-900">
      <div className="grid grid-cols-1 md:grid-cols-4 shadow mb-8">
        {data.map((item, index) => {
          const IconComponent = iconMap[item.icon];
          return (
            <div
              key={index}
              className="border border-gray-200 group hover:shadow hover:scale-105 transition-all ease-in-out duration-300 bg-white p-4 w-full h-auto m-auto flex flex-col items-center justify-start"
            >
              <div className=" mb-2 w-24 h-24 rounded-full shadow-lg border-14 border-[#0A2B58]/30 border-l-transparent border-b-transparent group-hover:border-t-[#B28C3D]/50 group-hover:border-r-[#0A2B58]/50 group-hover:border-b-[#B28C3D]/50 group-hover:border-l-[#0A2B58]/50 transition-colors ease-in-out duration-300 ">
                <div className="shadow-lg rounded-full w-full h-full flex items-center justify-center">
                  {IconComponent && (
                    <IconComponent className="text-3xl text-[#B28C3D]" />
                  )}
                </div>
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
