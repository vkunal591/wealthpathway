"use client";

import React from "react";
import ProfileCard from "./ProfileCard";
import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";

interface Profile {
  name: string;
  role: string;
  experience: string;
  managedAmount: string;
  boardMembership: string;
  currentManagement: string;
  linkedin: string;
  quote: string;
  imageUrl: string;
}

const experts: Profile[] = [
  {
    name: "Sarah Johnson",
    role: "Chief Investment Officer",
    experience: "20+ Years",
    managedAmount: "₹25,000+ Crores",
    boardMembership: "5 of India’s largest family offices",
    currentManagement: "PMS Strategies",
    linkedin: "https://linkedin.com/in/sarahjohnson",
    quote:
      "With over 15 years of experience in portfolio management, Sarah leads our investment strategy with a focus on sustainable long-term growth.",
    imageUrl: "/logofinal.png",
  },
  {
    name: "Michael Chen",
    role: "Head of Research",
    experience: "15+ Years",
    managedAmount: "₹10,000+ Crores",
    boardMembership: "Multiple family offices",
    currentManagement: "Equity Strategies",
    linkedin: "https://linkedin.com/in/michaelchen",
    quote:
      "Michael brings deep analytical expertise and a data-driven approach to our investment research process.",
    imageUrl: "/logofinal.png",
  },
  {
    name: "Dr. Raj Patel",
    role: "Risk Management Director",
    experience: "15+ Years",
    managedAmount: "₹10,000+ Crores",
    boardMembership: "Multiple family offices",
    currentManagement: "Equity Strategies",
    linkedin: "https://linkedin.com/in/rajpatel",
    quote:
      "An expert in quantitative analysis, Raj ensures our portfolios maintain optimal risk-adjusted returns.",
    imageUrl: "/logofinal.png",
  },
  {
    name: "Emma Thompson",
    role: "Client Relations Head",
    experience: "15+ Years",
    managedAmount: "₹10,000+ Crores",
    boardMembership: "Multiple family offices",
    currentManagement: "Equity Strategies",
    linkedin: "https://linkedin.com/in/emmathompson",
    quote:
      "Emma leads our client service team, ensuring personalized attention and support for every investor.",
    imageUrl: "/logofinal.png",
  },
];
export default function OurExpert() {
  return (
    <div className="max-w-8xl m-auto p-4 py-16">
      <h2 className="text-3xl lg:text-7xl w-full lg:w-3/5 m-auto text-blue-900 text-center mb-24">
        Meet our team of experts
      </h2>
      <div className="grid grid-cols-1 gap-8 w-full m-auto">
        {experts.map((expert, index) => (
          <ProfileCard key={index} {...expert} />
        ))}

        <div
          className={`bg-[#efefef] hover:bg-white group border border-gray-300 shadow-lg rounded-3xl p-6 cursor-pointer`}
        >
          <div className={`flex ${"items-center"} transition-transform gap-4`}>
            <div className="flex justify-center items-center">
              <Image
                src={"/logofinal.png"}
                alt={"logo"}
                width={60}
                height={60}
                className={`rounded-full bg-gray-200 w-24 h-24 relative left-5 border border-gray-500`}
              />

              <Image
                src={"/logofinal.png"}
                alt={"logo"}
                width={60}
                height={60}
                className={`rounded-full bg-gray-200 w-24 h-24 relative left-[-2rem] lg:left-[-2.2rem] border border-gray-500 `}
              />

              <Image
                src={"/logofinal.png"}
                alt={"logo"}
                width={60}
                height={60}
                className={`rounded-full hidden lg:block bg-gray-200 w-24 h-24 relative left-[-5.7rem] border border-gray-500 `}
              />
            </div>

            <div className="ml-auto flex items-center text-blue-900 group-hover:text-black gap-2 text-xl">
              See all members{" "}
              <IoArrowForward className="text-3xl group-hover:text-black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
