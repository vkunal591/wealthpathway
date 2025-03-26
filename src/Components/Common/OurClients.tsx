"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { Navigation } from "swiper/modules";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import ClientCard from "./ClientCard";

export default function OurClients() {
    const swiperRef = useRef<any>(null);

    const clients = [
        {
            title: "AI-Powered PMS Analytics",
            description: "“Dezerv brought simplicity and clarity to my investments.”",
            video: "/session1.mp4",
            link: "/",
            bgColor: "bg-[#F97316]",
            textColor: "text-[#F97316]",
            name: "Sudeep Goenka",
            position: "Director, Goldiee Group "
        },
        {
            title: "AI-Powered PMS Analytics",
            description: "“Dezerv brought simplicity and clarity to my investments.”",
            video: "/session2.mp4",
            link: "/",
            bgColor: "bg-[#F97316]",
            textColor: "text-[#F97316]",
            name: "Sudeep Goenka",
            position: "CEO "
        },
        {
            title: "AI-Powered PMS Analytics",
            description: "“Dezerv brought simplicity and clarity to my investments.” ",
            video: "/session3.mp4",
            link: "/",
            bgColor: "bg-[#F97316]",
            textColor: "text-[#F97316]",
            name: "Sudeep Goenka",
            position: "CEO "
        }
    ];

    return (
        <div className="container max-w-8xl mx-auto p-4 lg:p-10">
            <div className="relative">
                <Swiper
                    spaceBetween={10}
                    slidesPerView={2} // Enables auto width for slides
                    loop={true} // Optional: to make the swiper loop
                    navigation={false}
                    modules={[Navigation]} // Removed Pagination module
                    className="h-full"
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    breakpoints={{
                        // Add breakpoints for different screen sizes
                        320: {
                          slidesPerView: 1, // On mobile, show one slide at a time
                          spaceBetween: 10, // Space between slides
                        },
                        640: {
                          slidesPerView: 1.5, // On medium screens, show one full slide and half of the next slide
                          spaceBetween: 20, // More space between slides
                        },
                    
                      }}
                >
                    {clients.map((data, index) => (
                        <SwiperSlide key={index} className="w-full sm:w-[calc(100%-50px)] mx-2">
                            {/* The slide width for the first full card and the half-width for the next slide */}
                            <ClientCard index={index} data={data} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation Arrows */}
                <div className="flex justify-between top-1/2 absolute z-10 space-x-4 w-full">
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="p-3 rounded-full bg-gray-50 transition"
                    >
                        <AiOutlineLeft className="text-xl text-gray-800" />
                    </button>
                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className="p-3 rounded-full bg-gray-50 transition"
                    >
                        <AiOutlineRight className="text-xl text-gray-800" />
                    </button>
                </div>
            </div>
        </div>
    );
}
