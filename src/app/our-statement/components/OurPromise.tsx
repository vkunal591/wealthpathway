import Image from "next/image";
import React from "react";

export default function OurPromise() {
  const data = [
    {
      image: "/rupee.svg",
      value: "₹10,000 cr+",
      label: "100% Unbiased Selection Process",
    },
    {
      image: "/grow.svg",
      value: "20.48% TWRR",
      label: "Rigorous Fund Analytics & Research",
    },
    {
      image: "/percent.svg",
      value: "0% Fixed Fee",
      label: "Personalized Portfolio Matching",
    },
    {
      image: "/percent.svg",
      value: "0% Fixed Fee",
      label: "Proactive Support Through Our Investor Desk",
    },
  ];
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16  text-blue-900">
      <h2 className="capitalize text-4xl text-center  font-semibold text-[#B28C3D] mb-8">
        Our Promise
      </h2>
      <p className="text-base text-[#0A2B58] mb-4 font-semibold text-center w-full lg:w-4/5 m-auto">
        Unbiased, Uncompromised, Unmatched
      </p>
      <p className="text-base text-[#0A2B58] mb-4 font-semibold text-center w-full lg:w-4/5 m-auto">
        We are not here to push products. We are here to guide you through a sea
        of options and help you choose the ones truly aligned with your
        financial future.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
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
              <p className="text-base text-[#0A2B58] mb-4">{item?.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
