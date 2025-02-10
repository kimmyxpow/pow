import { cn } from '~/utils/cn';

const Divider = ({ className }: { className?: string }) => <hr className={cn('border-zinc-300', className)} />;

export default Divider;
