import React from 'react'
import ClientProfileCard from './ClientProfileCard'

export default function DedicatedPartner() {
    return (
        <div className='max-w-8xl m-auto p-4'>
            <div className='flex items-start w-full lg:w-5/6 m-auto'>
                <h2 className='text-3xl lg:text-7xl w-full lg:w-3/5 mr-auto text-left mb-24'>
                    Dedicated client partners you can trust
                </h2>
                <ul className='space-y-20 w-full lg:w-2/5'>
                    <li className='flex items-center text-xl gap-2'>
                        <span className='w-5 h-5 inline-block rounded-full relative border-4 border-double border-gray-900 bg-white'>
                            <span className='inlne-block w-[1px] h-10 bg-gray-500 absolute left-1.5 top-9 rounded-full'>
                            </span>
                        </span>
                        Understant you goal batter
                    </li>
                    <li className='flex items-center text-xl gap-2'>
                        <span className='w-5 h-5 inline-block rounded-full relative border-4 border-double border-gray-900 bg-white'>
                            <span className='inlne-block w-[1px] h-10 bg-gray-500 absolute left-1.5 top-9 rounded-full'>
                            </span>
                        </span>
                        Craft your solution to your needs
                    </li>
                    <li className='flex items-center text-xl gap-2'>
                        <span className='w-5 h-5 inline-block rounded-full relative border-4 border-double border-gray-900 bg-white'>
                        </span>
                        Keep you updated all the time
                    </li>
                </ul>
            </div>



            <ClientProfileCard />

        </div >
    )
}
