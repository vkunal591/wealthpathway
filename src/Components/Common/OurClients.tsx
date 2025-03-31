"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Navigation } from "swiper/modules";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import ClientCard from "./ClientCard";

// Import Framer Motion
import { motion } from "framer-motion";

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
      position: "Director, Goldiee Group ",
    },
    {
      title: "AI-Powered PMS Analytics",
      description: "“Dezerv brought simplicity and clarity to my investments.”",
      video: "/session2.mp4",
      link: "/",
      bgColor: "bg-[#F97316]",
      textColor: "text-[#F97316]",
      name: "Sudeep Goenka",
      position: "CEO ",
    },
    {
      title: "AI-Powered PMS Analytics",
      description: "“Dezerv brought simplicity and clarity to my investments.” ",
      video: "/session3.mp4",
      link: "/",
      bgColor: "bg-[#F97316]",
      textColor: "text-[#F97316]",
      name: "Sudeep Goenka",
      position: "CEO ",
    },
  ];

  return (
    <div className="max-w-8xl mx-auto p-4 lg:p-16 font-[poppins]">
      <div className="relative">
        <Swiper
          spaceBetween={10}
          slidesPerView={2} // Enables auto width for slides
          loop={true} // Optional: to make the swiper loop
          navigation={false}
          modules={[Navigation]} // Removed Pagination module
          className="h-full w-full"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
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
            <SwiperSlide
              key={index}
              className="w-full sm:w-[calc(100%-50px)] lg:mx-2"
            >
              {/* Apply Framer Motion to each client card for animations */}
              <motion.div
                initial={{ opacity: 0, x: -100 }} // Start from the left
                whileInView={{ opacity: 1, x: 0 }} // Move to the original position when in view
                exit={{ opacity: 0, x: -100 }} // Move to the left when out of view
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 25,
                  delay: index * 0.2, // Slight delay between each card animation
                  
                }}
                className="p-4"
                viewport={{ once: false }} // Trigger when scrolls in or out of view
              >
                <ClientCard index={index} data={data} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Arrows */}
        <div className="flex justify-between top-1/2 absolute z-10 space-x-4 w-full">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="p-3 rounded-full bg-gray-50 border border-gray-300 transition"
          >
            <AiOutlineLeft className="text-xl text-gray-800" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="p-3 rounded-full bg-gray-50 border border-gray-300 transition"
          >
            <AiOutlineRight className="text-xl text-gray-800" />
          </button>
        </div>
      </div>
    </div>
  );
}
