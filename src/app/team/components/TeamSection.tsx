import { team, team2 } from "@/datas/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import { motion } from "framer-motion";

export default function TeamSection() {
  return (
    <div className="max-w-7xl m-auto p-4  pt-40">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="capitalize text-5xl text-center font-bold text-[#0A2B58] mb-4"
      >
        Meet Our Team
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-[#0A2B58] text-lg font-semibold w-full lg:w-4/5 m-auto text-center mb-8"
      >
        Our experienced professionals bring together decades of expertise in
        investment management, research, and client service to deliver
        exceptional value to our investors.
      </motion.p>

      <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-3/5 m-auto mb-8 hidden">
        {team &&
          team.map((data: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-300 shadow rounded p-4 w-full"
            >
              <div className="w-full mb-4">
                <Image
                  src={data?.image || "/sarah.png"}
                  width={900}
                  height={900}
                  alt=""
                  className="object-cover object-center w-full"
                />
              </div>
              <div>
                <h2 className="text-2xl text-[#0A2B58] font-semibold mb-2">
                  {data?.name}
                </h2>
                <p className="text-sm text-[#B28C3D] mb-4">{data?.position}</p>
                <p className="text-base text-[#0A2B58]/70 mb-4">
                  {data?.positon}
                </p>
              </div>
              <div className="flex items-center gap-4 text-[#B28C3D]">
                <Link href={data?.linkedin} className="flex items-center text-[#0A2B58]">
                  <LiaLinkedin className="mr-1 text-[#B28C3D] text-2xl" />
                  Linkedin
                </Link>
                <Link href={data?.email} className="flex items-center text-[#0A2B58]">
                  <FaEnvelope className="mr-1 text-[#B28C3D]" /> Email
                </Link>
              </div>
            </motion.div>
          ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:w-4/5 m-auto">
        {team2 &&
          team2.map((data: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-300 shadow rounded p-4 w-full"
            >
              <div className="w-full h-72 mb-4">
                <Image
                  src={data?.image || "/sarah.png"}
                  width={900}
                  height={900}
                  alt=""
                  className="object-cover object-center h-full w-full"
                />
              </div>
              <div>
                <h2 className="text-2xl text-[#0A2B58] font-semibold mb-2">
                  {data?.name}
                </h2>
                <p className="text-sm text-[#B28C3D] mb-4">{data?.position}</p>
                <p className="text-base text-[#0A2B58]/70 mb-4">
                  {data?.positon}
                </p>
              </div>
              <div className="flex items-center gap-4 text-[#B28C3D]">
                <Link href={""} className="flex items-center text-[#0A2B58]">
                  <LiaLinkedin className="mr-1 text-[#B28C3D] text-2xl" />
                  Linkedin
                </Link>
                <Link href={""} className="flex items-center text-[#0A2B58]">
                  <FaEnvelope className="mr-1 text-[#B28C3D]" /> Email
                </Link>
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  );
}
