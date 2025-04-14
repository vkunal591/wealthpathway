"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { BsCheck2Circle } from "react-icons/bs";
import { FiUserCheck } from "react-icons/fi";
import { GoGraph } from "react-icons/go";
import { IoTimerOutline } from "react-icons/io5";
import { LuShieldHalf } from "react-icons/lu";
import { MdCurrencyRupee } from "react-icons/md";
import { SlBadge } from "react-icons/sl";
import FlowButton from "@/Components/theam/components/FlowButton";

const baseData = [
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

const data2 = [
  {
    icon: "briefcase",
    value: "Minimum Investment",
    value1: "₹50 L",
    label: "As per SEBI regulations",
  },
  {
    icon: "calendar",
    value: "Investment Horizon",
    value1: "3-5 Years",
    label: "Recommended minimum period",
  },
  {
    icon: "graph",
    value: "Expected CAGR",
    label: "Expected over long term",
    value1: "18-28% CAGR",
  },
];

const data3 = {
  title: "Performance of INVasset PMS",
  description:
    "INVasset PMS aims to deliver consistent returns through a data-driven approach while actively managing risk. Performance metrics are updated monthly.",
  label: " Performance Metrics",
  content: [
    { label: "1 Month", value: "-10.1", value2: "-7.7" },
    { label: "3 Months", value: "-18.9", value2: "-12.1" },
    { label: "6 Months", value: "-15.5", value2: "-16.1" },
    { label: "1 Year", value: "6.2", value2: "-0.4" },
    { label: "2 Years", value: "28.4", value2: "17.8" },
    { label: "3 Years", value: "18.7", value2: "12.7" },
    { label: "Since Inception", value: "30.3", value2: "19.0" },
  ],
};

const iconMap: any = {
  briefcase: SlBadge,
  calendar: LuShieldHalf,
  graph: GoGraph,
  chartPie: FiUserCheck,
};

const iconMap2: any = {
  briefcase: MdCurrencyRupee,
  calendar: IoTimerOutline,
  graph: GoGraph,
};

export default function DetailsCard({ data }: { data?: any }) {
  const [activeSection, setActiveSection] = useState("overview");
  const [updateData, setUpdateData] = useState<any>();
  const [keyFeatureData, setKeyFeatureData] = useState<any>();

  const updateValuesFromTitles = (baseData: any, titleData: any) => {
    return baseData.map((item: any, index: number) => ({
      ...item,
      value: titleData?.[index]?.title || "",
      label: titleData?.[index]?.description || "",
    }));
  };

  const extractRange = <T,>(data: T[], startIndex: number, endIndex: number): T[] => {
    return data.slice(startIndex, endIndex + 1);
  };

  const extractedData: any = data ? extractRange(data, 2, 4) : [];

  useEffect(() => {
    const newData = updateValuesFromTitles(baseData, extractedData?.[1]?.contents);
    const newData2 = updateValuesFromTitles(data2, extractedData?.[2]?.contents);
    setUpdateData(newData);
    setKeyFeatureData(newData2);
  }, [data]);

  const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    );
  };

  const sections = [
    {
      id: extractedData?.[0]?.subTitle,
      title: extractedData?.[0]?.title,
      content: (
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            <div className="self-start">
              <h2 className="text-2xl font-bold text-[#0A2B58]">{extractedData?.[0]?.title}</h2>
              <p className="mt-4 text-gray-600 text-justify leading-relaxed">
                {extractedData?.[0]?.description}
              </p>
            </div>
            <div className="self-start shadow p-6 rounded-md">
              <h2 className="text-xl font-semibold text-[#0A2B58]">Investment Focus</h2>
              <ul className="mt-4 space-y-2 text-gray-600">
                {extractedData?.[0]?.contents?.map((data: any, index: number) => (
                  <li key={index} className="flex items-center gap-2">
                    <BsCheck2Circle className="text-[#B28C3D] text-2xl" />
                    {data?.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>
      ),
    },
    {
      id: extractedData?.[1]?.subTitle,
      title: extractedData?.[1]?.title,
      content: (
        <AnimatedSection>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-[#0A2B58]">{extractedData?.[1]?.title}</h2>
              <p className="mt-4 text-gray-600 leading-relaxed mb-4">
                {extractedData?.[1]?.description}
              </p>
            </div>
            <div className="shadow p-6 rounded-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Investment Focus</h2>
              <div className="grid grid-cols-2 gap-4">
                {updateData?.map((item: any, index: number) => {
                  const IconComponent = iconMap[item.icon];
                  return (
                    <AnimatedSection key={index}>
                      <div className="border border-gray-300 shadow rounded-xl p-4 flex flex-col">
                        <div className="mb-2">
                          {IconComponent && <IconComponent className="text-3xl text-[#B28C3D]" />}
                        </div>
                        <h2 className="text-sm font-semibold text-[#0A2B58]">{item.value}</h2>
                        <p className="text-xs text-gray-500">{item.label}</p>
                      </div>
                    </AnimatedSection>
                  );
                })}
              </div>
            </div>
          </div>
        </AnimatedSection>
      ),
    },
    {
      id: extractedData?.[2]?.subTitle,
      title: extractedData?.[2]?.title,
      content: (
        <AnimatedSection>
          <div className="p-6 rounded-md">
            <h2 className="text-xl font-semibold text-[#0A2B58] mb-4">{extractedData?.[2]?.title}</h2>
            <div className="grid grid-cols-3 gap-4">
              {keyFeatureData?.map((item: any, index: number) => {
                const IconComponent = iconMap2[item.icon];
                return (
                  <AnimatedSection key={index}>
                    <div className="border border-gray-300 shadow rounded-xl p-4 flex flex-col">
                      <div className="mb-2">
                        {IconComponent && <IconComponent className="text-3xl text-[#B28C3D]" />}
                      </div>
                      <h2 className="text-lg text-[#0A2B58] font-semibold">{item.value}</h2>
                      <p className="text-xs text-gray-500">{item.label}</p>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </AnimatedSection>
      ),
    },
    {
      id: extractedData?.[3]?.subTitle || "performance",
      title: "Performance",
      content: (
        <AnimatedSection>
          <div>
            <div className="mb-5 text-center">
              <h2 className="text-3xl font-bold text-[#0A2B58]">{data3.title}</h2>
              <p className="mt-4 w-4/5 m-auto text-gray-600 leading-relaxed">
                {data3.description}
              </p>
            </div>
            <div className="rounded-2xl shadow-lg overflow-hidden">
              <h2 className="bg-[#B28C3D] text-white p-4 text-left">{data3.label}</h2>
              <div className="p-4 border-b grid grid-cols-3 text-sm text-gray-900">
                <span>Period</span>
                <span className="text-[#0A2B58]">Portfolio</span>
                <span className="text-[#0A2B58]">BSE 500 TRI</span>
              </div>
              {data3.content.map((item, i) => (
                <div
                  key={i}
                  className="p-4 border-b grid grid-cols-3 text-sm text-gray-900"
                >
                  <span className="font-semibold">{item.label}</span>
                  <span className={`
                    ${Number(item.value) > 0 ? "text-[#B28C3D]" : "text-[#0A2B58]"}`}
                  >
                    {Number(item.value).toFixed(1)} %
                  </span>
                  <span className={`
                    ${Number(item.value2) > 0 ? "text-[#B28C3D]" : "text-[#0A2B58]"}`}
                  >
                    {item.value2} %
                  </span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 ml-5 mt-2">Disclaimer *</p>
            <p className="text-xs text-gray-500 ml-5">
              Returns up to one year are absolute and above one year are CAGR
            </p>
            <p className="text-xs text-gray-500 ml-5">
              Data pulled from SEBI. As of Feb 2025.
            </p>
          </div>
        </AnimatedSection>
      ),
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 lg:p-16">
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-6 pb-4">
        {extractedData.map((section: any, index: number) => (
          <FlowButton
            key={index}
            onClick={() => setActiveSection(section.subTitle)}
          >
            <p className="rounded-full px-4 py-1 capitalize font-semibold text-sm">
              {section.subTitle}
            </p>
          </FlowButton>
        ))}
        <FlowButton onClick={() => setActiveSection("performance")}>
          <p className="rounded-full px-4 py-1 capitalize font-semibold text-sm">
            Performance
          </p>
        </FlowButton>
      </div>
      <div className="mt-4">
        {sections.find((section) => section.id === activeSection)?.content}
      </div>
    </div>
  );
}