import Image from "next/image";
import React from "react";

export default function OurStandard() {
  const data = [
    {
      image: "/rupee.svg",
      value: "₹10,000 cr+",
      label: "India's Most Transparent PMS & AIF Marketplace",
    },
    {
      image: "/grow.svg",
      value: "20.48% TWRR",
      label: "AI-Powered Investment Comparisons",
    },
    {
      image: "/percent.svg",
      value: "0% Fixed Fee",
      label: "Human Advisory + Digital Simplicity",
    },
    {
      image: "/percent.svg",
      value: "0% Fixed Fee",
      label: "Seamless Onboarding & Dedicated Relationship Managers",
    },
  ];
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16  text-blue-900">
      <h2 className="capitalize text-4xl text-center  font-semibold text-gray-700 mb-8">
        Why Wealth1 Stands Apart
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 shadow rounded  p-4 w-full h-auto  flex flex-col items-center justify-center"
          >
            <div className="w-full">
              <Image
                src={item?.image || "/logo.png"}
                width={900}
                height={900}
                alt=""
                className="object-contain m-auto w-20 h-20 object-center"
              />
            </div>
            <div className="text-center">
              {/* <h2 className="text-2xl text-gray-700 mb-2 font-semibold">
                {item?.value}
              </h2> */}
              <p className="text-base text-gray-500 mb-4">{item?.label}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-base text-gray-500 mb-8 font-semibold text-center w-full lg:w-4/5 m-auto">
        We are Wealth1&apos;s first AI-led PMS & AIF distribution platform built
        around investor convenience, confidence, and clarity.
      </p>
    </div>
  );
}
