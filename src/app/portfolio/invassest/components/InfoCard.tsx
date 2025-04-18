"use client";

import React, { useEffect, useState, useRef } from "react";
import { CiCalendar } from "react-icons/ci";
import { BsGraphUpArrow } from "react-icons/bs";
import { PiBriefcaseThin } from "react-icons/pi";
import { VscGraphLine } from "react-icons/vsc";
import { motion, useInView } from "framer-motion";

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
  const [updateData, setUpdateData] = useState<any>();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const updateValuesFromTitles = (baseData: any, titleData: any): InfoItem[] => {
    return baseData.map((item: any, index: number) => ({
      ...item,
      value: titleData?.[index]?.title || item.value,
    }));
  };

  useEffect(() => {
    const newData = updateValuesFromTitles(data, contentData);
    setUpdateData(newData);
  }, [contentData]);

  return (
    <div
      ref={ref}
      className={`max-w-7xl m-auto p-4 lg:p-16 lg:pb-0 text-blue-900 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"
      >
        {updateData &&
          updateData.map((item: InfoItem, index: number) => {
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
      </motion.div>
    </div>
  );
}
