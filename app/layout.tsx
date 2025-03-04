import type { Metadata } from 'next';
import './globals.css';
import { GeistMono } from 'geist/font/mono';
import PowWrapper from '~/components/pow-wrapper';
import { PropsWithChildren } from 'react';

export const metadata: Metadata = {
    title: 'Pow’s Digital Playground | Code, Stories, and Cats',
    description:
        'The personal space of Pow, a software engineer and fiction writer. A place where code meets creativity, and cats rule the world. Explore projects, stories, and thoughts—crafted with passion (and probably some cat hair).',
    keywords: [
        'software engineer',
        'web developer',
        'fiction writer',
        'coding',
        'storytelling',
        'tech blog',
        'creative writing',
        'programming',
        'web development',
        'personal projects',
        'cat lover',
        'Pow',
    ],
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
    return (
        <html lang="en" className={GeistMono.variable}>
            <body className="bg-primary-200 dark:bg-primary-900 font-mono antialiased">
                <PowWrapper>{children}</PowWrapper>
            </body>
        </html>
    );
}
