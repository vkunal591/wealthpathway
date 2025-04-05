"use client";
import React from "react";
import FlowButton from "./FlowButton";

export default function HeroSection2() {
  return (
    <div className="max-w-7xl m-auto h-auto flex flex-col items-center bg-gradient-to-r from-[#B28C3D]/50 via-[#B28C3D]/30 to-[#B28C3D]/20">
      <div className="w-full h-full pt-40  pb-10">
        <p className="p-1 mb-4 text-xs font-semibold border border-[#B28C3D]/10 bg-[#B28C3D]/10 rounded-full w-fit m-auto px-4 text-[#0A2B58] ">
          Wealth1 Premium PMS
        </p>
        <h2 className="capitalize text-4xl text-center w-full lg:w-4/5 m-auto  font-bold text-[#0A2B58] mb-4">
          INVasset Growth Fund PMS – Quant Derive Portfolio Management Strategy
        </h2>
        <p className="text-base text-dark-primary    mb-4 font-semibold text-center w-full lg:w-4/5 m-auto">
          A data-driven Portfolio Management Service combining market wisdom
          with advanced algorithms for consistent alpha generation and risk
          management.
        </p>
        <div className="flex justify-center items-center m-auto gap-4 ">
          <FlowButton>Start Investing</FlowButton>
        </div>
      </div>
    </div>
  );
}
