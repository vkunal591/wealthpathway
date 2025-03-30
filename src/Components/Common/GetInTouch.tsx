import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'

export default function GetInTouch() {
    return (
        <div className='max-w-8xl m-auto p-4 lg:p-16 font-[poppins]'>
            <div className='rounded-3xl overflow-hidden m-auto w-full flex flex-col lg:flex-row items-center bg-[#121212]'>
                <div className='p-4 lg:p-10 flex flex-col justify-between lg:w-4/5 lg:h-[80vh]'>
                    <h3 className='text-5xl lg:text-6xl text-gray-50 mb-4'>
                        Come visit us at any of our offices
                    </h3>
                    <Link
                        href={"/"}
                        className="p-3.5 px-6 lg:w-1/2 font-bold text-lg border border-gray-900 bg-gray-50 text-gray-800 rounded-full flex items-center justify-center"
                    >
                    Get in touch
                        <IoIosArrowRoundForward className="text-3xl font-extrabold" />
                    </Link>
                </div>
                <div className='h-[80vh]'>
                    <Image
                        src={`/map.svg`}
                        width={900}
                        height={900}
                        alt=""
                        className="object-cover h-full"
                    />
                </div>
            </div>
        </div>
    )
}
