import Image from "next/image";
import React from "react";

export default function OurMission() {
  const data = [
    {
      image: "/data.png",
      value: "₹10,000 cr+",
      label:
        "Deliver data-backed recommendations based on risk, goals, and time horizon.",
    },
    {
      image: "/key.png",
      value: "20.48% TWRR",
      label:
        "Provide direct access to India's top PMS & AIF providers with full transparency.",
    },
    {
      image: "/right.png",
      value: "0% Fixed Fee",
      label:
        "Empower every investor with the right information at the right time through AI-driven tools.",
    },
  ];
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16  text-[#0A2B58]">
      <h2 className="capitalize text-4xl text-center  font-semibold text-[#B28C3D] mb-4">
        Our Mission
      </h2>
      <p className="text-base text-[#0A2B58] mb-4 font-semibold text-center w-full lg:w-4/5 m-auto">
        Elevating Investor Confidence Through Knowledge & Access
      </p>
      <p className="text-base text-[#0A2B58] font-semibold text-center w-full lg:w-4/5 m-auto mb-8">
        Our mission is to bridge the gap between great investment products and
        the investors who deserve them. We aim to
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {data.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 shadow rounded  p-4 w-full h-56  flex flex-col items-center justify-center"
          >
            <div className="w-full mb-4">
              <Image
                src={item?.image || "/logo.png"}
                width={900}
                height={900}
                alt=""
                className="object-contain m-auto w-16 h-16 filter  object-center"
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
