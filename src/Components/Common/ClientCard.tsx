"use client";
import React, { useRef, useEffect } from "react";

export default function ClientCard({ data, index }: any) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => {
        console.error("Error playing video:", error);
      });
    }
  }, []);

  return (
    <div
      key={index}
      className="h-[80vh] 2xl:h-auto w-full scale-x-100 capitalize bg-gray-50 rounded-3xl border-2 border-gray-400 shadow flex flex-col lg:flex-row items-center justify-center text-center overflow-hidden"
    >
      <div className="w-full lg:w-2/5 h-76 lg:h-full relative">
        <video
          ref={videoRef}
          className="w-full object-cover h-full rounded-lg"
          autoPlay
          muted
          loop
        >
          <source src={data?.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="mt-4 px-4 w-full lg:w-3/5 h-[40vh]">
        <p className="text-gray-800 text-left  text-4xl md:text-5xl font-semibold mb-8">
          {data?.description ||
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptatibus totam nisi sapiente laudantium asperiores culpa officiis molestias laboriosam amet consectetur inventore placeat unde in odio, obcaecati quibusdam et saepe?"}
        </p>
        <div className="mt-4 text-left ">
          <h2 className="text-xl text-gray-900 font-semibold">
            {data?.name || "Name"}
          </h2>
          <h3 className="text-sm md:text-base text-gray-8000">
            {data?.position || "Position"}
          </h3>
        </div>
      </div>
    </div>
  );
}
