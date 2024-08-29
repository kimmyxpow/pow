import './globals.css';
import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import Texture from '@/components/texture';
import { ReactNode } from 'react';
import Navbar from '@/components/navbar';
import Script from 'next/script';

const sans = Raleway({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    style: ['normal'],
    display: 'swap'
});

export const metadata: Metadata = {
    title: 'Pow',
    description:
        'A software engineer skilled in both backend and frontend development. i also have a good foundation in design, which helps me create functional and visually appealing applications. in my free time, i enjoy playing with cats and exploring the latest technologies :))'
};

export default function RootLayout({
    children
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${sans.className} antialiased`}>
                <Texture />
                <div className="bg-stone-200">
                    <Navbar />
                    {children}
                </div>
            </body>
            <Script
                defer
                src="https://static.cloudflareinsights.com/beacon.min.js"
                data-cf-beacon='{"token": "4b2e0bdbf11b436cb88555bbb3f66fe6"}'
            />
        </html>
    );
}
