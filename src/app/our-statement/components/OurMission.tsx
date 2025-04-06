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
    <div className="max-w-7xl m-auto p-4 lg:p-16 lg:pb-0  text-[#0A2B58]">
      <h2 className="capitalize text-5xl text-center  font-bold text-[#0A2B58]  mb-4">
        Our Mission
      </h2>
      <p className="text-base text-[#0A2B58] mb-4 font-semibold text-center w-full lg:w-4/5 m-auto">
        Elevating Investor Confidence Through
        <span className="text-primary">{"  Knowledge"}</span>, &
        <span className="text-primary">{"  Access"}</span>,
      </p>
      <div className="w-full flex items-center justify-center mb-8">
        <span className="bg-primary h-1 w-20 inline-block m-auto "></span>
      </div>
      <p className="text-base text-gray-500 text-center w-full lg:w-4/5 m-auto mb-8">
        Our mission is to bridge the gap between great investment products and
        the investors who deserve them. We aim to
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {data.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 hover:shadow hover:scale-105 transition-all ease-in-out divide-purple-300 rounded group p-4 w-full h-56  flex flex-col items-center justify-center "
          >
            <div className="w-full mb-4 ">
              <Image
                src={item?.image || "/logo.png"}
                width={900}
                height={900}
                alt=""
                className="object-contain m-auto w-14 h-14 filter-gold object-center"
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
