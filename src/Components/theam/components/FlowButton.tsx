'use client';

import React from 'react';

export default function FlowButton({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`relative overflow-hidden px-6 py-2.5 text-sm text-white font-medium rounded-full z-10 bg-dark-primary  group ${className}`}
    >
      {/* Expanding BG from center */}
      <span
        className="
          absolute top-0 left-1/2 h-full w-full max-w-0 
          bg-primary 
          transition-all duration-500 ease-in-out 
          group-hover:max-w-full
          -translate-x-1/2 z-0
        "
      />
      {/* Text Layer */}
      <span className="relative z-10 ">{children}</span>
    </button>
  );
}
    