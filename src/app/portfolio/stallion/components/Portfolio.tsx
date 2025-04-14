import React from "react";
import { FiDollarSign } from "react-icons/fi";
import { GoGraph } from "react-icons/go";
import { LuBuilding, LuUsersRound } from "react-icons/lu";

export default function Portfolio() {
  const data3 = {
    title: "Performance Of Stallion PMS",
    description:
      "  Stallion PMS has consistently delivered superior returns compared to traditional investment options. Below is the historical performance as of December 31, 2024.",
    label: " Stallion PMS Returns",
    content: [
      {
        label: "Proven Monopolies",
        value: "40-60%",
      },
      {
        label: "Emerging Monopolies",
        value: "40-60%",
      },
      {
        label: "Special Situations",
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
      value: "Consumer Tech",
    },
    {
      icon: "graph",
      value: "Consumer",
    },
    {
      icon: "graph",
      value: "Pharma",
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
      <h2 className="capitalize text-3xl text-center  font-bold text-blue-900 mb-4">
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
              <span className="text-blue-900">{content?.value}</span>
              <span className="w-11/12 left-1/2 -translate-x-1/2 bg-gray-800/10 rounded-full  absolute bottom-0 z-[500] h-2 ">
                <span className="w-3/5 h-2 bg-blue-900 absolute rounded-full"></span>
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
                  <div className="flex justify-start rounded-full bg-blue-900/10 p-1.5">
                    {IconComponent && (
                      <IconComponent className="text-xl text-blue-900" />
                    )}
                  </div>
                  <div className="text-left w-full">
                    <h2 className="text-sm text-blue-900 font-semibold">
                      {item.value}
                    </h2>
                  </div>
                </div>
              );
            })}
          </div>
          <hr className="border-gray-300 my-4" />
          <p className="text-gray-400 text-xs">
            *Actual allocation percentages may vary based on market conditions
            and fund manager&apos;s discretion.
          </p>
        </div>
      </div>
    </div>
  );
}
