import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoCallOutline } from "react-icons/io5";

export default function GetInTouch() {
  return (
    <div className="max-w-8xl m-auto p-4 lg:p-16">
      <div className="rounded-3xl overflow-hidden m-auto w-full flex flex-col lg:flex-row items-center bg-[#121212]">
        <div className="p-4 lg:p-10 flex flex-col justify-start lg:w-4/5 lg:h-[80vh]">
          <h3 className="text-2xl lg:text-5xl text-gray-50 mb-4">
            Transform Your Portfolio with Wealth1
          </h3>
          <p className="text-lg  text-gray-500 mb-20 font-semibold text-left relative">
            Connect with our PMS and AIF experts to explore Alternative
            Investment opportunities
          </p>
          <Link
            href={"/"}
            className="p-3.5 px-6 lg:w-2/3 font-bold text-lg border border-gray-900 bg-gray-50 text-blue-900 rounded-full flex items-center justify-center"
          >
            <IoCallOutline className="text-2xl mr-2 font-extrabold" />
            Schedule a Consultation
          </Link>
        </div>
        <div className="h-[80vh]">
          <Image
            src={`/map.svg`}
            width={900}
            height={900}
            alt=""
            className="object-cover h-full"
          />
        </div>
      </div>
    </div>
  );
}
