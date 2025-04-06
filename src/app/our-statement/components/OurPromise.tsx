import Image from "next/image";
import React from "react";

export default function OurPromise() {
  const data = [
    {
      image: "/assets/selection.png",
      value: "₹10,000 cr+",
      label: "100% Unbiased Selection Process",
    },
    {
      image: "/assets/aiana.png",
      value: "20.48% TWRR",
      label: "Rigorous Fund Analytics & Research",
    },
    {
      image: "/assets/protfoliotracking.png",
      value: "0% Fixed Fee",
      label: "Personalized Portfolio Matching",
    },
    {
      image: "/assets/support.png",
      value: "0% Fixed Fee",
      label: "Proactive Support Through Our Investor Desk",
    },
  ];
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16 lg:pb-0  text-blue-900">
      <h2 className="capitalize text-5xl text-center  font-bold text-[#0A2B58]  mb-4">
        Our Promise
      </h2>
      <p className="text-base text-[#0A2B58] mb-4 font-semibold text-center w-full lg:w-4/5 m-auto">
        <span className="text-primary">{"  Unbiased"}</span>,
        <span className="text-primary">{"  Uncompromised"}</span>,
        <span className="text-primary">{"  Unmatched"}</span>
      </p>
      <div className="w-full flex items-center justify-center mb-8">
        <span className="bg-primary h-1 w-20 inline-block m-auto "></span>
      </div>
      <p className="text-base text-gray-500 mb-4 text-center w-full lg:w-4/5 m-auto">
        We are not here to push products. We are here to guide you through a sea
        of options and help you choose the ones truly aligned with your
        financial future.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full lg:w-4/5 m-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 group hover:shadow hover:scale-105 transition-all ease-in-out  rounded  p-4 py-8 w-full h-auto  flex flex-col items-center justify-center"
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
    </div>
  );
}
