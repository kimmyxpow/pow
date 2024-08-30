import './globals.css';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import Texture from '@/components/texture';
import { ReactNode } from 'react';
import Navbar from '@/components/navbar';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const sans = Nunito({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
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
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
