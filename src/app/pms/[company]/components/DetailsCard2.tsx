"use client";
import FlowButton from "@/Components/theam/components/FlowButton";
import React, { useEffect, useState } from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { FiUserCheck } from "react-icons/fi";
import { GoGraph } from "react-icons/go";
import { IoTimerOutline } from "react-icons/io5";
import { LuShieldHalf } from "react-icons/lu";
import { MdCurrencyRupee } from "react-icons/md";
import { SlBadge } from "react-icons/sl";

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
    {
      label: "1 Month	",
      value: "-10.1",
      value2: "-7.7",
    },
    {
      label: "3 Months	",
      value: "-18.9",
      value2: "-12.1",
    },
    {
      label: "6 Months	",
      value: "-15.5",
      value2: "-16.1",
    },
    {
      label: "1 Year	",
      value: "6.2",
      value2: "-0.4",
    },
    {
      label: "2 Years ",
      value: "28.4",
      value2: "17.8",
    },
    {
      label: "3 Years	",
      value: "18.7",
      value2: "12.7",
    },
    {
      label: "Since Inception ",
      value: "30.3",
      value2: "19.0",
    },
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
  type Item = {
    icon: string;
    label: string;
    value: string;
  };

  // type TitleItem = {
  //   title: string;
  // };
  const [updateData, setUpdateData] = useState<any>();
  const [keyFeatureData, setKeyFeatureData] = useState<any>();
  const updateValuesFromTitles = (baseData: any, titleData: any): Item[] => {
    return baseData.map((item: any, index: any) => ({
      ...item,
      value: titleData[index]?.title || "", // fallback to empty if not enough titles
      label: titleData[index]?.description || "", // fallback to empty if not enough titles
    }));
  };

  // Utility to extract a specific range
  const extractRange = <T,>(
    data: T[],
    startIndex: number,
    endIndex: number
  ): T[] => {
    return data.slice(startIndex, endIndex + 1);
  };

  // Example: extract 3rd, 4th, and 5th items (indexes 2 to 4)
  const extractedData: any = data ? extractRange(data, 2, 4) : [];

  useEffect(() => {
    const newData: any = updateValuesFromTitles(
      baseData,
      extractedData && extractedData[1]?.contents
    );
    const newData2: any = updateValuesFromTitles(
      data2,
      extractedData && extractedData[2]?.contents
    );
    console.log(newData2,"sadwfghjkul")
    setUpdateData(newData);
    setKeyFeatureData(newData2);
  }, []);
  const sections = [
    {
      id: extractedData && extractedData[0]?.subTitle,
      title: extractedData && extractedData[0]?.title,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          <div className="self-start">
            <h2 className="text-2xl font-bold text-[#0A2B58]">
              {extractedData && extractedData[0]?.title}
            </h2>
            <p className="mt-4 text-gray-600 text-justify leading-relaxed">
              {extractedData && extractedData[0]?.description}
            </p>
          </div>
          <div className="self-start shadow p-6 rounded-md">
            <h2 className="text-xl font-semibold text-[#0A2B58]">
              Investment Focus
            </h2>
            <ul className="mt-4 space-y-2 text-gray-600">
              {extractedData &&
                extractedData[0]?.contents?.map((data: any, index: any) => (
                  <li key={index} className="flex items-center gap-2">
                    <BsCheck2Circle className="text-[#B28C3D] text-2xl" />
                    {data?.title}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: extractedData && extractedData[1]?.subTitle,
      title: extractedData && extractedData[1]?.title,
      content: (
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-[#0A2B58]">
              {extractedData && extractedData[0]?.title}
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed mb-4">
              {extractedData && extractedData[1]?.description}
            </p>
            <div className="rounded-2xl hidden bg-[#B28C3D]/30 p-4">
              <h3 className="text-xl font-bold text-[#0A2B58]">
                INVasset&apos;s Strategic Edge
              </h3>
              <p className="mt-2 text-gray-600">
                The proprietary AAID (Advanced Algorithms for Investment
                Decisions) system continuously analyzes over 1,500 companies
                across 170+ parameters. This data-driven approach removes
                emotional biases from investment decisions, allowing the
                portfolio to adapt dynamically to changing market conditions and
                capture opportunities across market cycles.
              </p>
            </div>
          </div>
          <div className="shadow p-6 rounded-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Investment Focus
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {updateData &&
                updateData?.map((item: any, index: any) => {
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
                        <h2 className="text-sm text-[#0A2B58] mb-2 font-semibold">
                          {item.value}
                        </h2>
                        <p className="text-xs text-gray-500 ">{item.label}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: extractedData && extractedData[2]?.subTitle,
      title: extractedData && extractedData[2]?.subTitle,
      content: (
        <div className="p-6 rounded-md">
          <h2 className="text-xl font-semibold text-[#0A2B58] mb-4">
            {extractedData && extractedData[2]?.title}
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {keyFeatureData && keyFeatureData.map((item: any, index: any) => {
              const IconComponent = iconMap2[item.icon];
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
                    <h2 className="text-lg text-[#0A2B58] mb-2 font-semibold">
                      {item?.value}
                    </h2>
                    {/* <p
                      className={`font-bold text-[#0A2B58] ${
                        index === 2 ? "text-sm" : " text-2xl"
                      } `}
                    >
                      {item?.value1}
                    </p> */}
                    <p className="text-xs text-gray-500 ">{item?.label}</p>

                    <p className="text-sm font-semibold text-gray-500 ">
                      {item?.label2}
                    </p>
                    <p className="text-xs text-gray-500 ">{item?.value2}</p>
                    <p className="text-sm font-semibold text-gray-500 ">
                      {item?.label3}
                    </p>
                    <p className="text-xs text-gray-500 ">{item?.value3}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ),
    },
    {
      id: extractedData && extractedData[3]?.subTitle,
      title: "Performance",
      content: (
        <div>
          <div className="mb-5 text-center">
            <h2 className="text-3xl font-bold text-[#0A2B58]">
              {data3?.title}
            </h2>
            <p className="mt-4 w-4/5 m-auto text-gray-600 leading-relaxed">
              {data3?.description}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 mb-4 ">
            <div className="rounded-2xl shadow-lg overflow-hidden">
              <h2 className="bg-[#B28C3D]  text-white p-4 text-left">
                {data3?.label}
              </h2>
              <p className="grid grid-cols-3 gap-2 text-sm text-gray-900 p-4 border-b border-gray-100">
                <span>{"Period"} </span>
                <span className="text-[#0A2B58]">{"Portfolio"}</span>
                <span className="text-[#0A2B58]">{"BSE 500 TRI"}</span>
              </p>
              {data3?.content?.map((content: any, index: any) => (
                <p
                  key={index}
                  className="grid grid-cols-3 gap-2 text-sm text-gray-900 p-4 border-b border-gray-200"
                >
                  <span className="font-semibold">{content?.label} </span>
                  <span
                    className={`${
                      Number(content?.value) > 0
                        ? "text-[#B28C3D]"
                        : "text-[#0A2B58]"
                    }`}
                  >
                    {Number(content?.value).toFixed(1)} %
                  </span>

                  <span
                    className={`${
                      Number(content.value2) > 0
                        ? "text-[#B28C3D]"
                        : "text-[#0A2B58]"
                    }`}
                  >
                    {content?.value2}
                    {" %"}
                  </span>
                </p>
              ))}
            </div>
          </div>
          <p className="text-left text-xs text-gray-500 ml-5 w-full">
            Disclaimer *
          </p>
          <p className="text-left text-xs text-gray-500 ml-5 w-full">
            Returns Up To one year are absolute and above one year are CAGR
          </p>
          <p className="text-left text-xs text-gray-500 ml-5 w-full">
            Data as pulled from SEBI. Data as of Feb 2025.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16 lg:pb-0 text-[#0A2B58]">
      {/* Navigation Buttons */}
      <div className="flex flex-col lg:flex-row space-y-2 lg:space-x-6 pb-4">
        {extractedData.map((section: any, index: any) => (
          <FlowButton
            key={index}
            onClick={() => setActiveSection(section.subTitle)}
          >
            <p
              className={` rounded-full font-semibold transition-all duration-300 outline-0  hover:from-[#B28C3D]/90 hover:via-[#B28C3D]/80 hover:to-[#B28C3D]/90 hover:text-white transition-color ease-in-out ${
                activeSection === section.subTitle
                  ? "bg-gradient-to- from-[#B28C3D] via-[#B28C3D]/95 to-[#B28C3D]/50  text-[#B28C3D] font-bold shadow-md"
                  : "bg-gradient-to- from-[#B28C3D]/20 via-[#B28C3D]/20 to-[#B28C3D]/10  border-gray-50 text-white"
              }`}
            >
              {section.subTitle}
            </p>
          </FlowButton>
        ))}
      </div>

      {/* Dynamic Content */}
      <div className="bg-transparent lg:p-8 mt-4 ">
        {sections.find((section: any) => section.id === activeSection)?.content}
      </div>
    </div>
  );
}
