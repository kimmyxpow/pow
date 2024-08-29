type Props = {
    title: string;
    subtitle: string;
};

const SectionHeader = ({ title, subtitle }: Props) => {
    return (
        <div className="flex flex-col space-y-2 text-center">
            <span className="timeline-view animate-[up-down] text-sm uppercase tracking-widest">{subtitle}</span>
            <h2 className="timeline-view animate-[up-down] text-3xl">{title}</h2>
        </div>
    );
};

export default SectionHeader;
