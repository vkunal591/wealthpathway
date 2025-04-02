import Image from "next/image";
import React from "react";
import { GiBottomRight3dArrow } from "react-icons/gi";

export default function InvestmentJourney() {
  const content = [
    {
      title: "Selection",
      description: "Choose from curated investment options",
      image:"/selection.webp"
    },
    {
      title: "Consultation",
      description: "Get expert guidance from our team",
      image:"/consultation.webp"
    },
    {
      title: "Portfolio Tracking",
      description: "Monitor your investments in real-time",
      image:"/portfolio.webp"
    },
    {
      title: "Ongoing Support",
      description: "Receive continuous assistance and updates",
      image:"/support.webp"
    },
  ];
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16 ">
      <h2 className="capitalize text-4xl text-center  font-semibold text-gray-700 mb-8">
        Your Investment Journey With Us
      </h2>
      <p className="text-base text-gray-500 mb-8 font-semibold text-center w-full">
        Experience the evolution of sophisticated investing with Wealth1\&apos;s
        PMS and AIF solutions
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {content &&
          content.map((data: any, index: any) => (
            <div
              key={index}
              className="hover:shadow-xl text-center transition-all ease-in-out p-4 py-6 relative"
            >
              <Image
                src={data?.image || `/icon${index}.png`}
                width={900}
                height={900}
                alt=""
                className="w-32 h-32 w-auto m-auto mb-4 "
              />
              <GiBottomRight3dArrow className="absolute right-0 rotate-[-45deg]" />
              <h2 className="text-lg font-bold mb-3 text-gray-700">
                {data?.title}
              </h2>
              <p className="text-sm text-gray-500">{data?.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
