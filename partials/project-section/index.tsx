import { Icon } from "@iconify/react";
import SectionHeader from "@/components/section-header";
import { initPocketBase } from "@/utils/init-pocketbase";

type Props = {};

const ProjectSection = async (props: Props) => {
    const pb = await initPocketBase();
    const result = await pb.collection("projects").getFullList();

    return (
        <section className="rounded-b-[6rem] bg-stone-100 py-36" id="powjects">
            <div className="container space-y-16">
                <SectionHeader
                    title="Powjects"
                    subtitle="Explore My Creations"
                />
                <div className="space-y-10">
                    {result.map((project) => (
                        <div className="timeline-view grid animate-[down-up] items-center gap-10 xl:grid-cols-2">
                            <div className="aspect-video w-full overflow-hidden rounded-3xl">
                                <img
                                    src={`${process.env.NEXT_PUBLIC_POCKETBASE_URL}/api/files/${project.collectionId}/${project.id}/${project.image}?thumb=100x300`}
                                    alt={project.name}
                                    className="size-full"
                                />
                            </div>
                            <div className="space-y-8">
                                <h3 className="text-5xl font-medium">
                                    {project.name}
                                </h3>
                                <p>{project.description}</p>
                                <div className="space-y-2">
                                    <div className="flex">
                                        <span className="w-20 text-gray-500">
                                            Role
                                        </span>
                                        <span>
                                            {project.roles.map(
                                                (r: string, i: number) =>
                                                    r +
                                                    (i <
                                                    project.roles.length - 1
                                                        ? ", "
                                                        : ""),
                                            )}
                                        </span>
                                    </div>
                                    <div className="flex">
                                        <span className="w-20 text-gray-500">
                                            Stack
                                        </span>
                                        <span>
                                            {project.stack.map(
                                                (r: string, i: number) =>
                                                    r +
                                                    (i <
                                                    project.stack.length - 1
                                                        ? ", "
                                                        : ""),
                                            )}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    {project.link ? (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 rounded-full border border-stone-400 px-6 py-3 text-stone-600 transition-all hover:bg-stone-300"
                                        >
                                            Visit site
                                            <Icon
                                                icon="tabler:external-link"
                                                className="text-xl"
                                            />
                                        </a>
                                    ) : null}
                                    {project.sc ? (
                                        <a
                                            href={project.sc}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 rounded-full bg-stone-800 px-6 py-3 text-stone-200 transition-all hover:bg-stone-700"
                                        >
                                            Source Code
                                            <Icon
                                                icon="tabler:brand-github"
                                                className="text-xl"
                                            />
                                        </a>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;
