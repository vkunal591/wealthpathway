import React, { useEffect, useRef, useState } from "react";

interface NumberCounterProps {
  from?: number;
  to: number;
  duration?: number; // in milliseconds
  decimals?: number; // how many decimals to show
  className?: string;
}

const NumberCounter: React.FC<NumberCounterProps> = ({
  from = 0,
  to,
  duration = 1000,
  decimals = 0,
  className = "text-[#0A2B58] text-4xl",
}) => {
  const [count, setCount] = useState(from);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const startTimestamp = useRef<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animate();
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const animate = () => {
    const step = (timestamp: number) => {
      if (!startTimestamp.current) startTimestamp.current = timestamp;
      const progress = timestamp - startTimestamp.current;
      const progressRatio = Math.min(progress / duration, 1);
      const currentNumber = from + (to - from) * progressRatio;

      setCount(currentNumber);

      if (progress < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  return (
    <span ref={ref} className={className}>
      {count.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
    </span>
  );
};

export default NumberCounter;
