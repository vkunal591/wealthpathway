'use client';

import React from 'react';
import ProfileCard from './ProfileCard';
import Image from 'next/image';
import { IoArrowForward } from 'react-icons/io5';

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

const experts: Profile[] = [
    {
        name: 'Vaibhav Porwal',
        role: 'Co-founder, PMS Principal officer',
        experience: '20+ Years',
        managedAmount: '₹25,000+ Crores',
        boardMembership: '5 of India’s largest family offices',
        currentManagement: 'PMS Strategies',
        quote:
            'Investing involves a mix of skill, knowledge and luck. Recognising this duality and staying rational is what matters most.',
        imageUrl: '/logo.png',
    },
    {
        name: 'Pratik Bagaria',
        role: 'Public equity, PMS fund manager',
        experience: '15+ Years',
        managedAmount: '₹10,000+ Crores',
        boardMembership: 'Multiple family offices',
        currentManagement: 'Equity Strategies',
        quote: 'A disciplined and research-backed approach leads to sustainable wealth creation.',
        imageUrl: '/logo.png',
    },
    {
        name: 'Pratik Bagaria',
        role: 'Public equity, PMS fund manager',
        experience: '15+ Years',
        managedAmount: '₹10,000+ Crores',
        boardMembership: 'Multiple family offices',
        currentManagement: 'Equity Strategies',
        quote: 'A disciplined and research-backed approach leads to sustainable wealth creation.',
        imageUrl: '/logo.png',
    },
    {
        name: 'Pratik Bagaria',
        role: 'Public equity, PMS fund manager',
        experience: '15+ Years',
        managedAmount: '₹10,000+ Crores',
        boardMembership: 'Multiple family offices',
        currentManagement: 'Equity Strategies',
        quote: 'A disciplined and research-backed approach leads to sustainable wealth creation.',
        imageUrl: '/logo.png',
    },
    {
        name: 'Pratik Bagaria',
        role: 'Public equity, PMS fund manager',
        experience: '15+ Years',
        managedAmount: '₹10,000+ Crores',
        boardMembership: 'Multiple family offices',
        currentManagement: 'Equity Strategies',
        quote: 'A disciplined and research-backed approach leads to sustainable wealth creation.',
        imageUrl: '/logo.png',
    },
    {
        name: 'Pratik Bagaria',
        role: 'Public equity, PMS fund manager',
        experience: '15+ Years',
        managedAmount: '₹10,000+ Crores',
        boardMembership: 'Multiple family offices',
        currentManagement: 'Equity Strategies',
        quote: 'A disciplined and research-backed approach leads to sustainable wealth creation.',
        imageUrl: '/logo.png',
    },

];
export default function OurExpert() {
    return (
        <div className='max-w-8xl m-auto p-4 py-44'>
            <h2 className='text-3xl lg:text-7xl w-full lg:w-3/5 m-auto text-center mb-24'>
                Meet our team
                of experts
            </h2>
            <div className='grid grid-cols-1 gap-8 w-full lg:w-4/5 m-auto'>
                {experts.map((expert, index) => (
                    <ProfileCard key={index} {...expert} />
                ))}

                <div
                    className={`bg-[#141414] hover:bg-white group shadow-lg rounded-3xl p-6 cursor-pointer`}
                >
                    <div
                        className={`flex ${"items-center"
                            } transition-transform gap-4`}
                    >
                        <div className='flex justify-center items-center'>

                            <Image
                                src={'/logo.png'}
                                alt={'logo'}
                                width={60}
                                height={60}
                                className={`rounded-full bg-gray-200 w-24 h-24 relative border border-gray-500`}
                            />


                            <Image
                                src={'/logo.png'}
                                alt={'logo'}
                                width={60}
                                height={60}
                                className={`rounded-full bg-gray-200 w-24 h-24 relative left-[-3rem] border border-gray-500 `}
                            />

                            <Image
                                src={'/logo.png'}
                                alt={'logo'}
                                width={60}
                                height={60}
                                className={`rounded-full bg-gray-200 w-24 h-24 relative left-[-6rem] border border-gray-500 `}
                            />
                        </div>

                        <div className="ml-auto flex items-center group-hover:text-black gap-2 text-xl">
                            See all members <IoArrowForward className="text-3xl group-hover:text-black" />
                        </div>
                    </div>

                </div>
            </div>

        </div>

    )
}
