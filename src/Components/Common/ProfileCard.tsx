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
            className={`bg-[#141414] hover:bg-white group shadow-lg rounded-3xl ${isOpen ? "p-6 lg:p-16  bg-white" : "p-6"
                } cursor-pointer`}
            onClick={() => setIsOpen(!isOpen)}
        >
            <div
                className={`flex ${"items-center"
                    } transition-transform gap-4`}
            >
                <Image
                    src={imageUrl}
                    alt={name}
                    width={60}
                    height={60}
                    className={`rounded-full bg-gray-200  ${isOpen ? "w-24 h-24" : "w-20 h-20"
                        }`}
                />
                <div className={`${isOpen ? "hidden" : "block"}`}>
                    <h2
                        className={`font-semibold group-hover:text-black ${isOpen ? "text-4xl text-black" : "text-3xl"
                            }`}
                    >
                        {name}
                    </h2>
                    <p className="text-gray-500 font-semibold">{role}</p>
                </div>
                <div className="ml-auto">
                    {isOpen ? <IoClose className="text-3xl text-black" /> : <IoAdd className="text-3xl group-hover:text-black" />}
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
                        className={`font-semibold group-hover:text-black ${isOpen ? "text-3xl text-black" : "text-xl"
                            }`}
                    >
                        {name}
                    </h2>
                    <p className="text-gray-500 text-sm mb-2 font-semibold">{role}</p>
                    <Link href={"/"} >
                        <LiaLinkedin className="text-gray-300 text-4xl" />
                    </Link>
                    <p className={`text-gray-700 font-medium ${isOpen ? "" : "hidden"}`}>&quot;{quote}&quot;</p>
                </div>
                {isOpen && (
                    <div>
                        <div className="mt-4 grid grid-cols-2 gap-4 text-gray-800">
                            <div>
                                <p className="text-base mb-2 font-medium text-gray-500">
                                    Experience managing money
                                </p>
                                <p className="text-xl font-bold">{experience}</p>
                            </div>
                            <div>
                                <p className="text-base mb-2 font-medium text-gray-500">Previously managed</p>
                                <p className="text-xl font-bold">{managedAmount}</p>
                            </div>
                            <div>
                                <p className="text-base mb-2 font-medium text-gray-500">On investment board of</p>
                                <p className="text-xl font-bold">{boardMembership}</p>
                            </div>
                            <div>
                                <p className="text-base mb-2 font-medium text-gray-500">Currently manages</p>
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
