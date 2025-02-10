'use client';

import { useRef } from 'react';
import { useAnimationFrame } from 'motion/react';

const Glitch = () => {
    const ref = useRef<HTMLDivElement>(null);

    useAnimationFrame(() => {
        const y = Math.floor(Math.random() * 5);
        const x = Math.floor(Math.random() * 5);
        if (ref.current) {
            ref.current.style.transform = `translateX(${y}%) translateY(${x}%)`;
        }
    });

    return (
        <div
            className='pointer-events-none fixed -inset-24 z-50 bg-[url("/texture.png")] opacity-[0.08]'
            ref={ref}
        ></div>
    );
};

export default Glitch;
