import React from "react";
import { motion } from "framer-motion";
import { animaFromTop } from "@/utils/anima";

type Props = {
    title: string;
    subtitle: string;
};

const SectionHeader = ({ title, subtitle }: Props) => {
    return (
        <div className="space-y-2 text-center flex flex-col">
            <span className="uppercase tracking-widest text-gray-500 text-sm timeline-view animate-[up-down]">
                {subtitle}
            </span>
            <h2 className="text-3xl font-thin timeline-view animate-[up-down]">
                {title}
            </h2>
        </div>
    );
};

export default SectionHeader;
