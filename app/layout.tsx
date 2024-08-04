import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import Navbar from "@/components/navbar";
import "./globals.css";

const chivo = Quicksand({
    subsets: ["latin"],
    weight: "400",
});

export const metadata: Metadata = {
    title: "Pow",
    description:
        "A software engineer skilled in both backend and frontend development. i also have a good foundation in design, which helps me create functional and visually appealing applications. in my free time, i enjoy playing with cats and exploring the latest technologies :))",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={chivo.className}>
                <div className="bg-stone-200">
                    <Navbar />
                    {children}
                </div>
            </body>
        </html>
    );
}
