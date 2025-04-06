import React from "react";
import { LuTarget, LuUser } from "react-icons/lu";
import { GoLock } from "react-icons/go";

const iconMap: any = {
  briefcase: LuUser,
  calendar: GoLock,
  graph: LuTarget,
};

export default function InvesmentCard() {
  const data = [
    {
      icon: "briefcase",
      value: "Personalization",
      label: "Tailored portfolios that align with your goals, risk appetite, and time horizon",
    },
    {
      icon: "calendar",
      value: "Security & Transparency",
      label: "Highly regulated with assets ring-fenced by custodians and stringent governance",
    },
    {
      icon: "graph",
      value: "Aligned Interests",
      label: "High-conviction strategies executed by dedicated experts focused on long-term wealth creation",
    }
  ];
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-10 lg:pb-4 text-blue-900">
      <div className="grid grid-cols-1 md:grid-cols-3 shadow mb-8">
        {data.map((item, index) => {
          const IconComponent = iconMap[item.icon];
          return (
            <div
              key={index}
              className="border border-gray-200 group hover:shadow hover:bg-[#0A2B58] hover:scale-105 transition-all ease-in-out duration-300 bg-white p-4 w-full h-auto m-auto flex flex-col items-center justify-center"
            >
              <div className=" mb-2 w-14 h-14 rounded-full group-hover:border group-hover:border-t-[#B28C3D]/50 group-hover:border-r-[#0A2B58]/50 group-hover:border-b-[#B28C3D]/50 group-hover:border-l-[#0A2B58]/50 transition-colors ease-in-out duration-300 ">
                <div className=" w-full h-full flex items-center justify-center">
                  {IconComponent && (
                    <IconComponent className="text-3xl text-[#B28C3D] group-hover:text-white" />
                  )}
                </div>
              </div>
              <div className="text-center w-full">
                <h2 className="text-lg text-[#0A2B58] group-hover:text-gray-50 mb-2 font-semibold">
                  {item.value}
                </h2>
                <p className="text-sm text-gray-500 group-hover:text-gray-50 ">{item.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
