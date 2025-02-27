import { Icon } from '@iconify/react';
import Link from 'next/link';
import { skills } from '~/utils/constants';

const Skills = () => {
    return (
        <div className="flex flex-wrap justify-center gap-8">
            {skills.map((skill) => (
                <Link
                    href={skill.link}
                    key={skill.name}
                    target="_blank"
                    className="group relative size-8 transition-all hover:-translate-y-2"
                >
                    <Icon
                        className="size-full text-zinc-400 transition-all group-hover:text-zinc-800"
                        icon={skill.icon}
                    />
                    <p className="pointer-events-none absolute left-1/2 mt-1 -translate-x-1/2 translate-y-4 text-center text-sm whitespace-nowrap opacity-0 transition-all group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                        {skill.name}
                    </p>
                </Link>
            ))}
        </div>
    );
};

export default Skills;
