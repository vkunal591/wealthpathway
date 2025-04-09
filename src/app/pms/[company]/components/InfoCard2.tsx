import React from "react";
import { VscGraphLine } from "react-icons/vsc";
import { LuBrainCircuit } from "react-icons/lu";
import { SiMonkeytie } from "react-icons/si";
import { FaUsers } from "react-icons/fa";

const iconMap: any = {
  briefcase: LuBrainCircuit,
  calendar: SiMonkeytie,
  graph: FaUsers,
  chartPie: VscGraphLine,
};

export default function InfoCard2() {
  const data = [
    {
      icon: "briefcase",
      value: "AI-Powered PMS Analytics",
      label: "Wealth1's cutting-edge technology transforms PMS and AIF investment decisions with data-driven insights.",
    },
    {
      icon: "calendar",
      value: "Alternative Investments Access",
      label: "Direct access to top-performing PMS strategies and AIF opportunities through Wealth1's exclusive platform.",
    },
    {
      icon: "graph",
      value: "Expert PMS Guidance",
      label: "Dedicated relationship managers at Wealth1 provide personalized Alternative Investment advisory services.",
    },
  ];
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16 lg:pb-0  text-blue-900">
      <div className="grid grid-cols-1 md:grid-cols-3 shadow mb-8">
        {data.map((item, index) => {
          const IconComponent = iconMap[item.icon];
          return (
            <div
              key={index}
              className="border border-gray-200 group hover:shadow hover:scale-105 transition-all ease-in-out duration-300 bg-white p-4 w-full h-auto m-auto flex flex-col items-center justify-start"
            >
              <div className=" mb-2 w-24 h-24 rounded-full shadow-lg border-14 border-[#0A2B58]/80 border-l-transparent border-b-transparent group-hover:border-t-[#B28C3D]/80 group-hover:border-r-[#0A2B58]/80 group-hover:border-b-[#B28C3D]/80 group-hover:border-l-[#0A2B58]/80 transition-colors ease-in-out duration-300 ">
                <div className="shadow-lg rounded-full w-full h-full flex items-center justify-center">
                  {IconComponent && (
                    <IconComponent className="text-3xl text-[#B28C3D]" />
                  )}
                </div>
              </div>
              <div className="text-center w-full">
                <h2 className="text-lg text-[#0A2B58] mb-2 font-semibold">
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
