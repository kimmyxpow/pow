import React from 'react';
import { Icon } from '@iconify/react';
import SectionHeader from '@/components/section-header';
import { initPocketBase } from '@/utils/init-pocketbase';

type Props = {};

const ExperienceSection = async (props: Props) => {
    const pb = await initPocketBase();
    const result = await pb.collection('experiences').getFullList({
        sort: '-num'
    });

    return (
        <section className="py-36" id="powfessional-journey">
            <div className="container space-y-16">
                <SectionHeader title="Powfessional Journey" subtitle="My Career Path" />
                <div className="relative flex flex-col items-center space-y-10">
                    <div className="absolute z-0 hidden h-full w-2 rounded-full bg-stone-800 lg:block"></div>
                    {result.map((experience, i) => (
                        <div
                            key={experience.id}
                            className={`timeline-view relative flex w-full animate-[up-only] justify-center gap-6 sm:gap-10 ${
                                i % 2 === 0 ? 'flex-col-reverse sm:flex-row' : 'flex-col-reverse sm:flex-row-reverse'
                            }`}
                        >
                            <div className="relative w-full max-w-lg">
                                <div className="mb-2 rounded-xl bg-stone-800 px-8 py-6">
                                    <span className="block text-center text-xl text-white">
                                        {experience.institution}
                                    </span>
                                </div>
                                <div className="flex flex-col space-y-2 rounded-xl bg-stone-200 p-8">
                                    <div className="flex items-center justify-between">
                                        <span className="font-medium text-gray-800">{experience.type}</span>
                                        <span className="text-gray-500">{experience.location}</span>
                                    </div>
                                    <h3 className="text-2xl">{experience.position}</h3>
                                    <div
                                        className="prose mt-4 max-w-none"
                                        dangerouslySetInnerHTML={{
                                            __html: experience.description
                                        }}
                                    ></div>
                                    <p className="text-right lg:hidden">{experience.month}</p>
                                </div>
                                <div
                                    className={`absolute top-1 size-6 rotate-45 rounded bg-stone-800 sm:top-5 sm:translate-y-0 ${
                                        i % 2 === 0
                                            ? 'left-4 sm:left-auto sm:right-1 sm:translate-x-1/2'
                                            : 'left-4 sm:left-1 sm:-translate-x-1/2'
                                    }`}
                                ></div>
                            </div>
                            <div className="grid size-14 shrink-0 place-items-center rounded-full bg-stone-800 text-2xl text-white">
                                {ExpIcon(experience.type)}
                            </div>
                            <div className={`mt-4 hidden w-full max-w-lg lg:block ${i % 2 === 0 ? '' : 'text-right'}`}>
                                <p className="text-stone-800">{experience.month}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ExpIcon = (type: string) => {
    if (type === 'Volunteer') {
        return <Icon icon="tabler:growth" />;
    } else if (type === 'Education') {
        return <Icon icon="tabler:school" />;
    } else {
        return <Icon icon="tabler:briefcase" />;
    }
};

export default ExperienceSection;
