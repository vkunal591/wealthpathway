import React from "react";

export default function WhyInvest() {
  return (
    <div className="container mx-auto px-6 lg:p-16 lg:pt-0 space-y-4 ">
      <h2 className="text-3xl font-bold text-center text-blue-900">
        Why Invest in Stallion PMS with Wealth1?
      </h2>
      <p className="mt-4 text-gray-600 text-center leading-relaxed mb-4">
        Wealth1 is a trusted distributor for PMS and AIFs in India, offering
        investors access to the best Portfolio Management Services like Stallion
        PMS.
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
              "Compare multiple PMS strategies, including Stallion PMS, before making an investment.",
          },
          {
            title: "Seamless Investment Process",
            description:
              "Wealth1 ensures a hassle-free experience in investing with Stallion PMS.",
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
            <h3 className="text-xl text-blue-900 mb-4 font-semibold">{data?.title}</h3>
            <p className="text-sm text-gray-600">{data?.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
