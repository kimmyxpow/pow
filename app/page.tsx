'use client';

import Image from 'next/image';
import Cat from '~/components/cat';
import GlowingText from '~/components/glowing-text';
import MagnetLines from '~/components/magnet-lines';
import { MainText } from '~/components/main-text';
import TechIcon from '~/components/tech-icon';
import { experiences, techList } from '~/utils/constants';

export default function Home() {
    return (
        <>
            <main className="relative py-8">
                <div className="grid items-center sm:grid-cols-2">
                    <div className="space-y-8">
                        <MainText />
                        <p>welcome to my world of code, stories, and the occasional cat nap.</p>
                    </div>
                    <Cat />
                </div>
            </main>
            <hr className="border-zinc-300" />
            <section className="space-y-8 py-8">
                <h2 className="text-lg">a little about me</h2>
                <p>
                    hi, i’m <GlowingText>noval</GlowingText>, but you can call me <GlowingText>pow</GlowingText>—a
                    quirky nickname that somehow stuck. anw, i’m a <GlowingText>software engineer</GlowingText> focused
                    on <GlowingText>web development</GlowingText>, but my curiosity doesn’t stop there. i enjoy
                    exploring different areas of programming and constantly challenging myself to learn more.
                </p>
                <hr className="border-zinc-300" />
                <div className="flex flex-wrap justify-center gap-8">
                    {techList.map((tech) => (
                        <TechIcon key={tech.link} link={tech.link} name={tech.name} icon={tech.icon} />
                    ))}
                </div>
                <hr className="border-zinc-300" />
                {Object.entries(experiences).map(([category, items]) => (
                    <div key={category} className="space-y-4">
                        <h2 className="text-lg">{category}</h2>
                        <div className="space-y-4">
                            {items.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
                                >
                                    <div className="flex items-center gap-4">
                                        <Image
                                            className="rounded-xl"
                                            src={`/brand/${item.img}`}
                                            alt={item.company}
                                            width={50}
                                            height={50}
                                        />
                                        <div>
                                            <h3>{item.company}</h3>
                                            <p>{item.role}</p>
                                        </div>
                                    </div>
                                    <p className="ml-[65px] text-sm sm:m-0">{item.year}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                <hr className="border-zinc-300" />
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
}
