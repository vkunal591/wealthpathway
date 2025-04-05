import Image from "next/image";
import React from "react";

export default function OurApproach() {
  const data = [
    {
      image: "/assets/investment.png",
      value: "₹10,000 cr+",
      label: "Gets a dedicated investment guide",
    },
    {
      image: "/assets/compare.png",
      value: "20.48% TWRR",
      label: "Can track and compare funds in real-time",
    },
    {
      image: "/assets/markettrend.png",
      value: "0% Fixed Fee",
      label: "Receives curated insights based on market trends",
    },
  ];
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16  text-blue-900">
      <h2 className="capitalize text-4xl text-center  font-semibold text-[#0A2B58]  mb-4">
        Our Approach
      </h2>
      <p className="text-base text-[#0A2B58] mb-4 font-semibold text-center w-full lg:w-4/5 m-auto">
        Data-Driven, People-Focused
      </p>
      <p className="text-base text-[#0A2B58] mb-4 font-semibold text-center w-full lg:w-4/5 m-auto">
        While we use advanced technology to analyze portfolios, compare returns,
        and assess risk metrics, we never lose sight of the human behind the
        numbers.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {data.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 shadow rounded  p-4 w-full h-56  flex flex-col items-center justify-center"
          >
            <div className="w-full">
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
              <p className="text-sm text-[#0A2B58] mb-4">{item?.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
