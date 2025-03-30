"use client"
import React, { useState, useEffect } from "react";

// Function to split the text into characters, including spaces, and wrap each one in a span element
const splitText = (text: any) => {
  return text.split("").map((char: any, index: any) => (
    <span key={index} className="char">
      {char === " " ? "\u00A0" : char}
    </span> // Handling space as non-breaking space
  ));
};

const Loader = () => {
  const [, setIsLoading] = useState(true); // Loader state

  useEffect(() => {
    // Simulate loading time for demonstration
    const timer = setTimeout(() => {
      setIsLoading(false); // Change to false to simulate loader finish
    }, 5000); // Set loader duration (5 seconds)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-[10000]">
      <div className="text-2xl text-black uppercase">
        {/* Call the function to split text into characters */}
        {splitText("Welcome to Wealth 1")}
      </div>
    </div>
  );
};

export default Loader;
