import Link from "next/link";
import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { CgMail } from "react-icons/cg";

export default function Invest() {
  return (
    <div className="container mx-auto px-6 lg:p-16 lg:pt-0 space-y-4 ">
      <h2 className="text-3xl font-bold text-center text-[#0A2B58]">
        How to Invest in INVasset Growth PMS{" "}
      </h2>
      <p className="mt-4 text-gray-600 text-center leading-relaxed mb-8">
        A simple process to begin your investment journey with INVasset PMS.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="rounded-2xl p-4 border border-gray-300 shadow-lg">
          <h3 className="text-[#0A2B58] text-xl font-semibold mb-4">
            Eligibility for INVasset PMS
          </h3>
          <ul className="mt-4 space-y-4 grid grid-cols-2 text-gray-600 mb-4">
            <li className="flex items-center gap-2">
              <BsCheck2Circle className="text-[#B28C3D]" /> Resident Individuals
            </li>
            <li className="flex items-center gap-2">
              <BsCheck2Circle className="text-[#B28C3D]" /> HUFs
            </li>
            <li className="flex items-center gap-2">
              <BsCheck2Circle className="text-[#B28C3D]" />
              Body Corporates
            </li>
            <li className="flex items-center gap-2">
              <BsCheck2Circle className="text-[#B28C3D]" /> Trusts
            </li>
            <li className="flex items-center gap-2">
              <BsCheck2Circle className="text-[#B28C3D]" />
              NRIs
            </li>
            <li className="flex items-center gap-2">
              <BsCheck2Circle className="text-[#B28C3D]" />
              Partnership Firms
            </li>
          </ul>
          <p className="text-gray-800 flex items-center justify-start gap-2 mt-auto text-sm">
            <CgMail className="text-[#B28C3D]" /> For Assistance, Email:{" "}
            <Link href={"mailto:contact@wealth1.com"}>
              <b>contact@wealth1.com</b>{" "}
            </Link>
          </p>
        </div>
        <div className="rounded-2xl p-4 border border-gray-300 shadow-lg">
          <h3 className="text-[#0A2B58] text-xl font-semibold mb-4">
            Investment Process
          </h3>
          <div className="">
            {[
              {
                title: "Complete Documentation",
                description:
                  "Fill in the application form and complete KYC requirements.",
              },
              {
                title: "Portfolio Access",
                description:
                  "Fill in the application form and complete KYC requirements.",
              },
              {
                title: "Fund Your Account",
                description:
                  "Transfer the minimum investment of ₹50 Lakhs to begin the investment process.",
              },
              {
                title: "Portfolio Access",
                description:
                  "Receive onboarding confirmation and access to track your portfolio.",
              },
            ].map((data, index) => (
              <div
                key={index}
                className="p-2 flex items-center justify-start gap-4"
              >
                <div className="text-lg font-semibold bg-[#B28C3D]/10 w-10 h-10 p-3 text-[#B28C3D] flex justify-center items-center rounded-full">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-base text-[#0A2B58] font-semibold">
                    {data?.title}
                  </h3>
                  <p className="text-xs text-gray-600">{data?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
