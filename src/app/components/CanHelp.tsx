import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io';

export default function CanHelp() {
    const sections = [
        {
            id: '01',
            title: 'EXISTING INVESTMENTS',
            description: 'Analyse & improve your current portfolio',
            imageUrl: '/graph.svg',
            imageAlt: 'Graph Image',
            bgColor: 'bg-gray-50',
            textColor: 'text-black',
        },
        {
            id: '02',
            title: 'Traditional wealth firms',
            description: 'Your RM is busy searching for new clients & rarely tracks your portfolio',
            imageUrl: '/graph.svg',
            imageAlt: 'Another Graph Image',
            bgColor: 'bg-[#121212]',
            textColor: 'text-gray-50',
        },
        {
            id: '03',
            title: 'Wealth',
            description: 'We track the market’s impact on your portfolio daily',
            imageUrl: '/graph.svg',
            imageAlt: 'Graph Image',
            bgColor: 'bg-gray-50',
            textColor: 'text-black',
        },
        {
            id: '04',
            title: 'Traditional wealth firms',
            description: 'Your RM is busy searching for new clients & rarely tracks your portfolio',
            imageUrl: '/graph.svg',
            imageAlt: 'Another Graph Image',
            bgColor: 'bg-[#121212]',
            textColor: 'text-gray-50',
        },
        {
            id: '05',
            title: 'Wealth',
            description: 'We track the market’s impact on your portfolio daily',
            imageUrl: '/graph.svg',
            imageAlt: 'Graph Image',
            bgColor: 'bg-gray-50',
            textColor: 'text-black',
        },
        {
            id: '06',
            title: 'Traditional wealth firms',
            description: 'Your RM is busy searching for new clients & rarely tracks your portfolio',
            imageUrl: '/graph.svg',
            imageAlt: 'Another Graph Image',
            bgColor: 'bg-[#121212]',
            textColor: 'text-gray-50',
        },
        {
            id: '07',
            title: 'Wealth',
            description: 'We track the market’s impact on your portfolio daily',
            imageUrl: '/graph.svg',
            imageAlt: 'Graph Image',
            bgColor: 'bg-gray-50',
            textColor: 'text-black',
        },

        // Add more sections here as needed
    ];
    return (
        <div className='max-w-8xl m-auto mb-44' >
            <h2 className='text-3xl lg:text-7xl w-full lg:w-3/5 m-auto text-center mb-24 '>
                How Dezerv
                can help you
            </h2>

            <div className='w-full space-y-8'>
                {sections.map((data: any, index: any) => (
                    <div key={index} className=''>


                        <div className=' bg-gray-50 rounded-3xl overflow-hidden p-14'>
                            <div className='w-full lg:w-1/2 p-4 mb-6'>
                                <h3 className='text-3xl font-semibold text-[#4eb3a9] mb-6'>{data?.title}</h3>
                                <p className='text-gray-900 text-6xl font-semibold'>{data?.description}</p>
                            </div>
                            <div className='flex items-start justify-start ' >
                                <div className='w-full lg:w-1/2 space-y-4  p-10'>
                                    <ul className='text-3xl font-medium text-black w-full lg:w-3/4 mr-auto space-y-6 mb-16'>
                                        <li>    Evaluate your portfolio
                                            v/s current market
                                        </li>
                                        <li>

                                            Check your portfolio for risk
                                            and diversification
                                        </li>
                                        <li>

                                            Get all your questions answered
                                            for free in a 1-1 call</li>
                                    </ul>
                                    <Link
                                        href={"/"}
                                        className="p-3.5 lg:px-8 font-bold text-center hidden lg:flex text-base border bg-gray-900 text-gray-50   w-1/2 rounded-full items-center justify-center"
                                    >
                                        Review my portfolio
                                        <IoIosArrowRoundForward className="text-2xl font-extrabold hidden lg:inline-block" />
                                    </Link>
                                </div>
                                <div className="w-full lg:w-1/2">
                                    <div className="h-96 bg-gray-100 text-center p-8 px-16 border border-gray-900 rounded-4xl w-full">
                                        <Image
                                            src="/graph.svg"
                                            width={800}
                                            height={800}
                                            alt=""
                                            className="object-cover m-auto rounded-4xl w-full h-full"
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
