'use client';

import Divider from '~/components/divider';
import Experiences from '~/components/experiences';
import GlowingText from '~/components/glowing-text';
import Skills from '~/components/skills';
import MagnetLines from '~/components/magnet-lines';
import dynamic from 'next/dynamic';

const MainText = dynamic(() => import('~/components/main-text'));
const Cat = dynamic(() => import('~/components/cat'));

const Page = () => {
    return (
        <>
            <section className="relative space-y-8 py-8">
                <main className="grid items-center py-30 sm:grid-cols-2 sm:py-0">
                    <div className="space-y-8">
                        <MainText />
                        <p>welcome to my world of code, stories, and the occasional cat nap.</p>
                    </div>
                    <Cat />
                </main>
                <Divider />
                <h2 className="text-lg">a little about me</h2>
                <p>
                    hi, you can call me <GlowingText>pow</GlowingText>—a quirky nickname that somehow stuck. anw, i’m a{' '}
                    <GlowingText>software engineer</GlowingText> focused on <GlowingText>web development</GlowingText>,
                    but my curiosity doesn’t stop there. i enjoy exploring different areas of programming and constantly
                    challenging myself to learn more.
                </p>
                <Divider />
                <Skills />
                <Divider />
                <Experiences />
                <Divider />
                <p>
                    outside of coding, i’m a writer fueled by a vivid imagination. sometimes, my fantasies blur with
                    reality, and i find myself lost in thought—but i wouldn’t have it any other way.
                </p>
                <p>
                    * when i’m not coding or writing, you’ll find me with my cats, who keep me grounded (and
                    occasionally distracted).
                </p>
            </section>
            <MagnetLines />
        </>
    );
};

export default Page;
