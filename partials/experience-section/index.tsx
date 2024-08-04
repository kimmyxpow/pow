import React from "react";
import { Icon } from "@iconify/react";
import SectionHeader from "@/components/section-header";
import { initPocketBase } from "@/utils/init-pocketbase";

type Props = {};

const ExperienceSection = async (props: Props) => {
    const pb = await initPocketBase();
    const result = await pb.collection("experiences").getFullList({
        sort: "-num",
    });

    return (
        <section className="py-36" id="powfessional-journey">
            <div className="container space-y-16">
                <SectionHeader
                    title="Powfessional Journey"
                    subtitle="My Career Path"
                />
                <div className="space-y-10 relative flex flex-col items-center">
                    <div className="w-2 h-full bg-stone-800 absolute z-0 rounded-full lg:block hidden"></div>
                    {result.map((experience, i) => (
                        <>
                            <div
                                className={`flex justify-center sm:gap-10 gap-6 w-full relative timeline-view animate-[up-only] ${
                                    i % 2 === 0
                                        ? "sm:flex-row flex-col-reverse"
                                        : "sm:flex-row-reverse flex-col-reverse"
                                }`}
                            >
                                <div className="max-w-lg w-full bg-stone-100 rounded-lg relative">
                                    <div className="bg-stone-800 px-8 py-6 rounded-t-lg">
                                        <span className="text-white text-2xl text-center block">
                                            {experience.institution}
                                        </span>
                                    </div>
                                    <div className="p-8 flex flex-col">
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-500">
                                                {experience.type}
                                            </span>
                                            <span className="text-gray-500">
                                                {experience.location}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl">
                                            {experience.position}
                                        </h3>
                                        <div
                                            className="prose max-w-none mt-4"
                                            dangerouslySetInnerHTML={{
                                                __html: experience.description,
                                            }}
                                        ></div>
                                        <p className="text-right">
                                            {experience.month}
                                        </p>
                                    </div>
                                    <div
                                        className={`size-6 rounded rotate-45 bg-stone-800 absolute sm:top-5 top-1 sm:translate-y-0 -translate-y-1/2 ${
                                            i % 2 === 0
                                                ? "sm:right-1 sm:left-auto left-4 sm:translate-x-1/2"
                                                : "sm:left-1 left-4 sm:-translate-x-1/2"
                                        }`}
                                    ></div>
                                </div>
                                <div className="size-14 shrink-0 rounded-full grid place-items-center bg-stone-800 text-white text-2xl">
                                    {ExpIcon(experience.type)}
                                </div>
                                <div
                                    className={`max-w-lg w-full mt-4 lg:block hidden ${
                                        i % 2 === 0 ? "" : "text-right"
                                    }`}
                                >
                                    <p>{experience.month}</p>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ExpIcon = (type: string) => {
    if (type === "Volunteer") {
        return <Icon icon="tabler:growth" />;
    } else if (type === "Education") {
        return <Icon icon="tabler:school" />;
    } else {
        return <Icon icon="tabler:briefcase" />;
    }
};

export default ExperienceSection;
