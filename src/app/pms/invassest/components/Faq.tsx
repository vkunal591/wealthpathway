"use client";

import React, { useState } from "react";
import { BsDashCircle } from "react-icons/bs";
import { IoIosAddCircleOutline } from "react-icons/io";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number>(0); // First FAQ open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };
  return (
    <div className="container mx-auto px-6 lg:p-16 lg:pt-0 space-y-4 ">
      <h2 className="text-3xl font-bold text-center text-[#0A2B58]">
        Frequently Asked Questions
      </h2>
      <p className="mt-4 text-gray-600 text-center leading-relaxed mb-4">
        Get answers to commonly asked questions about INVasset PMS.
      </p>
      {[
        {
          question: "Is INVasset PMS suitable for conservative investors?",
          answer:
            "INVasset PMS is best suited for investors with moderate-to-aggressive risk profiles who seek long-term wealth creation with active downside risk control.",
        },
        {
          question: "How is INVasset PMS different from traditional PMS?",
          answer:
            "INVasset PMS is data-driven and rules-based. Unlike traditional discretionary PMS, it eliminates human bias and runs on real-time quant signals.",
        },
        {
          question: "Can NRIs invest in INVasset PMS?",
          answer:
            "Yes, NRIs can invest via NRE/NRO accounts in compliance with FEMA and RBI guidelines.",
        },
        {
          question: "Is there any lock-in period?",
          answer:
            "There is no formal lock-in, but a 3–5 year holding period is recommended for optimal results.",
        },
        {
          question: "How often is the portfolio rebalanced?",
          answer:
            "The algorithm scans daily, but changes are made only when key signals are triggered—ensuring minimal churn and tax efficiency.",
        },
      ].map((faq, index) => (
        <div
          key={index}
          className="border rounded-2xl text-[#0A2B58] p-4 border-l-4 border-l-[#B28C3D] border-gray-500 py-6"
        >
          <button
            className={`w-full text-left  flex justify-between items-center`}
            onClick={() => toggleFAQ(index)}
          >
            <span className="font-medium">{faq.question}</span>
            <span className="text-xl">
              {openIndex === index ? (
                <BsDashCircle width={16} height={16} />
              ) : (
                <IoIosAddCircleOutline width={16} height={16} />
              )}
            </span>
          </button>
          <div
            className={`transition-all duration-300 overflow-hidden text-gray-500 ${
              openIndex === index
                ? "max-h-40 p-4 bg-transparent "
                : "max-h-0 p-0"
            }`}
          >
            {openIndex === index && <p className="text-sm">{faq.answer}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}
