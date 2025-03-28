"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Profile {
  name: string;
  role: string;
  experience: string;
  managedAmount: string;
  boardMembership: string;
  currentManagement: string;
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
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`bg-[#141414] hover:bg-white group shadow-lg rounded-3xl ${
        isOpen ? "p-16 flex bg-white" : "p-6"
      } cursor-pointer`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`flex ${
          isOpen ? "flex-col items-start" : "items-center"
        } transition-transform gap-4`}
      >
        <Image
          src={imageUrl}
          alt={name}
          width={60}
          height={60}
          className={`rounded-full border border-black  ${
            isOpen ? "w-24 h-24" : "w-20 h-20"
          }`}
        />
        <div>
          <h2
            className={`font-semibold group-hover:text-black ${
              isOpen ? "text-3xl text-black" : "text-xl"
            }`}
          >
            {name}
          </h2>
          <p className="text-gray-500 font-semibold">{role}</p>
        </div>
        <p className={`italic text-gray-700 ${isOpen ?"":"hidden"}`}>&quot;{quote}&quot;</p>
      </div>

      {/* Motion component to handle open/close transition */}
      <motion.div
        initial={{ opacity: 0, height: 0 }} // Start closed and hidden
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }} // Open or close the height and opacity
        exit={{ opacity: 0, height: 0 }} // Smooth closing transition
        transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition for both open and close
        className="overflow-hidden mt-4"
      >
        {isOpen && (
          <div>
            <div className="mt-4 grid grid-cols-2 gap-4 text-gray-800">
              <div>
                <p className="text-sm font-semibold">
                  Experience managing money
                </p>
                <p className="text-lg font-bold">{experience}</p>
              </div>
              <div>
                <p className="text-sm font-semibold">Previously managed</p>
                <p className="text-lg font-bold">{managedAmount}</p>
              </div>
              <div>
                <p className="text-sm font-semibold">On investment board of</p>
                <p className="text-lg font-bold">{boardMembership}</p>
              </div>
              <div>
                <p className="text-sm font-semibold">Currently manages</p>
                <p className="text-lg font-bold">{currentManagement}</p>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ProfileCard;
