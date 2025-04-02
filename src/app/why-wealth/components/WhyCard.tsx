import Image from "next/image";
import React from "react";

const  content = [
  {
    name : "Investor-First Approach",
    desc : "Experience personalized support and guidance throughout your investment journey with our dedicated relationship managers.",
    image : "/first-approch.webp"
  },
  {
    name : "AI-Powered Analytics",
    desc : "Leverage cutting-edge artificial intelligence for real-time market analysis and portfolio optimization.",
    image : "/ai-power.webp"
  },
  {
    name : "Data-Driven Performance",
    desc : "Make informed decisions backed by sophisticated analytics and comprehensive market insights.",
    image : "/data-driven.webp"
  }
]

export default function WhyCard() {
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16 ">
      <h2 className="capitalize text-4xl  font-semibold text-gray-700 mb-8">
        Why Wealth 1
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {
          content && content.map((data: any, index: any) => (
            <div
              key={index}
              className="border border-gray-300 text-center shadow hover:shadow-2xl p-4 py-6 "
            >
              <Image
                src={data?.image || '/icon1.png'}
                width={900}
                height={900}
                alt=""
                className="w-32 h-32 mb-4 m-auto  "
              />
              <h2 className="text-lg font-bold mb-3 text-gray-700">
                {data?.name}
              </h2>
              <p className="text-sm text-gray-500">
              {data?.desc}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
