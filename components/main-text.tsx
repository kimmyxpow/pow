'use client';

import { type CSSProperties } from 'react';
import { useReducedMotion } from 'motion/react';
import GlowingText from '~/components/glowing-text';
import dynamic from 'next/dynamic';

const COLORS = {
    first: '#9E7AFF',
    second: '#FE8BBB',
} as const;

const SparkleEffect = dynamic(() => import('./sparkle-effect'), { ssr: false });

const MainText = () => {
    const prefersReducedMotion = useReducedMotion();

    return (
        <div
            style={
                {
                    '--sparkles-first-color': COLORS.first,
                    '--sparkles-second-color': COLORS.second,
                } as CSSProperties
            }
        >
            <h1 className="text-4xl">
                code. write. purr.{' '}
                <GlowingText className="relative italic">
                    nya~~
                    {!prefersReducedMotion && <SparkleEffect colors={COLORS} />}
                </GlowingText>
            </h1>
        </div>
    );
};

export default MainText;
