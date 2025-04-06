import Image from "next/image";
import React from "react";
import { GiBottomRight3dArrow } from "react-icons/gi";

export default function InvestmentJourney() {
  const content = [
    {
      title: "Selection",
      description: "Choose from curated investment options",
      image: "/assets/selection.png",
    },
    {
      title: "Consultation",
      description: "Get expert guidance from our team",
      image: "/assets/consultation.png",
    },
    {
      title: "Portfolio Tracking",
      description: "Monitor your investments in real-time",
      image: "/assets/protfoliotracking.png",
    },
    {
      title: "Ongoing Support",
      description: "Receive continuous assistance and updates",
      image: "/assets/support.png",
    },
  ];
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16  lg:pb-4">
      <h2 className="capitalize text-4xl text-center  font-semibold text-[#0A2B58] mb-4">
        Your Investment Journey <br /> With Us
      </h2>
      <p className="text-base text-gray-500 mb-8 text-center w-full">
        A streamlined process focused on your success
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
                className="w-10 h-10 m-auto mb-4 filter-gold "
              />
              <GiBottomRight3dArrow
                className={`absolute right-0 rotate-[-45deg] ${
                  index === 3 ? "hidden" : ""
                }`}
              />
              <h2 className="text-lg font-bold mb-3 text-[#0A2B58] ">
                {data?.title}
              </h2>
              <p className="text-sm text-gray-500">{data?.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
