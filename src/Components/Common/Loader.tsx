import React, { useState, useEffect } from "react";

const Loader = () => {
  const [text, setText] = useState("");
  const fullText = "Weelcome to Wealth 1"; // Fixed spelling

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setText((prev) => prev + fullText[index]);
      index += 1;

      if (index === fullText.length-1) {
        clearInterval(interval);
      }
    }, 100); // Adjust the time for the typing speed

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  if(!text){
    return null
  }
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[10000]">
      <span className="text-3xl font-bold text-gray-50">{text}</span>
    </div>
  );
};

export default Loader;
