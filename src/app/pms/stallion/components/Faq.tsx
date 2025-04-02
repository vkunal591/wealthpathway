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
      <h2 className="text-3xl font-bold text-center text-blue-900">
        Frequently Asked Questions
      </h2>
      <p className="mt-4 text-gray-600 text-center leading-relaxed mb-4">
        Get answers to commonly asked questions about Stallion PMS.
      </p>
      {[
        {
          question: "How can I withdraw from Stallion PMS?",
          answer:
            "To withdraw funds, submit a request via email to operations@stallionasset.com. Requests before 1 PM are processed the same day; after 1 PM are processed the next business day.",
        },
        {
          question: "Can NRIs invest in Stallion PMS?",
          answer:
            "Yes, NRIs can invest in Stallion PMS, subject to compliance with applicable regulations.",
        },
        {
          question:
            "Is Systematic Transfer Plan (STP) available in Stallion PMS?",
          answer:
            "Yes, Stallion PMS offers an STP option that allows investments in tranches over a specified period.",
        },
      ].map((faq, index) => (
        <div
          key={index}
          className="border rounded-2xl text-blue-900 p-4 border-l-4 border-l-blue-900 border-gray-500 py-6"
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
