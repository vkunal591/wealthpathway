import Link from 'next/link'
import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'

export default function HeroSection() {
    return (
        <div className='p-4 lg:p-16 flex flex-col justify-end items-start h-[80vh]'>
            <h1 className='text-4xl lg:text-8xl font-semibold text-gray-50 mb-10'>India&apos;s Premier <br /> Alternative Investments Platform</h1>
            <div className='border-[2px] border-gray-50 rounded-full'>
                <Link href={"/"} className='p-3.5 px-6 font-bold text-lg border border-gray-900 bg-gray-50 text-gray-800 rounded-full flex item-center justify-center'>
                    Start your journey
                    <IoIosArrowRoundForward className='text-3xl font-extrabold' />
                </Link>
            </div>

        </div>
    )
}
