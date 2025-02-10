'use client';

import { useReducedMotion } from 'motion/react';
import GlowingText from '~/components/glowing-text';
import dynamic from 'next/dynamic';

const SparkleEffect = dynamic(() => import('./sparkle-effect'), { ssr: false });

const MainText = () => {
    const prefersReducedMotion = useReducedMotion();

    return (
        <div>
            <h1 className="text-4xl">
                code. write. purr.{' '}
                <GlowingText className="relative italic">
                    nya~~
                    {!prefersReducedMotion && <SparkleEffect />}
                </GlowingText>
            </h1>
        </div>
    );
};

export default MainText;
