import Link from "next/link";
import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { CgMail } from "react-icons/cg";

type InvestStep = {
  title: string;
  description: string;
};

type InvestProps = {
  title?: string;
  subtitle?: string;
  eligibilityItems: string[];
  steps: InvestStep[];
  contactEmail: string;
  containerClass?: string;
  cardClass?: string;
  iconColorClass?: string;
};

const Invest: React.FC<InvestProps> = ({
  title = "How to Invest in INVasset Growth PMS",
  subtitle = "A simple process to begin your investment journey with INVasset PMS.",
  eligibilityItems,
  steps,
  contactEmail,
  containerClass = "container mx-auto px-6 lg:p-16 lg:pt-0 space-y-4",
  cardClass = "rounded-2xl p-4 border border-gray-300 shadow-lg",
  iconColorClass = "text-[#B28C3D]",
}) => {
  return (
    <div className={containerClass}>
      <h2 className="text-3xl font-bold text-center text-[#0A2B58]">{title}</h2>
      <p className="mt-4 text-gray-600 text-center leading-relaxed mb-8">{subtitle}</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Eligibility */}
        <div className={cardClass}>
          <h3 className="text-[#0A2B58] text-xl font-semibold mb-4">Eligibility </h3>
          <ul className="mt-4 space-y-4 grid grid-cols-2 text-gray-600 mb-4">
            {eligibilityItems.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <BsCheck2Circle className={iconColorClass} /> {item}
              </li>
            ))}
          </ul>
          <p className="text-gray-800 flex items-center justify-start gap-2 mt-auto text-sm">
            <CgMail className={iconColorClass} /> For Assistance, Email:{" "}
            <Link href={`mailto:${contactEmail}`}>
              <b>{contactEmail}</b>
            </Link>
          </p>
        </div>

        {/* Steps */}
        <div className={cardClass}>
          <h3 className="text-[#0A2B58] text-xl font-semibold mb-4">Investment Process</h3>
          <div>
            {steps.map((step, index) => (
              <div key={index} className="p-2 flex items-center justify-start gap-4">
                <div
                  className={`text-lg font-semibold bg-[#B28C3D]/10 w-10 h-10 p-3 ${iconColorClass} flex justify-center items-center rounded-full`}
                >
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-base text-[#0A2B58] font-semibold">{step.title}</h3>
                  <p className="text-xs text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invest;
