"use client"
import React, { useEffect, useState } from "react";
import { CiCalendar } from "react-icons/ci";
import { BsGraphUpArrow } from "react-icons/bs";
import { PiBriefcaseThin } from "react-icons/pi";
import { VscGraphLine } from "react-icons/vsc";

const iconMap: Record<string, React.ElementType> = {
  briefcase: PiBriefcaseThin,
  calendar: CiCalendar,
  graph: BsGraphUpArrow,
  chartPie: VscGraphLine,
};

interface InfoItem {
  icon: keyof typeof iconMap | React.ElementType;
  label: string;
  value: string;
}

interface InfoCardProps {
  contentData?: any;
  data?: InfoItem[];
  className?: string;
  cardClassName?: string;
}

export default function InfoCard({
  contentData,
  data = [
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
  ],
  className = "",
  cardClassName = "",
}: InfoCardProps) {
  type Item = {
    icon: string;
    label: string;
    value: string;
  };

  // type TitleItem = {
  //   title: string;
  // };
  const [updateData, setUpdateData] = useState<any>();
  const updateValuesFromTitles = (baseData: any, titleData: any): Item[] => {
    return baseData.map((item: any, index: any) => ({
      ...item,
      value: titleData[index]?.title || "", // fallback to empty if not enough titles
    }));
  };

  useEffect(() => {
    const newData: any = updateValuesFromTitles(data, contentData);
    setUpdateData(newData);
  }, []);

  return (
    <div
      className={`max-w-7xl m-auto p-4 lg:p-16 lg:pb-0 text-blue-900 ${className}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        {updateData && updateData.map((item: any, index: any) => {
          const IconComponent =
            typeof item.icon === "string" ? iconMap[item.icon] : item.icon;

          return (
            <div
              key={index}
              className={`border border-gray-300 shadow rounded-xl p-4 w-full h-auto flex flex-col items-center justify-start ${cardClassName}`}
            >
              <div className="w-full flex justify-start mb-2">
                {IconComponent && (
                  <IconComponent className="text-3xl text-[#B28C3D]" />
                )}
              </div>
              <div className="text-left w-full">
                <p className="text-sm text-gray-500">{item.label}</p>
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
