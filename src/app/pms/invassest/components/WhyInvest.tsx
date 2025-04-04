import React from "react";

export default function WhyInvest() {
  return (
    <div className="container mx-auto p-4 lg:p-16 space-y-4 ">
      <h2 className="text-3xl font-bold text-center text-[#0A2B58]">
      Why Invest in INVasset Growth PMS with Wealth1
      </h2>
      <p className="mt-4 text-gray-600 text-center leading-relaxed mb-4">
        Wealth1 offers investors direct access to top-tier PMS strategies like
        INVasset PMS, combined with investor-first service and support.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {[
          {
            title: "Exclusive Access to Top PMS & AIFs",
            description: "Gain access to India's leading investment products.",
          },
          {
            title: "Expert Guidance & Support",
            description:
              "Our team helps investors navigate their PMS investment journey.",
          },
          {
            title: "Comprehensive Product Comparisons",
            description:
              "Compare multiple PMS strategies, including INVasset PMS, before making an investment.",
          },
          {
            title: "Seamless Investment Process",
            description:
              "Wealth1 ensures a hassle-free experience in investing with INVasset PMS.",
          },
          {
            title: "Regular Portfolio Updates & Insights",
            description:
              "Stay updated with performance reports and fund manager insights.",
          },
          {
            title: "Dedicated Relationship Manager",
            description:
              "Get personalized support throughout your investment journey.",
          },
        ].map((data, index) => (
          <div key={index} className="border border-gray-300 rounded-2xl shadow p-6">
            <h3 className="text-xl text-[#0A2B58] mb-4 font-semibold">{data?.title}</h3>
            <p className="text-sm text-gray-600">{data?.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
