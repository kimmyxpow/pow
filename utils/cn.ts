import { ClassNameValue, twMerge } from 'tailwind-merge';
import clsx from 'clsx';

export const cn = (...inputs: ClassNameValue[]) => twMerge(clsx(inputs));
