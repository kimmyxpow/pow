'use client';

import { Icon } from '@iconify/react';
import Link from 'next/link';
import { useState } from 'react';
import { cn } from '~/utils/cn';
import { navLinks } from '~/utils/constants';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative z-999 flex items-center justify-between py-8">
            <Link href="/" className="font-medium dark:text-white">
                pow.
            </Link>
            <button className="text-3xl md:hidden" onClick={() => setIsOpen((s) => !s)} aria-label="Toggle Menu">
                <Icon icon="material-symbols-light:grid-view-outline" />
            </button>
            <nav
                className={cn(
                    'bg-primary-100 absolute inset-x-0 top-full flex origin-top flex-col gap-x-8 gap-y-6 p-8 transition-all duration-300 sm:p-0 md:static md:flex-row md:bg-transparent',
                    isOpen ? 'scale-y-100' : 'scale-y-0 md:scale-y-100',
                )}
            >
                {navLinks.map((link) => (
                    <Link
                        onClick={() => setIsOpen(false)}
                        key={link.title}
                        href={link.url}
                        className="text-primary-600 dark:text-primary-300 hocus:underline text-3xl font-bold md:text-base md:font-normal"
                    >
                        {link.title}
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default Navbar;
