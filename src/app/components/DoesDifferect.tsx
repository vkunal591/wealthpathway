import Image from "next/image";
import React from "react";

export default function DoesDifferect() {
  const sections = [
    {
      id: "01",
      title: "AI-Powered PMS Analytics",
      description:
        "Wealth1's cutting-edge technology transforms PMS and AIF investment decisions with data-driven insights.",
      imageUrl: "/aigraph.gif",
      imageAlt: "Graph Image",
      bgColor: "bg-gray-50",
      textColor: "text-black",
    },
    {
      id: "02",
      title: "Alternative Investments Access",
      description:
        "Direct access to top-performing PMS strategies and AIF opportunities through Wealth1's exclusive platform.",
      imageUrl: "/aianalist.svg",
      imageAlt: "Another Graph Image",
      bgColor: "bg-[#121212]",
      textColor: "text-gray-800",
    },
    {
      id: "03",
      title: "Expert PMS Guidance",
      description:
        "Dedicated relationship managers at Wealth1 provide personalized Alternative Investment advisory services.",
      imageUrl: "/graph.svg",
      imageAlt: "Graph Image",
      bgColor: "bg-gray-50",
      textColor: "text-black",
    }
    
  ];
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-16 bg-white font-[poppins] ">
      <h2 className="text-5xl lg:text-7xl text-gray-800 w-full m-auto text-center mb-16">
        How Wealth 1 does things differently
      </h2>

      <div className="contianer space-y-8">
        {sections.map((data: any, index: any) => (
          <div key={index} className=" flex justify-evenly">
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-4"
            >
              <span className="rounded-full bg-gray-200 p-3.5 h-14 w-14 text-black text-2xl">
                0{index + 1}
              </span>
              <span className="h-screen w-[1px] bg-gray-800 inline-block"></span>
            </div>
            <div className="w-10/12">
              <div className=" h-fit bg-gray-200 border shadow border-gray-200 rounded-3xl overflow-hidden  flex flex-col lg:flex-row justify-center items-center gap-4">
                <div className="w-full lg:w-1/2 p-10 flex flex-col items-start">
                  <h3 className="text-3xl font-bold text-black mb-8">
                    {data?.title}
                  </h3>
                  <p className="text-gray-700 text-5xl font-medium">
                    {data?.description}
                  </p>
                </div>
                <div className="w-full lg:w-1/2 lg:h- 2xl:h-auto p-4">
                  <Image
                    src={data?.image || "/graph.svg"}
                    width={800}
                    height={800}
                    alt="GIF Image"
                    className="object-cover h-full rounded-2xl  object-center"
                    unoptimized={true}
                  />
                </div>
              </div>

              <div className="bg-[#1a1616] rounded-3xl p-10 py-10 shadow">
                <h3 className="text-3xl font-bold text-gray-100 mb-5 ">
                  Traditional wealth firms
                </h3>
                <p className="text-gray-400 text-4xl font-medium w-3/5">
                  Your RM is busy searching for new clients & rarely tracks your
                  portfolio
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
