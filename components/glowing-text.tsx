import { PropsWithChildren } from 'react';
import { cn } from '~/utils/cn';

type Props = {
    className?: string;
};

const GlowingText = ({ children, className }: PropsWithChildren<Props>) => {
    return (
        <span
            className={cn(
                'bg-gradient-to-r from-pink-600 via-fuchsia-600 to-violet-600 bg-clip-text text-transparent',
                className,
            )}
        >
            {children}
        </span>
    );
};

export default GlowingText;
