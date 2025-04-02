import React, { useEffect, useState } from "react";

export default function ChangeTextColor({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const [textColors, setTextColors] = useState<string[]>([]);
  const textRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect();
        const scrollPercent = Math.max(
          0,
          Math.min(
            1,
            (window.innerHeight / 0.8 - rect.top) / window.innerHeight
          )
        );
        console.log(window?.innerHeight, rect.top, scrollPercent);
        const words = text.split(" ") || [];
        const newColors = words.map((_, i) =>
          i / words.length < scrollPercent ? "text-blue-900" : "text-gray-400"
        );
        setTextColors(newColors);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [text]);

  return (
    <p
      className={`text-xl md:text-xl font-semibold lg:w-4/5 m-auto text-center ${
        className || "mb-16"
      }`}
      ref={textRef}
    >
      {text.split(" ").map((word, index) => (
        <span
          key={index}
          className={`${textColors[index]} transition-colors duration-300`}
        >
          {" "}
          {word === "<br>" ? (
            <br className="bg-transparent border-transparent my-4" />
          ) : (
            word
          )}
        </span>
      ))}
    </p>
  );
}
