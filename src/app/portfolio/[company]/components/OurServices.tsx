import React from "react";
import DetailsCard2 from "./DetailsCard2";

export default function OurServices() {
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16 lg:pb-4">
      <div className="flex items-center justify-start">
        <div>
          <p className="p-1 mb-2 text-xs font-semibold border border-[#B28C3D]/10 bg-[#B28C3D]/10 rounded-full w-fit  px-4 text-[#0A2B58] ">
            Wealth1 Premium PMS
          </p>
          <h2 className="capitalize text-4xl text-center w-full  m-auto  font-bold text-[#0A2B58] mb-4">
            Comprehensive Investment Solutions
          </h2>
        </div>
      </div>

      <DetailsCard2 />
    </div>
  );
}
