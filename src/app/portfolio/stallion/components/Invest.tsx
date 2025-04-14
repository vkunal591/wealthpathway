import Link from "next/link";
import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { CgMail } from "react-icons/cg";

export default function Invest() {
  return (
    <div className="container mx-auto px-6 lg:p-16 lg:pt-0 space-y-4 ">
      <h2 className="text-3xl font-bold text-center text-blue-900">
        Why Invest in Stallion PMS with Wealth1?
      </h2>
      <p className="mt-4 text-gray-600 text-center leading-relaxed mb-8">
        Wealth1 is a trusted distributor for PMS and AIFs in India, offering
        investors access to the best Portfolio Management Services like Stallion
        PMS.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="rounded-2xl p-4 border border-gray-300 shadow-lg">
          <h3 className="text-blue-900 text-xl font-semibold mb-4">
            Eligibility for Stallion PMS
          </h3>
          <ul className="mt-4 space-y-4 grid grid-cols-2 text-gray-600 mb-4">
            <li className="flex items-center gap-2">
              <BsCheck2Circle className="text-blue-900" /> Resident Individuals
            </li>
            <li className="flex items-center gap-2">
              <BsCheck2Circle className="text-blue-900" /> HUFs
            </li>
            <li className="flex items-center gap-2">
              <BsCheck2Circle className="text-blue-900" />
              Body Corporates
            </li>
            <li className="flex items-center gap-2">
              <BsCheck2Circle className="text-blue-900" /> Trusts
            </li>
            <li className="flex items-center gap-2">
              <BsCheck2Circle className="text-blue-900" />
              NRIs
            </li>
            <li className="flex items-center gap-2">
              <BsCheck2Circle className="text-blue-900" />
              Partnership Firms
            </li>
          </ul>
          <p className="text-gray-800 flex items-center justify-start gap-2 text-sm">
            <CgMail className="text-blue-900" /> For Assistance, Email:{" "}
            <Link href={"mailto:contact@wealth1.com"}>
              <b>contact@wealth1.com</b>{" "}
            </Link>
          </p>
        </div>
        <div className="rounded-2xl p-4 border border-gray-300 shadow-lg">
          <h3 className="text-blue-900 text-xl font-semibold mb-4">
            Investment Process
          </h3>
          <div className="">
            {[
              {
                title: "Account Opening",
                description:
                  "Complete the application form and submit KYC documents.",
              },
              {
                title: "Funding",
                description:
                  "Transfer the investment amount to the designated bank account.",
              },
              {
                title: "Confirmation",
                description:
                  "Receive account confirmation and access credentials to the PMS portal.",
              },
            ].map((data, index) => (
              <div key={index} className="p-2 flex items-center justify-start gap-4">
                <div className="text-xl font-semibold bg-blue-900/10 w-10 h-10 text-blue-900 flex justify-center items-center rounded-full">{index + 1}</div>
                <div>
                  <h3 className="text-lg text-blue-900 font-semibold">
                    {data?.title}
                  </h3>
                  <p className="text-sm text-gray-600">{data?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
