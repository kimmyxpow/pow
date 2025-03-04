import { Icon } from '@iconify/react';
import { projects } from '~/utils/constants';

const Page = () => {
    return (
        <section className="space-y-8 py-8">
            <h1 className="text-4xl">creations & experiments</h1>
            <p>
                a showcase of things i’ve built, broken, and rebuilt—mostly with code, sometimes with sheer willpower.
                from web apps to random side projects, this is where my ideas take shape (and occasionally crash).
            </p>
            <div className="-space-y-px">
                {projects.map((project) => (
                    <div className="border-primary-300 space-y-4 border-y py-8 dark:border-zinc-800" key={project.name}>
                        <h2 className="text-xl">{project.name}</h2>
                        <p>{project.description}</p>
                        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                            <div className="flex flex-wrap gap-1">
                                {project.tags.map((tag) => (
                                    <span className="bg-primary-300 px-4 py-1 text-sm" key={tag}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="flex items-center gap-4">
                                {project.website ? (
                                    <a
                                        href={project.website}
                                        className="bg-primary-800 border-primary-800 hocus:bg-transparent hocus:text-primary-800 border px-6 py-3 text-sm text-white transition-all"
                                    >
                                        view live
                                    </a>
                                ) : null}
                                {project.github ? (
                                    <a href={project.github}>
                                        <Icon icon="simple-icons:github" className="text-2xl" />
                                    </a>
                                ) : null}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Page;

export const dynamic = 'force-static';
