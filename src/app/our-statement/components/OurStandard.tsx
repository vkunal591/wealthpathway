import Image from "next/image";
import React from "react";

export default function OurStandard() {
  const data = [
    {
      image: "/assets/transparent.png",
      value: "₹10,000 cr+",
      label: "India's Most Transparent PMS & AIF Marketplace",
    },
    {
      image: "/assets/aipower.png",
      value: "20.48% TWRR",
      label: "AI-Powered Investment Comparisons",
    },
    {
      image: "/assets/support.png",
      value: "0% Fixed Fee",
      label: "Human Advisory + Digital Simplicity",
    },
    {
      image: "/assets/dedicated.png",
      value: "0% Fixed Fee",
      label: "Seamless Onboarding & Dedicated Relationship Managers",
    },
  ];
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16  text-blue-900">
      <h2 className="capitalize text-4xl text-center  font-semibold text-[#B28C3D] mb-8">
        Why Wealth1 Stands Apart
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 w-full lg:w-3/5 m-auto ">
        {data.map((item, index) => (
          <div
            key={index}
            className="border border-[#B28C3D]/50  shadow rounded  p-4 w-full h-auto  flex flex-col items-center justify-center"
          >
            <div className="w-full mb-4">
              <Image
                src={item?.image || "/logo.png"}
                width={900}
                height={900}
                alt=""
                className="object-contain m-auto w-12 h-12 filter-gold object-center"
              />
            </div>
            <div className="text-center">
              {/* <h2 className="text-2xl text-gray-700 mb-2 font-semibold">
                {item?.value}
              </h2> */}
              <p className="text-base text-[#0A2B58] mb-4">{item?.label}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-base text-[#0A2B58] mb-8 font-semibold text-center w-full lg:w-4/5 m-auto">
        We are Wealth1&apos;s first AI-led PMS & AIF distribution platform built
        around investor convenience, confidence, and clarity.
      </p>
    </div>
  );
}
