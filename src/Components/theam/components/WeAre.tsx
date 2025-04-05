import React from "react";
import FlowButton from "./FlowButton";
import ChangeTextColor from "@/app/components/ChangeTextColor";
import NumberCounter from "./NumberCounter";
import TextNavigator from "./TextNavigator";

export default function WeAre() {
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16 lg:pb-4">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-start">
        <div className="self-start lg:col-span-3">
          <p className="p-1 mb-2 text-xs font-semibold border border-[#B28C3D]/10 bg-[#B28C3D]/10 rounded-full w-fit  px-4 text-[#0A2B58] ">
            Wealth1 Premium PMS
          </p>
          <ChangeTextColor text="INVasset Growth Fund PMS is an Award-Winning, SEBI-registered Quant-based Portfolio Management Service for HNIs & NRIs." />

          <FlowButton>Learn More</FlowButton>
        </div>
        <div className="self-start lg:col-span-2 border-l p-6 rounded-md">
          <span className="w-full text-cente pl-10 ">
            <NumberCounter to={20} />
          </span>
          <h2 className="text-xs font-semibold text-[#0A2B58]">
            Years of Financial Planning Expertise
          </h2>
          <hr className="my-2" />
          <TextNavigator />
        </div>
      </div>
    </div>
  );
}
