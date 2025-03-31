"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Navigation } from "swiper/modules";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

// Import Framer Motion
import { motion } from "framer-motion";
import Image from "next/image";
import { IoLogoLinkedin } from "react-icons/io";

export default function ClientProfileCard() {
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
      description:
        "“Dezerv brought simplicity and clarity to my investments.” ",
      video: "/session3.mp4",
      link: "/",
      bgColor: "bg-[#F97316]",
      textColor: "text-[#F97316]",
      name: "Sudeep Goenka",
      position: "CEO ",
    },
    {
      title: "AI-Powered PMS Analytics",
      description:
        "“Dezerv brought simplicity and clarity to my investments.” ",
      video: "/session3.mp4",
      link: "/",
      bgColor: "bg-[#F97316]",
      textColor: "text-[#F97316]",
      name: "Sudeep Goenka",
      position: "CEO ",
    },

    {
      title: "AI-Powered PMS Analytics",
      description:
        "“Dezerv brought simplicity and clarity to my investments.” ",
      video: "/session3.mp4",
      link: "/",
      bgColor: "bg-[#F97316]",
      textColor: "text-[#F97316]",
      name: "Sudeep Goenka",
      position: "CEO ",
    },
    {
      title: "AI-Powered PMS Analytics",
      description:
        "“Dezerv brought simplicity and clarity to my investments.” ",
      video: "/session3.mp4",
      link: "/",
      bgColor: "bg-[#F97316]",
      textColor: "text-[#F97316]",
      name: "Sudeep Goenka",
      position: "CEO ",
    },
  ];

  return (
    <div className="mx-auto">
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
            320: {
              slidesPerView: 1, // On mobile, show one slide at a time
              spaceBetween: 10, // Space between slides
            },
            640: {
              slidesPerView: 2, // On medium screens, show one full slide and half of the next slide
              spaceBetween: 20, // More space between slides
            },
            900: {
              slidesPerView: 3, // On medium screens, show one full slide and half of the next slide
              spaceBetween: 20, // More space between slides
            },
          }}
        >
          {clients.map((data, index) => (
            <SwiperSlide key={index} className="w-full">
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
                viewport={{ once: false }} // Trigger when scrolls in or out of view
              >
                <div className="rounded-2xl w-full overflow-hidden bg-[#1d1d1d]">
                  <div className="relative">
                    <Image
                      src={"/clientpic.png"}
                      width={900}
                      height={900}
                      alt=""
                      className="object-cover "
                    />
                    <div className="flex items-center justify-between p-4 absolute  bottom-0 w-full">
                      <div>
                        <h2 className="text-xl uppercase text-gray-50">Jigme Butia</h2>
                        <p className="text-gray-300 text-sm">Client Partmer</p>
                      </div>
                      <IoLogoLinkedin className="text-3xl text-gray-300" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h2 className="text-gray-50 text-lg">Managing portfolio for</h2>
                    <ul className="list-disc p-3 lg:px-4 space-y-4 text-gray-300 text-sm">
                      <li>Founder of one of the largest healthcare chains</li>
                      <li>CEO of well known multi-national company</li>
                      <li>Founder of India&apos;s well-known unicorn</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
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
