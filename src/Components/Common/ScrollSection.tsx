import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const sections = [
  "Problem",
  "Solution",
  "Returns",
  "Testimonials",
  "Get Started",
  "Fees",
];

export default function ScrollSections() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling.current) return;

      const container = containerRef.current;
      if (!container) return;

      const sectionElements = container.querySelectorAll("section");
      let index = 0;
      sectionElements.forEach((section, i) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2) {
          index = i;
        }
      });

      setActiveIndex(index);
    };

    const container = containerRef.current;
    container?.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);

  const smoothScrollTo = (index: number) => {
    const section = document.getElementById(`section-${index}`);
    if (section) {
      isScrolling.current = true;
      section.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => {
        isScrolling.current = false;
      }, 600);
    }
  };

  return (
    <div className="relative w-full h-screen flex flex-col items-center">
      {/* Navigation Bar with Active Indicator */}
      <div className="w-full bg-black/90 p-4 flex justify-center z-50">
        <div className="flex space-x-6 relative">
          {sections.map((title, i) => (
            <button
              key={i}
              onClick={() => smoothScrollTo(i)}
              className={cn(
                "relative text-gray-400 transition-colors duration-300",
                activeIndex === i ? "text-white font-bold" : ""
              )}
            >
              {title}
              {activeIndex === i && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 bottom-[-2px] h-[2px] bg-white"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Smooth Scrollable Section Container */}
      <div
        ref={containerRef}
        className="relative w-full h-full overflow-y-auto snap-y snap-mandatory scroll-smooth scrollbar-hide"
      >
        {sections.map((title, i) => (
          <section
            key={i}
            id={`section-${i}`}
            className="h-screen flex items-center justify-center bg-black text-white border-b border-gray-700 snap-start"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-4xl font-bold">{title}</h1>
              <p className="mt-4 text-gray-400">Content for {title}</p>
            </motion.div>
          </section>
        ))}
      </div>
    </div>
  );
}
