"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { LiaLinkedin } from "react-icons/lia";
import { IoAdd, IoClose } from "react-icons/io5";

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

const ProfileCard: React.FC<Profile> = ({
  name,
  role,
  experience,
  managedAmount,
  boardMembership,
  currentManagement,
  quote,
  imageUrl,
  linkedin,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`bg-[#efefef] hover:bg-white group border border-gray-300 shadow-lg rounded-3xl ${
        isOpen ? "p-6 lg:p-16  bg-white" : "p-6"
      } cursor-pointer`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className={`flex ${"items-center"} transition-transform gap-4`}>
        <Image
          src={imageUrl}
          alt={name}
          width={60}
          height={60}
          className={`rounded-full bg-gray-200  ${
            isOpen ? "w-24 h-24" : "w-20 h-20"
          }`}
        />
        <div className={`${isOpen ? "hidden" : "block"}`}>
          <h2
            className={`font-semibold group-hover:text-black ${
              isOpen ? "text-4xl text-blue-900" : "text-3xl text-blue-900"
            }`}
          >
            {name}
          </h2>
          <p className="text-gray-600 font-semibold">{role}</p>
        </div>
        <div className="ml-auto">
          {isOpen ? (
            <IoClose className="text-3xl text-black" />
          ) : (
            <IoAdd className="text-3xl text-black group-hover:text-black" />
          )}
        </div>
      </div>

      {/* Motion component to handle open/close transition */}
      <motion.div
        initial={{ opacity: 0, height: 0 }} // Start closed and hidden
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }} // Open or close the height and opacity
        exit={{ opacity: 0, height: 0 }} // Smooth closing transition
        transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition for both open and close
        className="overflow-hidden mt-4 flex items-center justify-between gap-10"
      >
        <div className="w-full lg:w-1/3">
          <h2
            className={`font-semibold group-hover:text-black ${
              isOpen ? "text-3xl text-blue-900" : "text-xl text-blue-900"
            }`}
          >
            {name}
          </h2>
          <p className="text-gray-600 text-sm mb-2 font-semibold">{role}</p>
          <Link href={linkedin}>
            <LiaLinkedin className="text-gray-300 text-4xl" />
          </Link>
          <p className={`text-gray-700 font-medium ${isOpen ? "" : "hidden"}`}>
            &quot;{quote}&quot;
          </p>
        </div>
        {isOpen && (
          <div>
            <div className="mt-4 grid grid-cols-2 gap-4 text-blue-900">
              <div>
                <p className="text-base mb-2 font-medium text-blue-9000">
                  Experience managing money
                </p>
                <p className="text-xl font-bold">{experience}</p>
              </div>
              <div>
                <p className="text-base mb-2 font-medium text-blue-9000">
                  Previously managed
                </p>
                <p className="text-xl font-bold">{managedAmount}</p>
              </div>
              <div>
                <p className="text-base mb-2 font-medium text-blue-9000">
                  On investment board of
                </p>
                <p className="text-xl font-bold">{boardMembership}</p>
              </div>
              <div>
                <p className="text-base mb-2 font-medium text-blue-9000">
                  Currently manages
                </p>
                <p className="text-xl font-bold">{currentManagement}</p>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ProfileCard;
