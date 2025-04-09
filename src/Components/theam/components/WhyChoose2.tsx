import React from "react";
import InvesmentCard from "./InvesmentCard";


const data = [
  {
    icon: "briefcase",
    value: "PMS Investors in India",
    label: "1.9L+",
  },
  {
    icon: "calendar",
    value: "Assets Under Management",
    label: "₹36.6L Cr",
  },
];

export default function WhyChoose2() {
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16 lg:pb-4">
      <div className="flex flex-col items-center justify-between mb-8">
        <p className="p-1 mb-4 text-sm font-medium border border-[#B28C3D]/10 bg-[#B28C3D]/10 rounded-full w-fit  px-4 text-[#0A2B58] ">
          Why Choose PMS with Wealth1
        </p>
        <h2 className="capitalize w-full lg:w-3/5 m-auto text-xl lg:text-4xl text-center   font-bold text-[#0A2B58] mb-4">
          Leading the Alternative Investments Revolution
        </h2>
        <p className="text-sm text-gray-500 ">
          {
            "Experience the evolution of sophisticated investing with Wealth1's PMS and AIF solutions"
          }
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:w-4/5 m-auto gap-4 ">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="border border-gray-200 group hover:shadow hover:scale-105 transition-all ease-in-out duration-300 bg-white p-4 w-full h-auto m-auto flex flex-col items-center justify-center"
            >
              <div className=" mb-2 h-16 rounded-full group-hover:borde group-hover:border-t-[#B28C3D]/50 group-hover:border-r-[#0A2B58]/50 group-hover:border-b-[#B28C3D]/50 group-hover:border-l-[#0A2B58]/50 transition-colors ease-in-out duration-300 ">
                <div className=" w-full h-full flex items-center justify-center">
                  {/* {IconComponent && (
                    <IconComponent className="text-3xl text-[#B28C3D]" />
                  )} */}
                  <p className="text-3xl text-primary ">{item.label}</p>
                </div>
              </div>
              <div className="text-center w-full">
                <h2 className="text-lg text-[#0A2B58] mb-2 font-semibold">
                  {item.value}
                </h2>
              </div>
            </div>
          );
        })}
      </div>
      <InvesmentCard />
    </div>
  );
}
