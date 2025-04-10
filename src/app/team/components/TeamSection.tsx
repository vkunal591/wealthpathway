'use client';

import { useState } from 'react';
import { team2 } from "@/datas/data";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaLinkedin } from 'react-icons/fa6';

const categories = ["All", "Marketing", "Technical"]; // Add more roles if needed

export default function TeamSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTeam = activeCategory === "All"
    ? team2
    : team2.filter((member: any) => member?.category === activeCategory);

  return (
    <div className="max-w-7xl m-auto p-4 pt-10 pb-10">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="capitalize text-5xl text-center font-bold text-[#0A2B58] mb-8"
      >
        Meet Our Team
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-gray-500 text-lg font-semibold w-full lg:w-4/5 m-auto text-center mb-8"
      >
        Our experienced professionals bring together decades of expertise in
        investment management, research, and client service to deliver
        exceptional value to our investors.
      </motion.p>

      {/* Category Tabs */}
      <div className=" justify-center gap-4 mb-10 hidden">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              activeCategory === cat
                ? "bg-[#0A2B58] text-white"
                : "bg-gray-200 text-[#0A2B58]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTeam.map((data: any, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative group w-full h-96 overflow-hidden border hover:border-2 border-gray-300 hover:border-yellow-500 rounded-3xl shadow-lg"
          >
            <Image
              src={data?.image || "/sarah.png"}
              alt={data?.name}
              fill
              className="object-contain  object-center w-full h-full transition-transform duration-500 group-hover:scale-110"
            />

            <div className='absolute inset-0 bg-gradient-to-t from-[#B28C3D]/60 via-white/0 '></div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#0A2B58]/80 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center p-4 text-white">
              <h3 className="text-2xl font-bold mb-1">{data?.name}</h3>
              <p className="text-[#B28C3D] font-medium text-lg mb-2">{data?.position}</p>
              <p className="text-sm mb-4">{data?.description}</p>
              <div className="flex gap-4">
                <Link href={data?.linkedin || "#"} target="_blank" className="hover:text-[#B28C3D]">
                  <FaLinkedin className="text-3xl" />
                </Link>
                <Link href={`mailto:${data?.email}`} className="hover:text-[#B28C3D]">
                  <FaEnvelope className="text-3xl" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
