import Link from 'next/link'
import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'

export default function Navbar() {
    const Navigation = [
        {
            label: "Peoduct",
            link: "/"
        },
        {
            label: "Our Team",
            link: "/"
        }
    ]
    return (
        <nav className='flex item-center justify-between bg-[#0000008c] z-[5000] text-green-50 w-11/12 m-auto p-4 rounded-xl fixed left-1/2 -translate-x-1/2 top-7'>
            <div className='w-1/2 lg:w-1/5 flex items-center justify-start  '>
                <h1 className='text-xl font-semibold'>Wealth Path Way</h1>
            </div>
            <div className='w-3/5 items-center justify-between gap-4 hidden lg:flex'>

                <ul className='w-4/5 flex items-center justify-start gap-6'>
                    {
                        Navigation?.map((data, index) => (
                            <Link key={index} href={data?.link} >
                                <li>
                                    {data?.label}
                                </li>
                            </Link>
                        ))
                    }
                </ul>

            </div>
            <div className='w-1/2 lg:w-2/5 flex justify-center items-center'>
                    <Link href={"/"} className='w-1/3 hidden lg:inline-block'>
                        Member Login
                    </Link>
                <Link href={"/"} className='p-3 lg:px-10 font-bold text-center  text-base border bg-gray-50 text-gray-800 rounded-full flex item-center justify-center'>
                    Review my portfolio
                    <IoIosArrowRoundForward className='text-2xl font-extrabold hidden lg:inline-block' />
                </Link>
            </div>
        </nav>
    )
}
