"use client";
import Image from "next/image";
import React from "react";
import ChangeTextColor from "./ChangeTextColor";

export default function ColorChangeText({ text }: { text: string[] }) {
  return (
    <div className=" flex flex-col items-center justify-center bg-white text-center p-4 lg:p-16 lg:pb-4">
      <p className="text-sm text-gray-500 mb-2 font-semibold relative">
        The Wealth1 Story
      </p>

      <h2 className="text-2xl lg:text-4xl text-blue-900 w-full lg:w-3/5 font-semibold m-auto text-center mb-8">
        Unlocking Alpha Through <br /> PMS & AIF
      </h2>

      {text &&
        text?.map((text, index) => <ChangeTextColor key={index} text={text} />)}

      <div className="w-full lg:w-3/5 justify-start items-center gap-4 hidden">
        <Image
          src={"/logofinal.png"}
          width={800}
          height={800}
          alt="profile"
          className="rounded-full w-16 h-16"
        />
        <div className="text-left">
          <h2 className="text-3xl font-semibold text-blue-900">
            Sarah Johnson
          </h2>
          <p className="text-gray-600 font-semibold text-xl">
            Chief Investment Officer
          </p>
        </div>
      </div>
    </div>
  );
}
