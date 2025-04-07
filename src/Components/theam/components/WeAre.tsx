import React from "react";
import FlowButton from "./FlowButton";
import ChangeTextColor from "@/app/components/ChangeTextColor";
import NumberCounter from "./NumberCounter";
import TextNavigator from "./TextNavigator";

export default function WeAre() {
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16 lg:pb-4">
      <div className="grid grid-cols-1  gap-4 items-start">
        <div className="text-center">
          <p className="p-1 mb-2 text-xs m-auto font-semibold border border-[#B28C3D]/10 bg-[#B28C3D]/10 rounded-full w-fit  px-4 text-[#0A2B58] ">
            Wealth1 Premium PM
          </p>
          <h2 className="text-2xl mb-4 font-semibold text-[#0A2B58]">
            Unlocking Alpha Through PMS & AIF
          </h2>

          <ChangeTextColor
            className="text-xs text-cente m-auto mb-4"
            text=" Wealth1 leads India's Alternative Investments revolution, guiding discerning investors through their wealth creation journey with PMS and AIF solutions. <br> Our expertise in Portfolio Management Services (PMS) and Alternative Investment Funds (AIF) combines deep market insights with AI-driven strategies. <br> At Wealth1, we remain committed to delivering exceptional Alternative Investment solutions that preserve and grow wealth across generations."
          />

          <FlowButton>Learn More</FlowButton>
        </div>
        {/* <div className="self-start lg:col-span-2 border-l p-6 rounded-md">
          <span className="w-full text-cente pl-6 ">
            <NumberCounter to={30} />
          </span>
          <h2 className="text-[10px] font-semibold text-[#0A2B58]">
            Years of Financial Planning Expertise
          </h2>
          <hr className="my-6 border border-gray-200" />
          <TextNavigator />
        </div> */}
      </div>
    </div>
  );
}
