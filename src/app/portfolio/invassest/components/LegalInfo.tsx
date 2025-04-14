"use client";
import React from "react";
import { motion } from "framer-motion";
import { BsCheck2Circle } from "react-icons/bs";
import { FaFile } from "react-icons/fa6";
import Link from "next/link";

type LegalPoint = {
  title: string;
  description: string;
};

type DownloadItem = {
  title: string;
  description: string;
  url: string;
};

type LegalInfoProps = {
  legalPoints: LegalPoint[];
  downloads?: DownloadItem[];
};

export default function LegalInfo({ legalPoints, downloads = [] }: LegalInfoProps) {
  return (
    <motion.div
      className="max-w-7xl mx-auto p-4 lg:p-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      <div className="grid grid-cols-1 gap-8">
        {/* Legal Info */}
        <motion.div
          className="rounded-2xl p-4 border border-gray-300 shadow-lg bg-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <h3 className="text-[#0A2B58] text-xl font-semibold mb-4">
            Legal and Regulatory Information
          </h3>
          <ul className="mt-4 text-[#0A2B58] mb-4">
            {legalPoints.map((point, idx) => (
              <React.Fragment key={idx}>
                <li className="flex items-center gap-2 font-semibold">
                  <BsCheck2Circle className="text-[#B28C3D]" />
                  {point.title}
                </li>
                <li className="text-sm w-4/5 ml-6 mb-4">{point.description}</li>
              </React.Fragment>
            ))}
          </ul>
        </motion.div>

        {/* Downloads Section */}
        {downloads.length > 0 && (
          <motion.div
            className="rounded-2xl p-4 border border-gray-300 shadow-lg bg-white"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <h3 className="text-[#0A2B58] text-xl font-semibold mb-4">
              Download Resources
            </h3>
            {downloads.map((file, idx) => (
              <motion.div
                key={idx}
                className="p-2 px-4 items-center group hover:bg-[#B28C3D]/10 bg-gray-100 rounded-2xl mb-2 justify-start gap-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Link href={file.url} target="_blank" className="flex items-center gap-4">
                  <FaFile className="text-[#B28C3D]" />
                  <div>
                    <h3 className="text-sm text-[#0A2B58] font-semibold">{file.title}</h3>
                    <p className="text-xs text-gray-600">{file.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
