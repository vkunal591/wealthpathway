import React from "react";
import ChartComponent from "./ChartComponent";

export default function Performance() {
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16  lg:pb-4">
      <h2 className="capitalize text-4xl text-center  font-semibold text-[#0A2B58]  mb-4">
        Superior Performance
      </h2>
      <p className="text-base text-gray-500 mb-8 text-center w-full">
        Data-driven strategies that consistently outperform traditional
        approaches      
      </p>
      <div className="w-full">
        {/* <Image
          src={"/graf.jpg"}
          width={500}
          height={300}
          alt=""
          className="object-cover w-full h-full object-center"
        /> */}
        <ChartComponent />
      </div>
    </div>
  );
}
