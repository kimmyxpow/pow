import { PropsWithChildren } from 'react';
import { cn } from '~/utils/cn';

type Props = {
    className?: string;
};

const GlowingText = ({ children, className }: PropsWithChildren<Props>) => {
    return (
        <span
            className={cn(
                'bg-gradient-to-r from-pink-600 via-fuchsia-600 to-violet-600 bg-clip-text text-transparent dark:from-pink-400 dark:via-fuchsia-400 dark:to-violet-400',
                className,
            )}
        >
            {children}
        </span>
    );
};

export default GlowingText;
