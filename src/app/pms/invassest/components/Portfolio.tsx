import React from "react";
import { FiDollarSign } from "react-icons/fi";
import { GoGraph } from "react-icons/go";
import { LuBuilding, LuUsersRound } from "react-icons/lu";

export default function Portfolio() {
  const data3 = {
    title: "Portfolio Composition & Strategy",
    description:
      " INVasset PMS follows a structured and modular portfolio design that adapts to market conditions through algorithmic signals.",
    label: "Portfolio Approach",
    content: [
      {
        label: "Core Holdings",
        value: "40-60%",
      },
      {
        label: "Opportunistic Bets",
        value: "40-60%",
      },
      {
        label: "Defensive Shields",
        value: "Remaining %",
      },
    ],
  };

  const data2 = [
    {
      icon: "briefcase",
      value: "Financials",
    },
    {
      icon: "calendar",
      value: "Capital Goods",
    },
    {
      icon: "graph",
      value: "Pharma & Healthcare",
    },
    {
      icon: "graph",
      value: "Digital/Tech Disruptors",
    },
  ];

  const iconMap: any = {
    briefcase: LuBuilding,
    calendar: FiDollarSign,
    graph: LuUsersRound,
    chartPie: GoGraph,
  };
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16">
      <h2 className="capitalize text-3xl text-center  font-bold text-[#B28C3D] mb-4">
        Portfolio Allocation
      </h2>
      <p className="text-base text-gray-500 mb-6 font-semibold text-center w-full lg:w-4/5 m-auto">
        Stallion PMS invests in a balanced mix of industry leaders and emerging
        monopolies to ensure sustainable returns.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="shadow-lg border py-4 pb-8 border-gray-300 rounded-2xl">
          <h3 className="font-semibold text-xl px-4 text-gray-800">
            Portfolio Composition
          </h3>
          {data3?.content?.map((content: any, index: any) => (
            <p
              key={index}
              className="flex justify-between items-center relative text-sm text-gray-900 p-4 py-5 border-b border-gray-100"
            >
              <span>{content?.label} </span>
              <span className="text-[#0A2B58]">{content?.value}</span>
              <span className="w-11/12 left-1/2 -translate-x-1/2 bg-gray-800/10 rounded-full  absolute bottom-0 z-[500] h-2 ">
                <span className="w-3/5 h-2 bg-[#B28C3D] absolute rounded-full"></span>
              </span>
            </p>
          ))}
        </div>
        <div className="p-4 text-gray-900 border border-gray-300 rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-4">Sector Allocation </h3>
          <div className="grid grid-cols-2 gap-4">
            {data2.map((item, index) => {
              const IconComponent = iconMap[item.icon];
              return (
                <div
                  key={index}
                  className="p-1 w-full h-auto flex items-center  justify-center gap-x-2"
                >
                  <div className="flex justify-start rounded-full [#B28C3D]/10 p-1.5">
                    {IconComponent && (
                      <IconComponent className="text-xl text-[#B28C3D]" />
                    )}
                  </div>
                  <div className="text-left w-full">
                    <h2 className="text-sm text-[#0A2B58] font-semibold">
                      {item.value}
                    </h2>
                  </div>
                </div>
              );
            })}
          </div>
          <hr className="border-gray-300 my-4" />
          <p className="text-gray-400 text-xs">
            *Stock selection based on 170+ algorithmic filters across technical,
            fundamental, and sentiment metrics.
          </p>
        </div>
      </div>
    </div>
  );
}
