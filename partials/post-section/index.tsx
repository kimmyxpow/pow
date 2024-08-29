import React from 'react';
import SectionHeader from '@/components/section-header';

type Props = {};

const PostSection = (props: Props) => {
    return (
        <section className="overflow-hidden bg-stone-100" id="pownderful-insights">
            <div className="rounded-t-[6rem] bg-stone-200 py-36">
                <div className="container space-y-16">
                    <SectionHeader title="Pownderful Insights" subtitle="Thoughts & Tutorials" />
                    <div className="relative grid gap-20 md:grid-cols-2 lg:grid-cols-3">
                        <div className="timeline-view animate-[down-up] space-y-4 border-b border-stone-300 pb-6">
                            <div className="relative flex items-center justify-center">
                                <div className="absolute h-0.5 w-full rounded-full bg-stone-800"></div>
                                <span className="relative inline-block rounded-full bg-stone-800 px-4 py-1 text-sm text-stone-200">
                                    Thought
                                </span>
                            </div>
                            <h3 className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
                            <p className="line-clamp-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, illo! Maiores nemo
                                necessitatibus laudantium, consequuntur veritatis eos reprehenderit id sapiente,
                                mollitia laborum fugiat enim molestiae error. Nisi, architecto sint! Voluptas.
                            </p>
                        </div>
                        <div className="timeline-view animate-[down-up] space-y-4 border-b border-stone-300 pb-6">
                            <div className="relative flex items-center justify-center">
                                <div className="absolute h-0.5 w-full rounded-full bg-stone-800"></div>
                                <span className="relative inline-block rounded-full bg-stone-800 px-4 py-1 text-sm text-stone-200">
                                    Thought
                                </span>
                            </div>
                            <h3 className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
                            <p className="line-clamp-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, illo! Maiores nemo
                                necessitatibus laudantium, consequuntur veritatis eos reprehenderit id sapiente,
                                mollitia laborum fugiat enim molestiae error. Nisi, architecto sint! Voluptas.
                            </p>
                        </div>
                        <div className="timeline-view animate-[down-up] space-y-4 border-b border-stone-300 pb-6">
                            <div className="relative flex items-center justify-center">
                                <div className="absolute h-0.5 w-full rounded-full bg-stone-800"></div>
                                <span className="relative inline-block rounded-full bg-stone-800 px-4 py-1 text-sm text-stone-200">
                                    Thought
                                </span>
                            </div>
                            <h3 className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
                            <p className="line-clamp-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, illo! Maiores nemo
                                necessitatibus laudantium, consequuntur veritatis eos reprehenderit id sapiente,
                                mollitia laborum fugiat enim molestiae error. Nisi, architecto sint! Voluptas.
                            </p>
                        </div>
                        <div className="absolute -inset-10 grid place-items-center rounded-xl bg-white/40 backdrop-blur">
                            <span className="text-2xl text-stone-800">Under Construction :D</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PostSection;
