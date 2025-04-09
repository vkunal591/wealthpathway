import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  {
    id: "intro",
    title: "Introduction",
    content:
      "This is the introduction paragraph. It sets the stage for what's to come.",
  },
  {
    id: "features",
    title: "Features",
    content:
      "Here are the key features. Each one is designed to make your life easier.",
  },
  {
    id: "pricing",
    title: "Pricing",
    content:
      "Our pricing is simple and transparent, designed to give you the best value.",
  },
  {
    id: "faq",
    title: "FAQ",
    content:
      "Got questions? We've got answers to the most frequently asked ones.",
  },
];

const TextNavigator = () => {
  const [activeTab, setActiveTab] = useState("intro");

  const activeContent = sections.find((s) => s.id === activeTab)?.content;

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Top Nav */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveTab(section.id)}
            className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
              activeTab === section.id
              ?"border-b-[1.5px] boeder-[#B28C3D] text-[#B28C3D]":
              "border-[#0A2B58] text-[#0A2B58]"
                // ? "bg-gradient-to- from-[#B28C3D] via-[#B28C3D]/95 to-[#B28C3D]/50  text-gray-50 font-bold shadow-md"
                // : "bg-gradient-to- from-[#B28C3D]/20 via-[#B28C3D]/20 to-[#B28C3D]/10  border-gray-50 text-[#0A2B58]"
            }`}
          >
            {section.title}
          </button>
        ))}
      </div>

      {/* Animated Paragraph Content */}
      <div className="min-h-[120px]">
        <AnimatePresence mode="wait">
          <motion.p
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-gray-800 text-sm"
          >
            {activeContent}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TextNavigator;
