import React from "react";
import Image from "next/image";
import { LiaLinkedin } from "react-icons/lia";
import { BsTwitter } from "react-icons/bs";
import Link from "next/link";


export default function OurFounders({ title, data }: any) {
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16 font-[poppins]">
      <h2 className="capitalize text-4xl  font-semibold text-gray-700 mb-8">
        {title}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {data &&
          data.map((content: any, index: any) => (
            <div
              key={index}
              className="rounded-3xl h-96 w-full overflow-hidden bg-[#1d1d1d] relative"
            >
              <Image
                src={content?.image || `/clientpic.png`}
                width={900}
                height={900}
                alt=""
                className="object-cover h-full "
              />
              <div className="flex flex-col items- justify-between bg-[#181818] p-4 absolute    bottom-0 w-full">
                <div className="w-full text-center flex justify-between items-center">
                  <p className="text-base text-gray-500 ">{content?.position}</p>
                  <div className="text-blue-500 flex gap-4">
                    <Link href={"/"}>
                      <BsTwitter />
                    </Link>
                    <Link href={"/"}>
                      <LiaLinkedin />
                    </Link>
                  </div>
                </div>

                <div className="py-3 mr-auto">
                  <h2 className="text-xl text-gray-100 font-semibold">
                    {content?.name}
                  </h2>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
