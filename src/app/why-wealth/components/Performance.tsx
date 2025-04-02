import Image from "next/image";
import React from "react";

export default function Performance() {
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16 ">
      <h2 className="capitalize text-4xl text-center  font-semibold text-gray-700 mb-8">
        Superior Performance
      </h2>
      <p className="text-base text-gray-500 mb-8 font-semibold text-center w-full">
        Data-driven strategies that consistently outperform traditional
        approaches      
      </p>
      <div className="w-full">
        <Image
          src={"/graf.jpg"}
          width={500}
          height={300}
          alt=""
          className="object-cover w-full h-full object-center"
        />
      </div>
    </div>
  );
}
