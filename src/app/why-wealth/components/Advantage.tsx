import Image from "next/image";
import React from "react";

export default function Advantage() {
  const content = [
    {
      title: "Risk Management",
      description: "Advanced risk assessment and proactive portfolio protection",
      image: "/secure2.png",
    },
    {
      title: "Cost Efficiency",
      description: "Transparent pricing with no hidden fees",
      image: "/doller.png",
    },
    {
      title: "Exclusive Access",
      description: "Premium investment opportunities and expert network",
      image: "/blockchain.png",
    }
  ];
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16 ">
      <h2 className="capitalize text-4xl text-center  font-semibold text-gray-700 mb-8">
        Superior Performance
      </h2>
      <p className="text-base text-gray-500 mb-8 font-semibold text-center w-full">
        Data-driven strategies that consistently outperform traditional
        approaches
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {content &&
          content.map((data: any, index: any) => (
            <div
              key={index}
              className="hover:shadow-xl transition-all ease-in-out p-4 py-6 relative"
            >
              <Image
                src={data?.image || `/icon${index}.png`}
                width={900}
                height={900}
                alt=""
                className="w-16 h-16 mb-4 m-auto filter  invert-25"
              />
              <h2 className="text-lg font-bold mb-3 text-center text-gray-700">
                {data?.title}
              </h2>
              <p className="text-sm text-center text-gray-500">{data?.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
