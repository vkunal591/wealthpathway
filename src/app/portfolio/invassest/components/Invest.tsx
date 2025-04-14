"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
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
        className="mt-4 text-gray-600 text-center leading-relaxed mb-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        {subtitle}
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Eligibility */}
        <motion.div
          className={cardClass}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <h3 className="text-[#0A2B58] text-xl font-semibold mb-4">Eligibility</h3>
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
        </motion.div>

        {/* Steps */}
        <motion.div
          className={cardClass}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <h3 className="text-[#0A2B58] text-xl font-semibold mb-4">Investment Process</h3>
          <div>
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="p-2 flex items-center justify-start gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: false }}
              >
                <div
                  className={`text-lg font-semibold bg-[#B28C3D]/10 w-10 h-10 p-3 ${iconColorClass} flex justify-center items-center rounded-full`}
                >
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-base text-[#0A2B58] font-semibold">{step.title}</h3>
                  <p className="text-xs text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Invest;
