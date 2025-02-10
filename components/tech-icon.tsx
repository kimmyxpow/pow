import { Icon } from '@iconify/react';
import Link from 'next/link';
import React from 'react';

type Props = {
    link: string;
    icon: string;
    name: string;
};

const TechIcon = ({ link, icon, name }: Props) => {
    return (
        <Link href={link} target="_blank" className="group relative transition-all hover:-translate-y-2">
            <Icon className="size-8 text-zinc-400 transition-all group-hover:text-zinc-800" icon={icon} />
            <p className="pointer-events-none absolute left-1/2 mt-1 -translate-x-1/2 translate-y-4 text-center text-sm whitespace-nowrap opacity-0 transition-all group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                {name}
            </p>
        </Link>
    );
};

export default TechIcon;
