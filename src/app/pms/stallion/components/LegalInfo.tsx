import Link from "next/link";
import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { FaFile } from "react-icons/fa6";

export default function LegalInfo() {
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16 bg-gradient-to-r from-blue-900/10 via-blue-900/10 to-blue-50/10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="rounded-2xl p-4 border border-gray-300 shadow-lg  bg-white">
          <h3 className="text-blue-900 text-xl font-semibold mb-4">
            Legal and Regulatory Information
          </h3>
          <ul className="mt-4 text-gray-600 mb-4">
            <li className="flex items-center gap-2 font-semibold">
              <BsCheck2Circle className="text-blue-900" /> Regulatory Compliance
            </li>
            <li className="text-sm w-4/5 ml-6 mb-4">
              Stallion Asset Pvt Ltd is SEBI-registered as a Portfolio
              Management Service provider (INP000006129).
            </li>
            <li className="flex items-center gap-2 font-semibold">
              <BsCheck2Circle className="text-blue-900" /> Risk Disclaimer
            </li>
            <li className="text-sm w-4/5 ml-6">
              Investments in Stallion PMS are subject to market risks. Past
              performance is not indicative of future results.
            </li>
          </ul>
        </div>
        <div className="rounded-2xl p-4 border border-gray-300 shadow-lg bg-white">
          <h3 className="text-blue-900 text-xl font-semibold mb-4">
            Download Resources
          </h3>
          <div className="">
            {[
              {
                title: "Stallion PMS Presentation",
                description: "PDF, 2.4 MB",
              },
              {
                title: "Stallion PMS Factsheet",
                description: "PDF, 1.8 MB",
              },
              {
                title: "Confirmation",
                description:
                  "Receive account confirmation and access credentials to the PMS portal.",
              },
            ].map((data, index) => (
              <div
                key={index}
                className="p-2 px-4 flex items-center group bg-gray-50 hover:bg-gray-100 rounded-2xl mb-2 justify-start gap-4"
              >
                <Link href={"/"} target="blank" className="flex items-center gap-4">
                  <div>
                    <FaFile className="text-blue-900" />
                  </div>
                  <div>
                    <h3 className="text-sm text-blue-900 font-semibold">
                      {data?.title}
                    </h3>
                    <p className="text-xs text-gray-600">{data?.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
