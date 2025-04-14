"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsDashCircle } from "react-icons/bs";
import { IoIosAddCircleOutline } from "react-icons/io";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqProps = {
  faqs: FaqItem[];
  title?: string;
  subtitle?: string;
  allowMultiple?: boolean;
  containerClass?: string;
};

const Faq: React.FC<FaqProps> = ({
  faqs,
  title = "Frequently Asked Questions",
  subtitle = "Get answers to commonly asked questions about INVasset PMS.",
  allowMultiple = false,
  containerClass = "container mx-auto p-4 lg:px-16 lg:pt-0 space-y-4",
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]); // First one open by default

  const toggleFAQ = (index: number) => {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenIndexes((prev) => (prev[0] === index ? [] : [index]));
    }
  };

  if (!faqs) return <div>No Faqs</div>;

  return (
    <motion.div
      className={containerClass}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      <motion.h2
        className="text-3xl font-bold text-center text-[#0A2B58]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        {title}
      </motion.h2>
      <motion.p
        className="mt-4 text-gray-600 text-center leading-relaxed mb-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        {subtitle}
      </motion.p>

      {faqs.map((faq: any, index: any) => {
        const isOpen = openIndexes.includes(index);
        return (
          <motion.div
            key={index}
            className="border rounded-2xl text-[#0A2B58] p-4 border-l-4 border-l-[#B28C3D] border-gray-300 py-6 mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex justify-between items-center"
            >
              <span className="font-medium">{faq?.title}</span>
              <span className="text-xl">
                {isOpen ? (
                  <BsDashCircle width={16} height={16} />
                ) : (
                  <IoIosAddCircleOutline width={16} height={16} />
                )}
              </span>
            </button>
            <div
              className={`transition-all duration-300 overflow-hidden text-gray-500 ${
                isOpen ? "max-h-40 p-4" : "max-h-0 p-0"
              }`}
            >
              {isOpen && <p className="text-sm">{faq.description}</p>}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Faq;
