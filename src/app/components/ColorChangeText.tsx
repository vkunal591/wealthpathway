"use client"
import React, { useEffect, useState } from 'react';

export default function ColorChangeText({ text }: { text: string }) {
    const [textColors, setTextColors] = useState<string[]>([]);
    const textRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (textRef.current) {
                const rect = textRef.current.getBoundingClientRect();
                const scrollPercent = Math.max(0, Math.min(1, (window.innerHeight/2 - rect.top) / window.innerHeight));
                console.log(window?.innerHeight, rect.top    , scrollPercent)
                const words = text.split(' ') || [];
                const newColors = words.map((_, i) => (i / words.length < scrollPercent ? 'text-gray-50' : 'text-gray-600'));
                setTextColors(newColors);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [text]);

    return (
        <div className='h-screen flex items-center justify-center bg-black text-center p-4 lg:p-16'>
            <p className='text-4xl md:text-7xl font-bold lg:w-3/5 m-auto text-left' ref={textRef}>
                {text.split(' ').map((word, index) => (
                    <span key={index} className={`${textColors[index]} transition-colors duration-300`}> {word}</span>
                ))}
            </p>
          
        </div>
    );
}
