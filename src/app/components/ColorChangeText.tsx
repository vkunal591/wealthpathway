"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function ColorChangeText({ text }: { text: string }) {
    const [textColors, setTextColors] = useState<string[]>([]);
    const textRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (textRef.current) {
                const rect = textRef.current.getBoundingClientRect();
                const scrollPercent = Math.max(0, Math.min(1, (window.innerHeight / 2 - rect.top) / window.innerHeight));
                console.log(window?.innerHeight, rect.top, scrollPercent)
                const words = text.split(' ') || [];
                const newColors = words.map((_, i) => (i / words.length < scrollPercent ? 'text-gray-50' : 'text-gray-600'));
                setTextColors(newColors);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [text]);

    return (
        <div className=' flex flex-col items-center justify-center bg-black text-center p-4 lg:p-16 mb-44'>
            <p className='text-4xl md:text-5xl font-bold lg:w-3/5 m-auto text-left mb-20' ref={textRef}>
                {text.split(' ').map((word, index) => (
                    <span key={index} className={`${textColors[index]} transition-colors duration-300`}> {word}</span>
                ))}
            </p>
            <div className='w-full lg:w-3/5 flex justify-start items-center gap-4'>
                <Image
                    src={'/logo.jpeg'}
                    width={800}
                    height={800}
                    alt="profile"
                    className='rounded-full w-16 h-16'
                />
                <div className='text-left'>
                    <h2 className='text-3xl font-semibold'>Sandeep Jethwani</h2>
                    <p className='text-gray-500 font-semibold text-xl'>Co-founder, Welth</p>
                </div>
            </div>
        </div>
    );
}
