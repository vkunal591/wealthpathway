import Image from 'next/image'
import React from 'react'

export default function WhyChooseUs() {
    const data =[
        {
            image:"/rupee.svg",
            value:"₹10,000 cr+",
            label:"Assets managed in 2 years"
        },
        {
            image:"/grow.svg",
            value:"20.48% TWRR",
            label:"Returns since inception"
        },
        {
            image:"/percent.svg",
            value:"0% Fixed Fee",
            label:"Pay only on profits made"
        }
    ]
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16 font-[poppins] text-gray-800">
      <h2 className="text-3xl lg:text-7xl w-full lg:w-3/5 m-auto text-center mb-8">
        Why Choose Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-[poppins]">
        {data
          .map((item, index) => (
            <div key={index} className="border border-gray-300 shadow rounded  p-4 w-full h-56  flex flex-col items-center justify-center">
              <div className="w-full">
                <Image
                  src={item?.image || "/logo.png"}
                  width={900}
                  height={900}
                  alt=""
                  className="object-contain m-auto w-20 h-20 object-center"
                />
              </div>
              <div className='text-center'>
                <h2 className="text-2xl text-gray-700 mb-2 font-semibold">{item?.value}</h2>
                <p className="text-sm text-gray-500 mb-4">{item?.label}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
