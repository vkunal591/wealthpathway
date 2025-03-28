import Image from 'next/image'
import React from 'react'
import { IoArrowForward } from 'react-icons/io5'

export default function InsightClients() {
    return (
        <div className='max-w-8xl m-auto p-4 lg:p-24'>
            <h2 className='text-3xl lg:text-7xl w-full lg:w-4/5 m-auto text-center mb-24'>
                Insights for our clients
            </h2>

            <div className='flex items-center gap-6'>

                {
                    Array(3).fill(null).map((data, index) => (

                        <div key={index} className="rounded-3xl h-96 w-full overflow-hidden bg-[#1d1d1d] relative">
                            <Image
                                src={`/insight${index + 1}.png`}
                                width={900}
                                height={900}
                                alt=""
                                className="object-cover h-full "
                            />
                            <div className="flex flex-col items- justify-between p-4 absolute h-full  bottom-0 w-full">
                                <div className='w-full text-center pt-8'>
                                    <h2 className="text-xl text-gray-900 font-semibold">The financial and business impact of sales on e-commerce giants in India
                                    </h2>
                                </div>

                                <div className='rounded-full bg-gray-50 p-3 ml-auto'>
                                    <IoArrowForward className="text-xl text-gray-900 " />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
