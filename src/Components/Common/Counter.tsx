'use client';

import { useEffect, useState } from 'react';

interface AutoCounterProps {
  target: number;
  duration?: number; // duration in ms
}

export default function Counter({ target, duration = 2000 }: AutoCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = target / (duration / 100); // update every 50ms
    const interval = setInterval(() => {
      setCount((prev) => {
        const next = prev + increment;
        if (next >= target) {
          clearInterval(interval);
          return target;
        }
        return next;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [target, duration]);

  return (
    <div className="text-4xl font-bold text-center">
      {Math.round(count)}
    </div>
  );
}
