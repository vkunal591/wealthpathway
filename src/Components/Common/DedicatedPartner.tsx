import React from "react";
import { FaUserGroup } from "react-icons/fa6";
import { GrSecure } from "react-icons/gr";
import { GoGoal } from "react-icons/go";

export default function DedicatedPartner() {
  return (
    <div className="max-w-8xl m-auto p-4 lg:p-16">
      <div className="flex flex-col items-start w-full m-auto">
        <div className="w-full">
          <p className="text-sm text-gray-500 mb-2 font-semibold text-center">
            Why Choose PMS with Wealth1
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold  text-gray-800 mr-auto text-center mb-4 ">
            Dedicated client partners you can trust
          </h2>
          <p className="text-base text-gray-500 mb-8 font-semibold text-center w-full">
            Experience the evolution of sophisticated investing with Wealth1\&apos;s
            PMS and AIF solutions
          </p>
        </div>
        <ul className=" w-full lg:w-4/5 m-auto text-gray-800 grid grid-cols-1 lg:grid-cols-2 gap-0 mb-16">
          <li className="flex flex-col items-center text-xl gap-2 font-semibold">
            <span className="w-32 h-32 flex items-center justify-center font-semibold text-2xl rounded-full relative border-4 border-double border-gray-900 bg-white">
              {/* <span className="inlne-block w-[1px] h-10 bg-gray-500 absolute left-1.5 top-9 rounded-full"></span> */}
              1.9L+
            </span>
            PMS
            <p className="text-sm text-gray-500 mb-2 font-semibold text-center relative">
              Investors in India
            </p>
          </li>
          <li className="flex flex-col items-center text-xl gap-2 font-semibold">
            <span className="w-32 h-32 flex items-center justify-center font-semibold text-2xl rounded-full relative border-4 border-double border-gray-900 bg-white">
              {/* <span className="inlne-block w-[1px] h-10 bg-gray-500 absolute left-1.5 top-9 rounded-full"></span> */}
              ₹36.6L
            </span>
            Cr
            <p className="text-sm text-gray-500 mb-2 font-semibold text-center relative">
              Assets Under Management
            </p>
          </li>
        </ul>

        <ul className=" w-full lg:w-4/5 m-auto mb-4 text-gray-800 grid grid-cols-1 lg:grid-cols-3 gap-16">
          <li className="flex flex-col items-center text-xl gap-2 font-semibold">
            <span className="w-32 h-32 flex items-center justify-center font-semibold text-6xl rounded-full relative border-4 border-double border-gray-900 bg-white">
              {/* <span className="inlne-block w-[1px] h-10 bg-gray-500 absolute left-1.5 top-9 rounded-full"></span> */}
              <FaUserGroup />
            </span>
            Personalization
            <p className="text-sm text-gray-500 mb-2 font-semibold text-center relative">
              Tailored portfolios that align with your goals, risk appetite, and
              time horizon
            </p>
          </li>
          <li className="flex flex-col items-center text-xl gap-2 font-semibold">
            <span className="w-32 h-32 flex items-center justify-center font-semibold text-6xl rounded-full relative border-4 border-double border-gray-900 bg-white">
              {/* <span className="inlne-block w-[1px] h-10 bg-gray-500 absolute left-1.5 top-9 rounded-full"></span> */}
              <GrSecure />
            </span>
            Security & Transparency
            <p className="text-sm text-gray-500 mb-2 font-semibold text-center relative">
              Highly regulated with assets ring-fenced by custodians and
              stringent governance
            </p>
          </li>
          <li className="flex flex-col items-center text-xl gap-2 font-semibold">
            <span className="w-32 h-32 flex items-center justify-center font-semibold text-6xl rounded-full relative border-4 border-double border-gray-900 bg-white">
              {/* <span className="inlne-block w-[1px] h-10 bg-gray-500 absolute left-1.5 top-9 rounded-full"></span> */}
              <GoGoal />
            </span>
            Aligned Interests
            <p className="text-sm text-gray-500 mb-2 font-semibold text-center relative">
              High-conviction strategies executed by dedicated experts focused
              on long-term wealth creation
            </p>
          </li>
        </ul>
      </div>

      {/* <ClientProfileCard /> */}
    </div>
  );
}
