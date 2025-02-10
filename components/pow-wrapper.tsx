'use client';

import { PropsWithChildren } from 'react';
import Divider from '~/components/divider';
import Footer from '~/components/footer';
import Navbar from '~/components/navbar';
import { ReactLenis } from 'lenis/react';
import type { LenisRef } from 'lenis/react';
import { cancelFrame, frame } from 'motion';
import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { useReducedMotion } from 'motion/react';

const CatFollow = dynamic(() => import('~/components/cat-follow'), { ssr: false });
const MouseTrail = dynamic(() => import('~/components/mouse-trail'), { ssr: false });

const PowWrapper = ({ children }: PropsWithChildren) => {
    const lenisRef = useRef<LenisRef>(null);
    const prefersReducedMotion = useReducedMotion();

    useEffect(() => {
        function update(data: { timestamp: number }) {
            const time = data.timestamp;
            lenisRef.current?.lenis?.raf(time);
        }

        frame.update(update, true);

        return () => cancelFrame(update);
    }, []);

    return (
        <ReactLenis options={{ autoRaf: false }} ref={lenisRef} root>
            <div className="mx-auto flex min-h-svh max-w-3xl flex-col px-8">
                <Navbar />
                <Divider />
                {children}
                <Divider className="mt-auto" />
                <Footer />
            </div>
            <div className='not-motion-reduce:animate-glitch pointer-events-none fixed -inset-24 z-50 bg-[url("/texture.png")] opacity-[0.08]'></div>
            {!prefersReducedMotion && (
                <>
                    <MouseTrail />
                    <CatFollow />
                </>
            )}
        </ReactLenis>
    );
};

export default PowWrapper;
