import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";

export default function TeamSection() {
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16 ">
      <h2 className="capitalize text-4xl text-center  font-semibold text-gray-700 mb-4">
        Meet Our Team
      </h2>
      <p className="text-gray-500 text-base w-full lg:w-3/5 m-auto text-center mb-8">
        Our experienced professionals bring together decades of expertise in
        investment management, research, and client service to deliver
        exceptional value to our investors.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {Array(4)
          .fill(null)
          .map((data, index) => (
            <div
              key={index}
              className="border border-gray-300 shadow rounded  p-4 w-full"
            >
              <div className="w-full">
                <Image
                  src={"/sarah.png"}
                  width={900}
                  height={900}
                  alt=""
                  className="object-cover object-center w-full"
                />
              </div>
              <div>
                <h2 className="text-2xl text-gray-700 mb-2">John Doe</h2>
                <p className="text-sm text-green-500 mb-4">Ceo, Founder</p>
                <p className="text-base text-gray-500 mb-4">
                  With over 15 years of experience in portfolio management,
                  Sarah leads our investment strategy with a focus on
                  sustainable long-term growth.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Link href={""} className="flex items-center">
                  <LiaLinkedin className="mr-1 text-2xl" /> Linkedin
                </Link>
                <Link href={""} className="flex items-center">
                  <FaEnvelope className="mr-1" /> Email
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
