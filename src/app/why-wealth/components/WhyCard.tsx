import Image from 'next/image'
import React from 'react'

export default function WhyCard() {
    return (
        <div className='max-w-7xl m-auto p-4 lg:p-16 font-[poppins]'>
            <h2 className='capitalize text-4xl  font-semibold text-gray-700 mb-8'>Why Wealth 1</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                {
                    Array(3).fill(null).map((data: any, index: any) => (
                        <div key={index} className='border border-gray-300 shadow hover:shadow-2xl p-4 py-6 '>
                            <Image
                                src={"/logo.png"}
                                width={900}
                                height={900}
                                alt=''
                                className='w-20 h-20'
                            />
                            <h2 className='text-lg font-bold mb-3 text-gray-700'>Investor-First Approach</h2>
                            <p className='text-sm text-gray-500'>Experience personalized support and guidance throughout your investment journey with our dedicated relationship managers.</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
