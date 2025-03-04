import { cn } from '~/utils/cn';

const Divider = ({ className }: { className?: string }) => (
    <hr className={cn('border-zinc-300 dark:border-zinc-800', className)} />
);

export default Divider;
