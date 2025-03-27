'use client';

import React, { useState } from 'react';
import Image from 'next/image';

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
        <div className="bg-[#141414] hover:bg-white group shadow-lg rounded-3xl p-6 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <div className="flex items-center gap-4">
                <Image
                    src={imageUrl}
                    alt={name}
                    width={60}
                    height={60}
                    className="rounded-full border border-black w-20 h-20"
                />
                <div>
                    <h2 className="text-xl font-semibold group-hover:text-black">{name}</h2>
                    <p className="text-gray-500 font-semibold">{role}</p>
                </div>
            </div>
            {isOpen && (
                <div>
                    <p className="mt-4 italic text-gray-700">&quot;{quote}&quot;</p>
                    <div className="mt-4 grid grid-cols-2 gap-4 text-gray-800">
                        <div>
                            <p className="text-sm font-semibold">Experience managing money</p>
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
        </div>
    );
};


export default ProfileCard;
