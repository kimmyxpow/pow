import React from "react";
import SectionHeader from "@/components/section-header";

type Props = {};

const PostSection = (props: Props) => {
    return (
        <section className="bg-stone-100" id="pownderful-insights">
            <div className="rounded-t-[6rem] bg-stone-200 py-36">
                <div className="container space-y-16">
                    <SectionHeader
                        title="Pownderful Insights"
                        subtitle="Thoughts & Tutorials"
                    />
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-20">
                        <div className="space-y-4 border-b border-stone-300 pb-6 timeline-view animate-[down-up]">
                            <div className="relative flex items-center justify-center">
                                <div className="h-0.5 w-full rounded-full bg-stone-800 absolute"></div>
                                <span className="text-sm py-1 px-4 rounded-full bg-stone-800 text-stone-200 inline-block relative">
                                    Thought
                                </span>
                            </div>
                            <h3 className="text-xl">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit
                            </h3>
                            <p className="line-clamp-4">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Cumque, illo! Maiores nemo
                                necessitatibus laudantium, consequuntur
                                veritatis eos reprehenderit id sapiente,
                                mollitia laborum fugiat enim molestiae error.
                                Nisi, architecto sint! Voluptas.
                            </p>
                        </div>
                        <div className="space-y-4 border-b border-stone-300 pb-6 timeline-view animate-[down-up]">
                            <div className="relative flex items-center justify-center">
                                <div className="h-0.5 w-full rounded-full bg-stone-800 absolute"></div>
                                <span className="text-sm py-1 px-4 rounded-full bg-stone-800 text-stone-200 inline-block relative">
                                    Thought
                                </span>
                            </div>
                            <h3 className="text-xl">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit
                            </h3>
                            <p className="line-clamp-4">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Cumque, illo! Maiores nemo
                                necessitatibus laudantium, consequuntur
                                veritatis eos reprehenderit id sapiente,
                                mollitia laborum fugiat enim molestiae error.
                                Nisi, architecto sint! Voluptas.
                            </p>
                        </div>
                        <div className="space-y-4 border-b border-stone-300 pb-6 timeline-view animate-[down-up]">
                            <div className="relative flex items-center justify-center">
                                <div className="h-0.5 w-full rounded-full bg-stone-800 absolute"></div>
                                <span className="text-sm py-1 px-4 rounded-full bg-stone-800 text-stone-200 inline-block relative">
                                    Thought
                                </span>
                            </div>
                            <h3 className="text-xl">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit
                            </h3>
                            <p className="line-clamp-4">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Cumque, illo! Maiores nemo
                                necessitatibus laudantium, consequuntur
                                veritatis eos reprehenderit id sapiente,
                                mollitia laborum fugiat enim molestiae error.
                                Nisi, architecto sint! Voluptas.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PostSection;
