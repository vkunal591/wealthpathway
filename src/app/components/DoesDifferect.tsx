import Image from "next/image";
import React from "react";

export default function DoesDifferect() {
  const sections = [
    {
      id: "01",
      title: "Wealth",
      description: "We track the market’s impact on your portfolio daily",
      imageUrl: "/graph.svg",
      imageAlt: "Graph Image",
      bgColor: "bg-gray-50",
      textColor: "text-black",
    },
    {
      id: "02",
      title: "Traditional wealth firms",
      description:
        "Your RM is busy searching for new clients & rarely tracks your portfolio",
      imageUrl: "/graph.svg",
      imageAlt: "Another Graph Image",
      bgColor: "bg-[#121212]",
      textColor: "text-gray-800",
    },
    {
      id: "03",
      title: "Wealth",
      description: "We track the market’s impact on your portfolio daily",
      imageUrl: "/graph.svg",
      imageAlt: "Graph Image",
      bgColor: "bg-gray-50",
      textColor: "text-black",
    },
    {
      id: "04",
      title: "Traditional wealth firms",
      description:
        "Your RM is busy searching for new clients & rarely tracks your portfolio",
      imageUrl: "/graph.svg",
      imageAlt: "Another Graph Image",
      bgColor: "bg-[#121212]",
      textColor: "text-gray-800",
    },
    {
      id: "05",
      title: "Wealth",
      description: "We track the market’s impact on your portfolio daily",
      imageUrl: "/graph.svg",
      imageAlt: "Graph Image",
      bgColor: "bg-gray-50",
      textColor: "text-black",
    },
    {
      id: "06",
      title: "Traditional wealth firms",
      description:
        "Your RM is busy searching for new clients & rarely tracks your portfolio",
      imageUrl: "/graph.svg",
      imageAlt: "Another Graph Image",
      bgColor: "bg-[#121212]",
      textColor: "text-gray-800",
    },
    {
      id: "07",
      title: "Wealth",
      description: "We track the market’s impact on your portfolio daily",
      imageUrl: "/graph.svg",
      imageAlt: "Graph Image",
      bgColor: "bg-gray-50",
      textColor: "text-black",
    },

    // Add more sections here as needed
  ];
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-40 bg-white">
      <h2 className="text-5xl lg:text-7xl text-gray-800 w-full m-auto text-center mb-24">
        How Dezerv does things differently
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
                  <p className="text-gray-900 text-5xl font-medium">
                    {data?.description}
                  </p>
                </div>
                <div className="w-full lg:w-1/2 lg:h-[70vh]">
                  <Image
                    src={"/graph.svg"}
                    width={800}
                    height={800}
                    alt=""
                    className=" object-cover object-center"
                  />
                </div>
              </div>

              <div className="bg-[#1a1616] rounded-3xl p-10 py-10 shadow">
                <h3 className="text-3xl font-bold text-gray-100 mb-5 ">
                  Traditional wealth firms
                </h3>
                <p className="text-gray-300 text-4xl font-medium w-3/5">
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
