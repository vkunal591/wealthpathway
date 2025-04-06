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
    <div className="max-w-7xl m-auto p-4 lg:p-16 lg:pb-0 text-blue-900">
      <h2 className="capitalize text-4xl text-center  font-semibold text-[#0A2B58]  mb-4">
        Our Approach
      </h2>
      <p className="text-base text-[#0A2B58] mb-4 font-semibold text-center w-full lg:w-4/5 m-auto">
        <span className="text-primary">{"  Data-Driven"}</span>,
        <span className="text-primary">{"  People-Focused"}</span>
      </p>
      <div className="w-full flex items-center justify-center mb-8">
        <span className="bg-primary h-1 w-20 inline-block m-auto "></span>
      </div>
      <p className="text-base text-gray-500 mb-4 text-center w-full lg:w-4/5 m-auto">
        While we use advanced technology to analyze portfolios, compare returns,
        and assess risk metrics, we never lose sight of the human behind the
        numbers.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {data.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded group hover:shadow hover:scale-105 transition-all ease-in-out duration-300 p-4 w-full h-44  flex flex-col items-center justify-center"
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
              <p className="text-sm text-[#0A2B58] mb-4">{item?.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
