"use client";
import React from "react";
import FlowButton from "./FlowButton";

export default function HeroSection2() {
  return (
    <div className="relative w-full  min-h-screen overflow-hidden bg-black">
      {/* Background Video (Layer 1) */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-10"
        src="/bgvideo.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Black Overlay (Layer 2) */}
      <div className="absolute inset-0 bg-black opacity-80 z-20"></div>

      {/* Foreground Content (Layer 3) */}
      <div className="relative z-30 max-w-7xl mx-auto min-h-screen flex flex-col items-center justify-center text-white px-4">
        <div className="w-full h-full pt-40 pb-10">
          <p className="p-1 mb-4 text-xs border border-[#B28C3D]/10 bg-white/10 rounded-full w-fit mx-auto px-4 text-gray-50 bg-opacity-60 backdrop-blur-sm">
            Wealth1 - Your PMS and AIF Partner
          </p>
          <h2 className="capitalize text-4xl text-center w-full lg:w-4/5 mx-auto font-bold text-gray-50 mb-4">
            India&apos;s Premier Alternative Investments Platform
          </h2>
          <p className="text-base text-white mb-4  text-center w-full lg:w-4/5 mx-auto">
            Discover curated PMS and AIF opportunities with Wealth1&apos;s
            expert guidance in Portfolio Management Services and Alternative
            Investment Funds.
          </p>
          <div className="flex justify-center items-center mx-auto gap-4">
            <FlowButton>Explore Alternative Investments</FlowButton>
          </div>
        </div>
      </div>
    </div>
  );
}
