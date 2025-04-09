"use client";
import React from "react";
import FlowButton from "./FlowButton";
import Image from "next/image";

export default function HeroSection2() {
  return (
    <div className="relative w-full  min-h-screen overflow-hidden bg-gradient-to-r from-[#B28C3D]/30 via-[#B28C3D]/20 to-[#B28C3D]/10">
      {/* Background Video (Layer 1) */}
      {/* <video
        className="absolute inset-0 w-full h-full object-cover z-10"
        src="/bgvideo.mp4"
        autoPlay
        muted
        loop
        playsInline
      /> */}

      {/* Black Overlay (Layer 2) */}
      {/* <div className="absolute inset-0 bg-black opacity-80 z-20"></div> */}

      {/* Foreground Content (Layer 3) */}
      <div className="relative z-30 max-w-7xl mx-auto min-h-screen flex flex-col items-center justify-center text-white px-4">
        <div className="flex items-start gap-4 p-4 lg:px-16 pt-32">
          <div className="w-full lg:w-1/2 h-full  pb-10">
            <p className="p-1 mb-4 text-sm font-medium border border-[#B28C3D]/10 bg-[#B28C3D]/10 rounded-full w-fit mr-auto px-4 text-[#0A2B58] bg-opacity-60 backdrop-blur-sm">
              Wealth1 - Your PMS and AIF Partner
            </p>
            <h2 className="capitalize text-4xl text-left w-full lg:w-4/5 mr-auto font-bold text-[#0A2B58] mb-4">
              India&apos;s Premier Alternative Investments Platform
            </h2>
            <p className="text-base text-[#0A2B58] mb-4  text-left w-full lg:w-4/5 mr-auto">
              Discover curated PMS and AIF opportunities with Wealth1&apos;s
              expert guidance in Portfolio Management Services and Alternative
              Investment Funds.
            </p>
            <div className="flex justify-start items-center mr-auto gap-4">
              <FlowButton>Explore Alternative Investments</FlowButton>
            </div>
          </div>
          <div className="w-full lg:w-1/2 overflow-hidden roundedx shadow-2xl">
            <Image
              src={"/assets/heronew.png"}
              alt={""}
              width={1600}
              height={900}
              className="object-cover hover:scale-101  transition-all ease-in-out duration-300 object-center w-full h-full m-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
