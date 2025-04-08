import React from "react";

type WhyInvestItem = {
  title: string;
  description: string;
};

type WhyInvestProps = {
  heading?: string;
  subheading?: string;
  items: WhyInvestItem[];
  columns?: number; // Number of columns in the grid (default is 3 for large screens)
  containerClass?: string;
};

export default function WhyInvest({
  heading = "Why Invest in INVasset Growth PMS with Wealth1",
  subheading = "Wealth1 offers investors direct access to top-tier PMS strategies like INVasset PMS, combined with investor-first service and support.",
  items,
  columns = 3,
  containerClass = "container mx-auto p-4 lg:p-16 space-y-4",
}: WhyInvestProps) {
  return (
    <div className={containerClass}>
      <h2 className="text-3xl font-bold text-center text-[#0A2B58]">{heading}</h2>
      <p className="mt-4 text-gray-600 text-center leading-relaxed mb-4">{subheading}</p>
      <div className={`grid grid-cols-1 lg:grid-cols-${columns} gap-4`}>
        {items.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-2xl shadow p-6"
          >
            <h3 className="text-xl text-[#0A2B58] mb-4 font-semibold">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
