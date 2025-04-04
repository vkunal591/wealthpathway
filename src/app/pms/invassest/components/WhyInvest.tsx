import React from "react";

export default function WhyInvest() {
  return (
    <div className="container mx-auto p-4 lg:p-16 space-y-4 ">
      <h2 className="text-3xl font-bold text-center text-[#0A2B58]">
        Why Invest in INVasset PMS with Wealth1
      </h2>
      <p className="mt-4 text-gray-600 text-center leading-relaxed mb-4">
        Wealth1 offers investors direct access to top-tier PMS strategies like
        INVasset PMS, combined with investor-first service and support.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {[
          {
            title: "Trusted Platform",
            description:
              "Access premier PMS & AIF strategies through a trusted distribution platform",
          },
          {
            title: "Transparent Advice",
            description:
              "Receive unbiased guidance and comprehensive strategy comparisons",
          },
          {
            title: "Seamless Experience",
            description:
              "Enjoy easy onboarding, documentation, and dedicated relationship management",
          },
        ].map((data, index) => (
          <div
            key={index}
            className="border border-[#B28C3D]/20 bg-[#B28C3D]/5 rounded-2xl shadow p-6"
          >
            <h3 className="text-xl text-[#0A2B58] mb-4 font-semibold">
              {data?.title}
            </h3>
            <p className="text-sm text-gray-600">{data?.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
