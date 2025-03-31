import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsTwitter, BsYoutube } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { ImInstagram } from 'react-icons/im'
import { IoLogoLinkedin } from 'react-icons/io'

export default function Footer() {
    return (
        <div className='p-4 lg:p-20 bg-white text-gray-800'>
            <div className='flex justify-between items-center mb-6'>
                <Link href={"/"}>
                    <Image
                        src={"/logo2.png"}
                        width={150}
                        height={70}
                        unoptimized
                        priority
                        alt="PMS & AIF Investments"
                        className="h-16 lg:h-auto "
                    />
                </Link>
                <div className='flex items-center gap-4 text-2xl text-gray-800'>

                    <Link href={"/"}>
                        <IoLogoLinkedin className='text-3xl' />
                    </Link>

                    <Link href={"/"}>
                        <FaFacebook />
                    </Link>

                    <Link href={"/"}>
                        <ImInstagram />
                    </Link>

                    <Link href={"/"}>
                        <BsTwitter />
                    </Link>

                    <Link href={"/"}>
                        <BsYoutube />
                    </Link>
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-5'>
                <div className='col-span-2 mr-auto lg:w-4/5'>
                    <p className='text-3xl font-medium mb-4'>
                        You are building India’s future, we would like to build yours.
                    </p>
                    <div className='text-lg mb-8'>
                        Our weekly expert newsletter on stories that matter to your money.
                    </div>
                    <div className='rounded-full lg:rounded-l-full  border flex mb-4'>
                        <input type="text" className='outline-0 p-1 px-4 w-4/5 text-white' placeholder='Email address' />
                        <Link
                            href={"/"}
                            className="p-2 lg:px-8 font-bold text-center scale-108  lg:flex text-base border bg-gray-50 text-gray-800 rounded-full items-center justify-center"
                        >
                            Subscribe

                        </Link>
                    </div>
                </div>
                <div className='flex flex-col justify-start items-start space-x-2 space-y-4 mb-4'>
                    <h4 className='text-gray-800 font-semibold'>Knowledge Repository</h4>
                    <Link href={"/"}>
                        Bond
                    </Link>
                    <Link href={"/"}>
                        IPA
                    </Link>
                    <Link href={"/"}>
                        Mutual Funds
                    </Link>
                    <Link href={"/"}>
                        Portfolio Managements Services
                    </Link>
                    <Link href={"/"}>
                        Wealth Monitor
                    </Link>
                </div>


                <div className='flex flex-col justify-start items-start space-y-4 mb-4'>
                    <h4 className='text-gray-800 font-semibold'>Knowledge Repository</h4>
                    <Link href={"/"}>
                        Team
                    </Link>
                    <Link href={"/"}>
                        Career
                    </Link>
                    <Link href={"/"}>
                        FAQs
                    </Link>
                    <Link href={"/"}>
                        Blog
                    </Link>
                    <Link href={"/"}>
                        Investment Philosophy
                    </Link>
                </div>


                <div className='flex flex-col justify-start items-start text-sm space-y-4 mb-4'>
                    <h4 className='text-gray-800 font-semibold'>Legal</h4>
                    <Link href={"/"}>
                        Contact
                    </Link>
                    <Link href={"/"}>
                        Disclaimer
                    </Link>
                    <Link href={"/"}>
                        ODR Portal
                    </Link>
                    <Link href={"/"}>
                        Privecy
                    </Link>
                    <Link href={"/"}>
                        Return Cancellation
                    </Link>
                    <Link href={"/"}>
                        Security
                    </Link>
                    <Link href={"/"}>
                        Terms & Disclosure
                    </Link>
                    <Link href={"/"}>
                        Kyc Check</Link>
                    <Link href={"/"}>
                        Scheme document</Link>
                    <Link href={"/"}
                    > Fraud Notice</Link>
                </div>
            </div>


            <div className='rounded-3xl flex flex-col lg:flex-row items-center justify-center gap-6 py-10 my-16 bg-gray-800 p-8 '>
                {["/iso.svg", "/secure.svg", "/privet.svg"].map((data, index) => (
                    <div key={index}>
                        <Image
                            src={data}
                            width={800}
                            height={800}
                            alt=''
                            className='w-10 h-10 m-auto rounded-full mb-2'
                        />
                        <h3 className='text-xl text-center text-gray-50'>ISO 27001 Certified</h3>
                        <p className='w-4/5 text-sm text-center m-auto text-gray-300'>Compliant with international data standards</p>
                    </div>))}

            </div>

            <div className='space-y-4'>
                <p>
                    ©2021-2025 Welth 1. All Rights Reserved
                </p>
                <p>With Wealth1&apos;s expertise in PMS and AIF, investors can access India&apos;s most promising Alternative Investment opportunities with confidence.</p>
            </div>
        </div>
    )
}
