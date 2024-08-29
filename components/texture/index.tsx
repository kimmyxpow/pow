'use client';

import { useRef } from 'react';
import { useAnimationFrame } from 'framer-motion';

type Props = {};

const Texture = (props: Props) => {
    const ref = useRef<HTMLDivElement>(null);

    useAnimationFrame((t) => {
        const y = Math.floor(Math.random() * 5);
        const x = Math.floor(Math.random() * 5);
        ref.current ? (ref.current.style.transform = `translateX(${y}%) translateY(${x}%)`) : null;
    });

    return (
        <div
            className='pointer-events-none fixed -inset-24 z-50 bg-[url("/img/texture.png")] opacity-[0.08]'
            ref={ref}
        ></div>
    );
};

export default Texture;
